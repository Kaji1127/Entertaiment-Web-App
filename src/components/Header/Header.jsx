import React from 'react';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/image-avatar.png';
import { ReactComponent as IconHome } from '../../assets/icon-nav-home.svg';
import { ReactComponent as IconMovie } from '../../assets/icon-nav-movies.svg';
import { ReactComponent as IconTV } from '../../assets/icon-nav-tv-series.svg';
import { ReactComponent as IconBookmark } from '../../assets/icon-nav-bookmark.svg';

import './Header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="container flex header__container">
				<img src={logo} alt="Logo" className="header__logo" />
				<nav className="header__nav">
					<ul className="header__icon">
						<li>
							<IconHome className="header__icon-img active" />
						</li>
						<li>
							<IconMovie className="header__icon-img" />
						</li>
						<li>
							<IconTV className="header__icon-img" />
						</li>
						<li>
							<IconBookmark className="header__icon-img" />
						</li>
					</ul>
				</nav>
				<div className="header__profile">
					<img src={avatar} alt="profileImage" />
				</div>
			</div>
		</header>
	);
};

export default Header;
