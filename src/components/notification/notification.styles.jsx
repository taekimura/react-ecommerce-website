import styled from 'styled-components';

export const NotificationBox = styled.div`
background-color: rgba(10, 40, 30, 0.9);
color: white;
font-size: 18px;
position: fixed;
left: calc((100vw - 1630px) / 2 + 16px);
z-index: 999;
border-radius: 10px;
transition: bottom 0.5s ease;
padding-left: 20px;
min-width: 200px;
max-width: 250px;
overflow: hidden;
  
@media screen and (max-width: 1630px) {
  left: 16px;
  }
  
display: flex;
align-items: center;
justify-content: space-between;  
`;

export const NotificationText = styled.div`
max-width: 75%;
white-space: pre-line;
`;

export const Dismiss = styled.div`
padding: 18px;
cursor: pointer;
transition: all 0.2s ease;

&:hover {
color: rgb(218, 63, 36);
background-color: rgba(56, 56, 56, 0.95);
} 
`;