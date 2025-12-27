import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.border};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    border-top: none;
    padding-top: 0;
  }
`;

const BaseButton = styled.button`
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.container};
  border: 1px solid transparent;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: transparent;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.body};
    border-color: ${(props) => props.theme.textSecondary};
  }
`;
