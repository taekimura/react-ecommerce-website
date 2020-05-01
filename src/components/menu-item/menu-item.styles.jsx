import styled from 'styled-components';

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
  margin: 35px 0px 0px 0px;
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
`;
// border: 1px solid black;
// margin: 0 7.5px 15px;
// &:first-child {
//   margin-right: 7.5px;
// }
// &:last-child {
//   margin-left: 7.5px;
// }

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
  opacity: 0.6;
  &:hover {
    background-color:white;
    opacity: 0.9;
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