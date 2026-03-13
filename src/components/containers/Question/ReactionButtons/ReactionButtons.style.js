import styled, { css } from "styled-components";
import { BasicButton } from "@/components/common/Button/Button.style";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const ReactionButton = styled(BasicButton)`
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  gap: 16px;
  color: ${({ theme }) => theme.colors.gray50};
  background-color: ${({ theme }) => theme.colors.gray10};

  ${({ $isDislikeClicked, $variant }) =>
    $isDislikeClicked &&
    $variant === "dislike" &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.red};
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.gray10};
    `}

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.gray10};
    background-color: ${({ theme }) => theme.colors.blue};
    box-shadow: none;

    ${({ $variant, theme }) =>
      $variant === "dislike" &&
      css`
        border: 1px solid ${theme.colors.red};
        background-color: ${theme.colors.red};
      `}
  }
`;

export const ReactionCount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
