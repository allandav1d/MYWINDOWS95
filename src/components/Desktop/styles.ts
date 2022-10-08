import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  aspect-ratio: 4/3;
  height: 100%;
  position: absolute;
  background-color: rgb(85, 170, 170);
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 96%;
`;
