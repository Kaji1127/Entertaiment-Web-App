import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

import './Header.scss';

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="container">
					<Navbar />
				</div>
			</header>
			<main className="main">
				<Outlet />
			</main>
		</>
	);
};

export default Header;
