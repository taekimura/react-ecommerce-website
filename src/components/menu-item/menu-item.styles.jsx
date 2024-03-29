import styled from 'styled-components';

export const WrapContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  margin:0;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
`;

export const MenuItemContainer = styled.div`
  font-family: 'Bellota Text', cursive;
	height: ${({ size }) => (size ? '360px' : '300px')};
	min-width:30%;
	overflow: hidden;
	flex: 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
  overflow: hidden;
  margin: 20px 0px 0px 0px;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.8;
		}
  }
  @media screen and (max-width: 800px) {
    height: 300px;
    width: 100%;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 80px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color:white;
  opacity: 0.7;
  &:hover {
    background-color: #e4e4e4 ;
		}
`;

export const ContentTitle = styled.span`
  margin-bottom: 6px;
  font-size: 18px;
  color: black;
`;

export const ContentSubtitle = styled.span`
  font-weight: 700;
  font-size: 13px;
  color: #9F5752;
`;