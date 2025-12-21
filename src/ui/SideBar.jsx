import { NavList, SidebarNav, ThemeButton } from "./SideBarNavStyles";
import { LayoutDashboard, Package, Settings, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

import ThemeSwitch from "./ThemeSwitch";

import { useSelector } from "react-redux";

function Sidebar({ $isOpen }) {
  const { storeName } = useSelector((state) => state.admin.storeSettings);
  return (
    <SidebarNav $isOpen={$isOpen}>
      <h2
        style={{ marginBottom: "40px", fontSize: "18px", letterSpacing: "2px" }}
      >
        {storeName}
      </h2>

      <NavList>
        <NavLink to="/admin" end>
          <LayoutDashboard size={20} /> Dashboard
        </NavLink>
        <NavLink to="/admin/inventory">
          <Package size={20} /> Inventory
        </NavLink>
        <NavLink to="/admin/users">
          <Users size={20} /> Users
        </NavLink>
        <NavLink to="/admin/settings">
          <Settings size={20} /> Settings
        </NavLink>
      </NavList>

      <ThemeSwitch />
    </SidebarNav>
  );
}

export default Sidebar;
