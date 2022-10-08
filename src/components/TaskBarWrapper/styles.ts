import styled from "styled-components";

export const TaskBarContainer = styled.div`
  height: 100%;
  & > div {
    position: absolute;
    width: calc(100% - 4px);
  }
`;
