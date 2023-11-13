import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  CloseCart,
  RemoveProduct,
  CloseCartText,
  Container,
  ShopCartText,
  Header,
  ProductContainer,
  ImageContainer,
  ProductName,
  QuantityContainer,
  QuantityMoreOrLess,
  QuantityText,
  QuantityOfItems,
  Price,
  RemoveProductText,
  Content,
  Wrapper,
  WrapperRemove,
  BuyButton,
  BuyText,
  Total,
  TotalContainer,
} from "./styles";
import QuantityBar from "../../images/quantity-bar.svg";
import { Product } from "@/api/interface";
import { toast } from "react-toastify";

interface Props {
  onClick(): void;
  shopCart: Product[];
  setShopCart: Dispatch<SetStateAction<Product[]>>;
  setTotalShopCart: Dispatch<SetStateAction<number>>;
}

export function ShopCart(props: Readonly<Props>) {
  const [total, setTotal] = useState<number>(0);

  async function removeOneProduct(item: Product, index: number) {
    item.quantity = item.quantity - 1;
    props.setShopCart(props.shopCart);
    toast(
      `Removido ${item.name} do carrinho, será retirado ${new Intl.NumberFormat(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      ).format(item.price)} do seu valor total!`
    );
  }

  async function removeProduct(item: Product, index: number) {
    props.shopCart.splice(index, 1);
    props.setShopCart(props.shopCart);
    toast(
      `Removido ${item.name} do carrinho, será retirado ${new Intl.NumberFormat(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      ).format(item.price)} do seu valor total!`
    );
  }

  async function addOneProduct(item: Product) {
    item.quantity = item.quantity + 1;
    props.setShopCart(props.shopCart);
    toast(`Adicionado mais um ${item.name} no carrinho!`);
  }

  useEffect(() => {
    setTotal(props.shopCart.reduce(getTotal, 0));
    function getTotal(total: number, item: Product) {
      return total + item.price * item.quantity;
    }
  }, [props.shopCart]);

  useEffect(() => {
    props.setTotalShopCart(props.shopCart.reduce(getTotal, 0));
    function getTotal(total: number, item: Product) {
      return total + item.quantity;
    }
  }, [props.shopCart]);

  return (
    <Container>
      <Header>
        <ShopCartText>Carrinho de compras</ShopCartText>
        <CloseCart onClick={props.onClick}>
          <CloseCartText>x</CloseCartText>
        </CloseCart>
      </Header>
      <Content>
        {props.shopCart?.map((item, index) => (
          <ProductContainer key="shopCart">
            <WrapperRemove>
              <RemoveProduct onClick={() => removeProduct(item, index)}>
                <RemoveProductText>x</RemoveProductText>
              </RemoveProduct>
            </WrapperRemove>
            <Wrapper>
              <ImageContainer>
                <img src={item.photo} style={{ width: 50, height: 50 }} />
              </ImageContainer>
              <ProductName>{item.name}</ProductName>
              <div>
                <QuantityText>Qtd:</QuantityText>
                <QuantityContainer>
                  <QuantityMoreOrLess
                    onClick={() => {
                      if (item.quantity == 1) removeProduct(item, index);
                      else removeOneProduct(item, index);
                    }}
                  >
                    -
                  </QuantityMoreOrLess>
                  <Image src={QuantityBar} alt="Quantity Bar" />
                  <QuantityOfItems>{item.quantity}</QuantityOfItems>
                  <Image src={QuantityBar} alt="Quantity Bar" />
                  <QuantityMoreOrLess onClick={() => addOneProduct(item)}>
                    +
                  </QuantityMoreOrLess>
                </QuantityContainer>
              </div>
              <Price>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.price)}
              </Price>
            </Wrapper>
          </ProductContainer>
        ))}
      </Content>
      <TotalContainer>
        <Total>Total:</Total>
        <Total>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </Total>
      </TotalContainer>
      <BuyButton
        style={{
          position: props.shopCart.length == 0 ? "absolute" : "relative",
          bottom: props.shopCart.length == 0 ? 0 : undefined,
        }}
      >
        <BuyText>Finalizar Compra</BuyText>
      </BuyButton>
    </Container>
  );
}
