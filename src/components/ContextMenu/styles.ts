import styled from "styled-components";

export const ScreenBox = styled.div`
  position: fixed !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100% !important;
  z-index: 650;
`;

export const RightMenu = styled.div`
  position: absolute;
  z-index: 600;

  ul {
    padding: 2px 0;
  }

  li {
    margin: 2px;
  }

  .disabled {
    color: #6a6a6a !important;
  }
`;
