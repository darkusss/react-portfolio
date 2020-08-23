import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader, NavigationItem } from "./header.style";
import { HeaderProps } from "../../utils/types";
import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";

const Header: React.FC<HeaderProps> = ({ onSetTheme, checked }) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader checked={checked} open={open}>
      <nav>
        <div>
          <button onClick={() => setOpen(!open)}>
            <div className="burger"></div>
          </button>
          <label>
            <div className="switcher-container">
              <div className="image-container">
                <img src={moon} alt="moon" />
              </div>
              <div className="image-container">
                <img src={sun} alt="sun" />
              </div>
            </div>
            <div className="switcher"></div>
            <input type="checkbox" onChange={onSetTheme} />
          </label>
        </div>
        <ul>
          <NavigationItem>
            <NavLink to="/">Home</NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to="/projects">Projects</NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to="/other">Other</NavLink>
          </NavigationItem>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
