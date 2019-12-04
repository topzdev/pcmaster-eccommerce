import React, { useEffect, useState, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../resources/images/pc-master-logo.png';
import MenuBar from './menu/MenuBar';
import SearchBar from './search/SearchBar';
import { connect } from 'react-redux';
const Navbar = ({ frontend: { cart, wishlist } }) => {
	return (
		<Fragment>
			<nav className={`navbar`}>
				<div className='navbar__nav'>
					<Link to='/' className='navbar__brand'>
						<img src={logo} alt='PCMR' className='navbar__logo' />
					</Link>
					<SearchBar />
					<li className='navbar__list'>
						<NavLink className='btn btn--icon mr-2' to='/wishlist'>
							<span className='badge badge--primary'>
								{wishlist && wishlist.length}
							</span>
							<i className='far fa-heart'></i>
						</NavLink>
						<NavLink className='btn btn--icon' to='/cart'>
							<span className='badge badge--primary'>
								{cart && cart.length}
							</span>
							<i className='fas fa-shopping-cart'></i>
						</NavLink>
					</li>
				</div>
			</nav>
			<MenuBar />
		</Fragment>
	);
};
const mapStateToProps = state => ({
	frontend: state.frontend
});
export default connect(mapStateToProps)(Navbar);
