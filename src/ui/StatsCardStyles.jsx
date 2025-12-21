import styled from "styled-components";

export const Card = styled.div`
  background: ${(props) => props.theme.container};
  padding: 24px;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
`;

export const Value = styled.h3`
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => props.theme.text};
`;

export const Label = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${(props) => props.theme.textSecondary};
`;
