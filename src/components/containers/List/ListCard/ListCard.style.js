import styled from "styled-components";
import { media } from "@/styles/media";

export const CardProfile = styled.div`
  background: ${({ theme }) => theme.colors.gray10};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

`

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray10};
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 187px;
  cursor: pointer;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.pt1};

  ${media.pc`
    
    width: 220px;
    `
  }

`;


export const SubjectName = styled.div`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.colors.gray60};
`;




export const SubjectImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;

`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

`

export const QuestionLabel = styled.div`
  gap: 4px;
  align-items: center;
  display: flex;

  svg {
    width: 18px;
    height: 18px;
  }


`
export const QuestionCount = styled.div`
  ${({ theme }) => theme.typography.body2};
  color: ${({ theme }) => theme.colors.gray40};
`;