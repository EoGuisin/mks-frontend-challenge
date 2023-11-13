import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 938px;
  height: 601px;
  overflow: auto;
`;

export const ProductContainer = styled.div`
  width: 218px;
  height: 285px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  position: relative;
`;

export const ImageContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 15px;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-inline: 5px;
`;

export const ProductTitle = styled.p`
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 400;
  width: 124px;
  height: 38px;
`;

export const ProductPrice = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductDescription = styled.div`
  color: #2c2c2c;
  font-size: 10px;
  font-weight: 300;
  height: 25px;
  margin-inline: 5px;
`;

export const PriceContainer = styled.div`
  height: 26px;
  border-radius: 5px;
  background: #373737;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const BuyButton = styled.footer`
  width: 218px;
  height: 31.907px;
  border-radius: 0px 0px 8px 8px;
  background: #0f52ba;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 0;

`;

export const ButtonText = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-left: 15px;
`;
