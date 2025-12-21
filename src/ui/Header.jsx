import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li>
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/admin/inventory">Inventory</NavLink>
      </li>
      <li>
        <NavLink to="/admin/users">User</NavLink>
      </li>
      <li>
        <NavLink to="/admin/settings">Admin Settings</NavLink>
      </li>
    </ul>
  );
}

export default Header;
