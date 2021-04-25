import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader, NavigationItem } from './header.style';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';

interface HeaderProps {
	onSetTheme?: () => void;
	checked: boolean;
}

const Header = ({ onSetTheme, checked }: HeaderProps): JSX.Element => {
	const [open, setOpen] = useState(false);

	return (
		<StyledHeader checked={checked} open={open}>
			<nav>
				<div>
					<button onClick={(): void => setOpen(!open)}>
						<div className="burger"/>
					</button>
					<label>
						<div className="switcher-container">
							<div className="image-container">
								<img src={moon} alt="moon"/>
							</div>
							<div className="image-container">
								<img src={sun} alt="sun"/>
							</div>
						</div>
						<div className="switcher"/>
						<input type="checkbox" onChange={onSetTheme}/>
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
						<NavLink to="/about">About me</NavLink>
					</NavigationItem>
				</ul>
			</nav>
		</StyledHeader>
	);
};

export default Header;
