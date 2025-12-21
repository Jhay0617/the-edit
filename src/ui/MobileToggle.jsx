import { Menu, X } from "lucide-react";
import styled from "styled-components";

const MenuIconButton = styled.button`
  display: none;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 1002;
  padding: 10px;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border-radius: 8px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileToggle = ({ isOpen, onClick }) => (
  <MenuIconButton onClick={onClick}>
    {!isOpen ? <X size={28} /> : <Menu size={28} />}
  </MenuIconButton>
);
export default MobileToggle;
