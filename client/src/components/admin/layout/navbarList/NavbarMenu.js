import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const NavbarMenu = ({ open, setOpen, anchorEl, setAnchorEl }) => {
	const handleMenuClose = () => {
		setOpen(false);
		setAnchorEl(null);
	};

	return (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={'user-dropdown'}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={open}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
			<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
		</Menu>
	);
};

export default NavbarMenu;
