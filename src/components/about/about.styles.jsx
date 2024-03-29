import styled from 'styled-components';

export const DaiContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
`;

export const CheckoutItemContainer = styled.div`
  font-family: 'Julius Sans One', sans-serif;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderImg = styled.img.attrs({
    src: 'https://i.ibb.co/F60gqL5/banner.png'
})`
width:90%;
@media screen and (max-width: 800px) {
  width:180%;
  margin-botton:30px;
}
`

export const TextContainer = styled.span`
  color:#c1bfb2;
  width: 100%;
  font-size:18px;
  text-align:center;
  margin-top: 50px;
  @media screen and (max-width: 800px) {
    margin-top: 70px;
    width: 120%;
    font-size:15px;
  }
`;