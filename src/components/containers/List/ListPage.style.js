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
  height: 57px;
  cursor: pointer;
  object-fit: contain;
`;

export const MainSection = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 40px 24px;
`;

export const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;

  h1 {
    ${({ theme }) => theme.typography.h1};
    color: ${({ theme }) => theme.colors.gray60};
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
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

  .user-name {
    ${({ theme }) => theme.typography.body1};
    color: ${({ theme }) => theme.colors.gray60};
  }

  .question-count {
    ${({ theme }) => theme.typography.caption1Regular};
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

export const SelectButton = styled.button`

  width: 79px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  gap: 4px;
  border-radius: 8px;

  
  ${({ theme }) =>
    theme.typography.caption1Regular}; 
  background-color: ${({ theme }) => theme.colors.gray10};

  
  border: 1px solid
    ${({ theme, $isOpen }) =>
      $isOpen ? theme.colors.gray60 : theme.colors.gray40};

  
  color: ${({ theme, $isOpen }) =>
    $isOpen ? theme.colors.gray60 : theme.colors.gray40};
  cursor: pointer;
  transition: all 0.2s ease;

 
  svg {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    
    path {
      fill: currentColor;
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray60};
    color: ${({ theme }) => theme.colors.gray60};
    background-color: ${({ theme }) => theme.colors.gray20};
  }
`;
export const SelectContainer = styled.div`
  position: relative;
  width: 79px;
`;

export const OptionList = styled.ul`
  position: absolute;
  top: 38px;
  left: 0;
  width: 79px;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.gray10};
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 8px;
  padding: 4px 0;
  margin: 0;
  list-style: none;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.pt1}; 
`;

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;

  ${({ theme }) => theme.typography.caption1Regular};
  color: ${({ theme }) => theme.colors.gray40};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 500;
  }
`;
