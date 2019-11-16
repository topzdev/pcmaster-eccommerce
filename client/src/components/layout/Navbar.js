import React, { useEffect, useState, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../resources/images/pc-master-logo.png';
import AdminNavbar from '../admin/AdminNavbar';
import MenuBar from './menu/MenuBar';
const Navbar = () => {
	const [admin, setAdmin] = useState(true);
	useEffect(() => {
		setAdmin(window.location.pathname.toString().includes('admin'));
	}, [admin]);

	if (admin) {
		return <AdminNavbar />;
	} else {
		return (
			<Fragment>
				<nav className={`navbar`}>
					<div className='navbar__nav'>
						<Link to='/' className='navbar__brand'>
							<img src={logo} alt='PCMR' className='navbar__logo' />
						</Link>

						<div className='navbar__search'>
							<div className='inp--search'>
								<input
									className='inp'
									type='text'
									placeholder='Search product'
								/>
								<button>
									<i class='fas fa-search'></i>
								</button>
							</div>
						</div>

						<li className='navbar__list'>
							<NavLink className='btn btn--icon mr-2' to='/wishlist'>
								<span className='badge badge--primary'>1</span>
								<i class='far fa-heart'></i>
							</NavLink>
							<NavLink className='btn btn--icon' to='/cart'>
								<span className='badge badge--primary'>1</span>
								<i class='fas fa-shopping-cart'></i>
							</NavLink>
						</li>
					</div>
				</nav>
				<MenuBar />
			</Fragment>
		);
	}
};

export default Navbar;
