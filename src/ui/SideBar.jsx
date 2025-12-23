import { NavList, SidebarNav, ThemeButton } from "./SideBarNavStyles";
import {
  LayoutDashboard,
  LogOut,
  Package,
  Settings,
  Users,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import ThemeSwitch from "./ThemeSwitch";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { toast } from "sonner";
import { LogoutSection } from "./LogoutSection";

function Sidebar({ $isOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate("/login");
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast.info("You are logged out");
  };
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
      <LogoutSection onClick={handleLogout}>
        <LogOut size={18} />
        <span>Logout</span>
      </LogoutSection>
    </SidebarNav>
  );
}

export default Sidebar;
