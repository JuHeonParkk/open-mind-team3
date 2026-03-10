import styled, { css } from "styled-components";
import { media } from "@/styles/media";

export const ShareListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ $isScroll }) =>
    $isScroll &&
    css`
      flex-direction: column;

      ${media.tablet`
        flex-direction: row;
        position: static;
      `};
    `};
`;
