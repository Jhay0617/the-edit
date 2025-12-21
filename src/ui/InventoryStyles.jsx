import styled from "styled-components";
export const InventoryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* Entrance animation for that premium 2025 feel */
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    gap: 15px;
  }
`;
export const InventoryHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: ${(props) => props.theme.text};
    letter-spacing: -0.5px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    gap: 15px;

    h2 {
      font-size: 22px;
    }
  }
`;

export const PrimaryButton = styled.button`
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    order: 2;
  }
`;
