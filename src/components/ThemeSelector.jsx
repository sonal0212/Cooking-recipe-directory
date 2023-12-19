import { useTheme } from "../hook/useTheme";
import "./ThemeSelector.css";
import modeIcon from "../assets/change-mode.svg";

const themeColors = ["#58249c", "#249c6b", "#b70233"];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={() => changeMode(mode == "light" ? "dark" : "light")}
          src={modeIcon}
          alt="light and dark mode"
          style={{ filter: mode == "light" ? "invert(20%)" : "invert(100%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
