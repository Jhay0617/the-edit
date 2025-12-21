import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/adminSlice";
import { StyledSwitch, SwitchWrapper, ToggleLabel } from "./SwitchStyles";

function ThemeSwitch() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.admin.isDarkMode);

  return (
    <SwitchWrapper>
      <ToggleLabel>{isDarkMode ? "Dark" : "Light"}</ToggleLabel>
      <StyledSwitch
        $active={isDarkMode}
        onClick={() => dispatch(toggleTheme())}
      />
    </SwitchWrapper>
  );
}

export default ThemeSwitch;
