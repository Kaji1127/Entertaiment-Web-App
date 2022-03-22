import { NavLink, Outlet, Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/logo.svg;';
// import { ReactComponent as Avatar } from '../../assets/image-avatar.png';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/image-avatar.png';
import { ReactComponent as IconHome } from '../../assets/icon-nav-home.svg';
import { ReactComponent as IconMovie } from '../../assets/icon-nav-movies.svg';
import { ReactComponent as IconTV } from '../../assets/icon-nav-tv-series.svg';
import { ReactComponent as IconBookmark } from '../../assets/icon-nav-bookmark.svg';

import './Navbar.scss';
import SearchInput from '../SearchInput/SearchInput';

const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<nav className="navbar__content">
					<Link to="/">
						<img className="navbar__logo" src={logo} alt="logo" />
					</Link>

					<div className="navbar__links">
						<NavLink to="/">
							<IconHome className="navbar__icon" />
						</NavLink>

						<NavLink to="/movies">
							<IconMovie className="navbar__icon" />
						</NavLink>

						<NavLink to="/tv-series">
							<IconTV className="navbar__icon" />
						</NavLink>

						<NavLink to="/bookmark">
							<IconBookmark className="navbar__icon" />
						</NavLink>
					</div>

					<img className="navbar__profile" src={avatar} alt="avatar" />
				</nav>
			</div>
			<SearchInput />
			<Outlet />
		</>
	);
};

export default Navbar;
