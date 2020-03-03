import styled, { keyframes } from 'styled-components';

const onlineShadow = keyframes`
  0% {
    box-shadow: 0 0 0 0 #759D78;
  }

  50% {
    box-shadow: 0 0 50px 0 #759D78;
  }

  100% {
    box-shadow: 0 0 0 0 #759D78;
  }
`;

export const Container = styled.div`
  width: 30%;
  height: 300px;
  box-sizing: border-box;
  padding: 20px;
  background: #fcfbfc;
  border-radius: 40px;
  position: relative;
  margin-bottom: 30px;

  &.status-offline {
    opacity: 0.5;
  }
  &.status-online {
    opacity: 1;
    animation: ${onlineShadow} 2s linear;
  }
`;

export const Title = styled.h1`
  color: #0e0216;
  border-bottom: 1px solid #c8b7b0;
`;

export const StatusFoot = styled.div`
  background: ${props => (props.status === 'offline' ? '#FF3514' : '#759D78')};
  position: absolute;
  width: 100%;
  height: 65px;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fcfbfc;
  text-transform: capitalize;
  border-top: 1px solid #c8b7b0;
`;
