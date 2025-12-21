import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import styled from "styled-components";
import { useState } from "react";
import MobileToggle from "./MobileToggle";
import Overlay from "./Overlay";
const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  margin-left: 260px;
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  padding: 40px;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
    padding-bottom: 90px;
  }
`;
function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <LayoutWrapper>
      <MobileToggle
        onClick={toggleSidebar}
        isOpen={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <Sidebar $isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Overlay $isOpen={isSidebarOpen} onClick={closeSidebar} />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutWrapper>
  );
}

export default AppLayout;
