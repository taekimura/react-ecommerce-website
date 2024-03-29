import styled from 'styled-components';

export const SignUpContainer = styled.div`
  font-family: 'Julius Sans One', sans-serif;
  margin-top:90px;
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 520px) {
    width: 90%;
  }
  @media screen and (min-width: 521px) and (max-width: 800px) {
    width: 80%;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;