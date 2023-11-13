"use client";
import { useState, useEffect } from "react";
import { Header, Content, Footer, ShopCart } from "@/components";
import { fetchProducts } from "@/api";
import { ContentContainer } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/api/interface";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["fetchProducts"],
    queryFn: () => fetchProducts(),
  });
  const [visibleCart, setVisibleCart] = useState<boolean>(false);
  const [shopCart, setShopCart] = useState<Product[]>([]);
  const [totalShopCart, setTotalShopCart] = useState<number>(0);

  useEffect(() => {
    setTotalShopCart(shopCart.reduce(getTotal, 0));
    function getTotal(total: number, item: Product) {
      return total + item.quantity;
    }
  }, [shopCart]);

  const styleSkeleton1 = { width: 200, height: 275, borderRadius: 8, marginTop: 120, marginLeft: 25 }
  const styleSkeleton2 = { width: 200, height: 275, borderRadius: 8, marginTop: 15, marginLeft: 25 }


  if(isLoading) {
    return (
      <div>
        <Skeleton height={101} />
          <Skeleton style={{ width: 200, height: 275, borderRadius: 8, marginTop: 100, marginLeft: 470 }} inline />
          <Skeleton style={styleSkeleton1} inline />
          <Skeleton style={styleSkeleton1} inline />
          <Skeleton style={styleSkeleton1} />
          <Skeleton style={{ width: 200, height: 275, borderRadius: 8,  marginLeft: 470 }} inline />
          <Skeleton style={styleSkeleton2} inline />
          <Skeleton style={styleSkeleton2} inline />
          <Skeleton style={styleSkeleton2} inline />
        <Skeleton style={{
          height: 34,
          background: "#eeeeee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
        }} />
      </div>
    );
  }

  return (
    <main>
      <Header
        totalShopCart={totalShopCart}
        onClick={() => {
          setVisibleCart(true);
        }}
      />
        <ContentContainer>
          <Content data={data} setShopCart={setShopCart} shopCart={shopCart} />
        </ContentContainer>
        <Footer />
      {visibleCart && (
        <ShopCart
          setTotalShopCart={setTotalShopCart}
          shopCart={shopCart}
          setShopCart={setShopCart}
          onClick={() => {
            setVisibleCart(false);
          }}
        />
      )}
      <ToastContainer />
    </main>
  );
}
