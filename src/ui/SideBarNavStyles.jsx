import styled from "styled-components";

export const SidebarNav = styled.aside`
  width: 260px;
  height: 100vh;
  background: ${(props) => props.theme.container};
  border-right: 1px solid ${(props) => props.theme.border};
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    /* 1. If $isOpen is false, hide it -100% to the left */
    transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
    z-index: 999;
    /* 2. Add a shadow so it looks like it sits on top of the dashboard */
    box-shadow: ${(props) =>
      props.$isOpen ? "10px 0 40px rgba(0,0,0,0.4)" : "none"};
    display: flex;
    flex-direction: column;
    /* 3. Ensure it stays at full height on mobile */
    height: 100vh;
    width: 280px;
  }
`;

export const NavList = styled.nav`
  /* 1. BASE FLEX (Desktop & Mobile Drawer) */
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 12px;
    color: ${(props) => props.theme.textSecondary};
    text-decoration: none;
    transition: all 0.2s ease;
    font-size: 14px;
    font-weight: 500;

    /* 2. HOVER & ACTIVE (Universal) */
    &:hover:not(.active) {
      color: ${(props) => props.theme.text};
      background: rgba(0, 0, 0, 0.05);
    }

    &.active {
      background: ${(props) => props.theme.body};
      color: ${(props) => props.theme.text};
      font-weight: 600;

      /* Mobile Drawer specific: Add a left accent line instead of top */
      @media (max-width: 768px) {
        border-left: 3px solid ${(props) => props.theme.text};
        border-radius: 0 12px 12px 0;
        background: transparent;
      }
    }

    /* 3. MOBILE DRAWER ADJUSTMENTS */
    @media (max-width: 768px) {
      padding: 16px; /* Larger tap target for thumbs */
      width: 100%;
      /* Keep as Row so it looks like a list in the drawer */
      flex-direction: row;
      gap: 15px;

      span {
        display: inline; /* Ensure text is visible in the drawer */
      }
    }
  }
`;

export const ThemeButton = styled.button`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 16px;
  font-weight: 600;
  border: 1px solid ${(props) => props.theme.border};
`;
