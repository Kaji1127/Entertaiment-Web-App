import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../icons/logo.svg';
import Avatar from '../../icons/image-avatar.png';
import { ReactComponent as IconHome } from '../../icons/icon-nav-home.svg';
import { ReactComponent as IconMovie } from '../../icons/icon-nav-movies.svg';
import { ReactComponent as IconTV } from '../../icons/icon-nav-tv-series.svg';
import { ReactComponent as IconBookmark } from '../../icons/icon-nav-bookmark.svg';
import SearchContext from '../../context/SearchContext';

import './Navbar.scss';

const Navbar = () => {
	const searchCtx = useContext(SearchContext);
	return (
		<>
			<nav className="navbar">
				<Link
					className="navbar__logo"
					to="/"
					onClick={() => searchCtx.setResult([])}
				>
					<img src={Logo} alt="logo" />
				</Link>
				<div className="navbar__menu">
					<NavLink
						className="navbar__icon"
						to="/"
						onClick={() => searchCtx.setResult([])}
					>
						<IconHome />
					</NavLink>
					<NavLink
						className="navbar__icon"
						to="/movies"
						onClick={() => searchCtx.setResult([])}
					>
						<IconMovie />
					</NavLink>
					<NavLink
						className="navbar__icon"
						to="/tv-series"
						onClick={() => searchCtx.setResult([])}
					>
						<IconTV />
					</NavLink>
					<NavLink
						className="navbar__icon"
						to="/bookmark"
						onClick={() => searchCtx.setResult([])}
					>
						<IconBookmark />
					</NavLink>
				</div>
				<img src={Avatar} alt="Avatar" className="navbar__avatar" />
			</nav>
		</>
	);
};

export default Navbar;
