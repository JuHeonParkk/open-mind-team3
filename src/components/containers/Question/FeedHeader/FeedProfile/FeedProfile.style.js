import styled, { css } from "styled-components";
import { media } from "@/styles/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  ${({ $isScroll }) =>
    $isScroll &&
    css`
      flex-direction: row;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${ProfileContent} {
        flex-direction: row;

        &:hover {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
      }

      ${ProfileImage} {
        display: none;

        ${media.tablet`
          display: block;
          width: 48px;
          height: 48px;
        `};
      }

      ${ProfileName} {
        ${({ theme }) => theme.typography.body1};

        ${media.tablet`
          ${({ theme }) => theme.typography.h3};
        `};
      }

      ${ShareButtons} {
        flex-direction: column;

        ${media.tablet`
          flex-direction: row;
        `};
      }

      ${MobileShareButton} {
        display: block;

        ${media.tablet`
          display: none;
        `}
      }

      ${ShareDropdown} {
        display: none;
        flex-direction: column;

        ${media.tablet` 
          display: flex;
          flex-direction: row;
          position: static;
        `}
      }
    `}
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ProfileImage = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 9999px;

  ${media.tablet`
    width: 136px;
    height: 136px;
  `}
`;

export const ProfileName = styled.p`
  ${({ theme }) => theme.typography.h3};

  ${media.tablet`
    ${({ theme }) => theme.typography.h2};
  `}
`;

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
`;

export const ShareDropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      display: flex;
      position: absolute;
      top: 70px;
      right: 24px;
    `}
`;
