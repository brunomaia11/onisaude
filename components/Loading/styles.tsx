import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Load = styled.Image.attrs({
  source: require('./../../assets/loading.gif'),
})``;
