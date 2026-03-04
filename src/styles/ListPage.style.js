import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray20};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 80px;
  padding: 0 24px;
`;

export const LogoImg = styled.img`
  width: 146px;
  height: 54px;
  cursor: pointer;
  object-fit: contain;
`;

export const Button = styled.button`
  ${({ theme }) => theme.typography.body3};
  
  padding: 12px 24px;
  border-radius: 8px;
  
  border: 1px solid ${({ theme }) => theme.colors.brown40};
  background-color: ${({ theme }) => theme.colors.brown10};
  color: ${({ theme }) => theme.colors.brown40};
  
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.brown20};
  }
`;

export const MainSection = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 40px 24px;
`;

export const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  
  h1 {
    ${({ theme }) => theme.typography.h1};
    color: ${({ theme }) => theme.colors.gray60};
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CardItem = styled.div`
  background: ${({ theme }) => theme.colors.gray10};
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 187px;
  cursor: pointer;
  
 
  box-shadow: ${({ theme }) => theme.shadows.pt1};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.pt2};
  }

  
  .user-name {
    ${({ theme }) => theme.typography.body1};
    color: ${({ theme }) => theme.colors.gray60};
  }

  .question-count {
    ${({ theme }) => theme.typography.caption1Regular};
    color: ${({ theme }) => theme.colors.gray40};
  }
`;