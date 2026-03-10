import { BasicButton } from "@/components/common/Button/Button.style";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  max-width: 620px;
`;

export const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.colors.grayscale60};
  line-height: 48px;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubmitButton = styled(BasicButton)`
  width: 100%;
`;
