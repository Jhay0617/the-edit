import { X } from "lucide-react";
import styled from "styled-components";
import useAdminAction from "../hooks/useAdminAction";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px); /* The 2025 effect */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: ${(props) => props.theme.container};
  width: 90%;
  max-width: 500px;
  border-radius: 32px;
  padding: 40px;
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  animation: popIn 0.3s ease;

  @keyframes popIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${(props) => props.theme.border};
  color: ${(props) => props.theme.text};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.theme.textSecondary};
  }
`;

function Modal({ onClose, children }) {
  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={16} />
        </CloseButton>
        {children}
      </ModalContent>
    </Overlay>
  );
}

export default Modal;
