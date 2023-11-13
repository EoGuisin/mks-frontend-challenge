import { Dispatch, SetStateAction } from "react";
import {
  Container,
  ProductContainer,
  ImageContainer,
  DescriptionContainer,
  PriceContainer,
  ProductDescription,
  ProductTitle,
  ProductPrice,
  ProductHeader,
  BuyButton,
  ButtonText,
} from "./styles";
import Image from "next/image";
import ShopBag from "../../images/shop-bag.svg";
import { Products, Product } from "@/api/interface";
import { toast } from 'react-toastify';

interface Props {
  data: Products;
  shopCart: Product[];
  setShopCart: Dispatch<SetStateAction<Product[]>>;
}

export function Content(props: Readonly<Props>) {

  function addToCart(Item: Product) {
    Item.quantity = +1 
    props.shopCart?.push(Item);
    let result: any = {};
    for (const e of props.shopCart) {
      if (result[e.id]) {
        result[e.id].quantity += e.quantity
      } else {
        result[e.id] = {
          id: e.id,
          name: e.name,
          brand: e.brand,
          description: e.description,
          photo: e.photo,
          price: e.price,
          createdAt: e.createdAt,
          updatedAt: e.updatedAt,
          quantity: e.quantity
        }
      };
    }
    props.setShopCart(Object.values(result));
    toast(`Adicionado ${Item.name} de ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(Item.price)} ao carrinho!`);
  }

  return (
    <Container>
      {props.data.products?.map((item) => (
        <ProductContainer key="products">
          <ImageContainer>
            <img src={item.photo} style={{width: 120, height: 120}} />
          </ImageContainer>
          <ProductHeader>
            <ProductTitle>{item.name}</ProductTitle>
            <PriceContainer>
              <ProductPrice>{new Intl.NumberFormat("pt-BR", {style: "currency",currency: "BRL",}).format(item.price)}</ProductPrice>
            </PriceContainer>
          </ProductHeader>
          <DescriptionContainer>
            <ProductDescription>{item.description}</ProductDescription>
          </DescriptionContainer>
          <BuyButton onClick={() => addToCart(item)}>
            <Image src={ShopBag} alt="Shopping Bag" />
            <ButtonText>COMPRAR</ButtonText>
          </BuyButton>
        </ProductContainer>
      ))}
    </Container>
  );
}
