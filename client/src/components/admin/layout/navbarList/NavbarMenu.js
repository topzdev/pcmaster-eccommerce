import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const NavbarMenu = ({
	history,
	anchorEl,
	menuId,
	isMenuOpen,
	handleMenuClose,
	logout
}) => {
	const onLogout = () => {
		logout();
		// history.push('/admin/sign-in/');
	};
	return (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
			<MenuItem onClick={onLogout}>Logout</MenuItem>
		</Menu>
	);
};

export default NavbarMenu;
