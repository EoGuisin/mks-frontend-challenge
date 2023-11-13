import {
  TitleMain,
  ComplementTitle,
  ContainerTitle,
  ContainerHeader,
  ContainerCart,
  NumberShopCart,
} from "./styles";
import Image from "next/image";
import ShopCart from "../../images/shop-cart.svg";

interface Props {
  onClick(): void;
  totalShopCart: number;
}

export function Header(props: Props) {
  return (
    <ContainerHeader>
      <ContainerTitle>
        <TitleMain>MKS</TitleMain>
        <ComplementTitle>Sistemas</ComplementTitle>
      </ContainerTitle>
      <ContainerCart onClick={props.onClick}>
        <Image src={ShopCart} alt="Shopping Cart" />
        <NumberShopCart>{props.totalShopCart}</NumberShopCart>
      </ContainerCart>
    </ContainerHeader>
  );
}
