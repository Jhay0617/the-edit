import styled from "styled-components";

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  margin-top: auto; /* Keeps it at the bottom of your Sidebar */
  border-top: 1px solid ${(props) => props.theme.border};

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const ToggleLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.textSecondary};
  text-transform: uppercase;
`;

export const StyledSwitch = styled.div`
  width: 42px;
  height: 22px;
  background-color: ${(props) =>
    props.$active ? props.theme.text : props.theme.border};
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* The Slider Thumb */
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: ${(props) => (props.$active ? "22px" : "2px")};
    width: 18px;
    height: 18px;
    background-color: ${(props) => props.theme.container};
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
