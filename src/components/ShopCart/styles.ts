import styled from "styled-components";

export const Container = styled.div`
  width: 486px;
  height: 100%;
  right: 0;
  top: 0;
  position: fixed;
  background: #0f52ba;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

export const ShopCartText = styled.div`
  width: 180px;
  height: 56px;
  color: #ffffff;
  font-size: 27px;
  font-weight: 700;
`;

export const CloseCartText = styled.div`
  color: #ffffff;
  font-size: 28px;
  font-weight: 400;
`;

export const CloseCart = styled.div`
  width: 38px;
  height: 38px;
  background: #000000;
  border-radius: 19px;
  text-align: center;
  cursor: pointer;
`;

export const RemoveProductText = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

export const RemoveProduct = styled.div`
  width: 18px;
  height: 18px;
  background: #000000;
  border-radius: 9px;
  justify-content: flex-end;
  cursor: pointer;
`;

export const Wrapper = styled.main`
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 8px;
`;

export const ProductContainer = styled.div`
  width: 379px;
  height: 95px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  margin-block: 10px;
`;

export const WrapperRemove = styled.main`
  margin-top: -7px;
  margin-right: -7px;
  display: flex;
  justify-content: flex-end;
`;

export const QuantityContainer = styled.div`
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  background: #fff;
  width: 50px;
  height: 19px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const QuantityText = styled.h2`
  color: #000;
  font-size: 5px;
  font-weight: 400;
  margin-top: -10px;
  margin-bottom: 3px;

`;

export const QuantityMoreOrLess = styled.div`
  color: #000;
  width: 5px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
`;

export const QuantityOfItems = styled.div`
  color: #000;
  width: 5px;
  font-size: 12px;
  font-weight: 400;
`;

export const Price = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 700;
`;

export const ProductName = styled.h1`
  width: 113px;
  height: 33px;
  color: #2c2c2c;
  font-size: 13px;
  font-weight: 400;
`;

export const ImageContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 46px;
  height: 57px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

export const BuyButton = styled.div`
  width: 100%;
  height: 97px;
  background: #000000;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BuyText = styled.p`
  color: #FFF;
  font-size: 28px;
  font-weight: 700;
`;

export const TotalContainer = styled.p`
  display: flex;
  margin-block: 30px;
  justify-content: space-between;
  padding-inline: 40px;
  align-items: center;
`;

export const Total = styled.p`
  color: #FFF;
  font-size: 28px;
  font-weight: 700;
`;