import styled, { css } from "styled-components";
import { media } from "@/styles/media";

export const ShareButtons = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  & button {
    cursor: pointer;
    transition:
      transform 0.15s ease,
      opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

export const MobileShareButton = styled.button`
  display: none;

  ${({ $isScroll }) =>
    $isScroll &&
    css`
      display: block;

      ${media.tablet`
          display: none;
      `}
    `};
`;

export const ShareDropdown = styled.div`
  // 스크롤 안 했을 때
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;

  // 스크롤 했을 때
  ${({ $isScroll, $isOpen }) =>
    $isScroll &&
    css`
      display: ${$isOpen ? "flex" : "none"};
      flex-direction: column;
      position: absolute;
      top: 55px;
      right: -7px;
      z-index: 100;

      ${media.tablet`
        display: flex;
        position: static;
        flex-direction: row;
      `};
    `}
`;
