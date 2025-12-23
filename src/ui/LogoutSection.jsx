import styled from "styled-components";

export const LogoutSection = styled.div`
  margin-top: auto; /* Pushes it to the bottom */
  padding: 20px;
  border-top: 1px solid ${(props) => props.theme.border};
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${(props) => props.theme.textSecondary};
  transition: color 0.2s;

  &:hover {
    color: #ff4d4d; /* Subtle red for logout */
  }
`;
