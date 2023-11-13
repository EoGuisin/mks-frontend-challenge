import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  background: #0F52BA;
  height: 101px;
  justify-content: space-between;
  align-items: center;
  padding-inline: 60px;
`;

export const ContainerCart = styled.header`
  display: flex;
  background: #FFFFFF;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleMain = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: 600;
`;

export const ComplementTitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 300;
  margin-top: 13px;
  margin-left: 10px;
`;

export const NumberShopCart = styled.div`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
`;
