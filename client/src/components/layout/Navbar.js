import React, { useEffect, useState, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuBar from './menu/MenuBar';
import SearchBar from './search/SearchBar';
import { toggleNav } from '../../controller/frontendController/frontendActions';
import { connect } from 'react-redux';
import CartIcon from '../include/icons/CartIcon'
import HeartIcon from '../include/icons/HeartIcon'
const Navbar = ({ frontend: { cart, wishlist }, toggleNav }) => {
	const [show, setShow] = useState(false);
	const [scroll, setScroll] = useState({
		prevScrollPos: window.pageYOffset,
		visible: true,
		hidden: false
	});

	const handleScroll = () => {
		const { prevScrollPos } = scroll;
		const currentScrollPos = window.pageYOffset;
		let visible = prevScrollPos > currentScrollPos;

		if (currentScrollPos < 60) visible = true;

		setScroll({
			prevScrollPos: currentScrollPos,
			visible
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Fragment>
			<nav className={`navbar ${scroll.visible ? '' : 'navbar-fixed'}`}>
				<div className='navbar__nav'>
					<button className='navbar__button' onClick={() => setShow(!show)}>
						<span></span>
					</button>
					<Link to='/' className='navbar__brand'>
						<img src='https://res.cloudinary.com/deiecmpac/image/upload/v1575744588/logo/pc-master-logo_fv9qjv.png' alt='PC Master Logo' className='navbar__logo' />
					</Link>
					<div className='navbar__search'>
						<SearchBar />
					</div>
					<li className='navbar__list'>
						<NavLink className='btn btn--icon' to='/wishlist'>
							<span className='badge badge--primary'>
								{wishlist && wishlist.length}
							</span>
							<HeartIcon />
						</NavLink>
						<NavLink className='btn btn--icon' to='/cart'>
							<span className='badge badge--primary'>
								{cart && cart.length}
							</span>
							<CartIcon />
						</NavLink>
					</li>
				</div>
				<MenuBar show={show} setShow={setShow} />
			</nav>
		</Fragment>
	);
};
const mapStateToProps = state => ({
	frontend: state.frontend
});
export default connect(mapStateToProps, { toggleNav })(Navbar);
