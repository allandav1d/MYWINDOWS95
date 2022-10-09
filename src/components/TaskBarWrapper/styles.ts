import styled from "styled-components";

export const TaskBarContainer = styled.div`
  height: 100%;
  & > div {
    position: absolute;
    width: calc(100% - 4px);
  }

  .disabled {
    color: #6a6a6a !important;
  }
`;
