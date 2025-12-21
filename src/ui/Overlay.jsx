import styled from "styled-components";

const Overlay = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: fixed;
    backdrop-filter: blur(9px);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;

export default Overlay;
