import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import Badge from '@material-ui/core/Badge';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Mail from '@material-ui/icons/Mail';
import Notifications from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Menu as MenuIcon } from '@material-ui/icons';

import NavbarItem from './navbarList/NavbarItem';
import NavbarMenu from './navbarList/NavbarMenu';

import { adminLogout } from '../../../controller/authController/admin/authActions';
import { connect } from 'react-redux';

const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	sectionDesktop: {
		display: 'none',
		marginLeft: 'auto',

		[theme.breakpoints.up('md')]: {
			display: 'flex',
			alignItems: 'center'
		}
	}
}));

const Navbar = ({ adminAuth: { logged }, adminLogout }) => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';

	return (
		<div className={classes.root}>
			{console.log(open, anchorEl)}
			<CssBaseline />
			<AppBar
				position='static'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						PCMaster Dashboard
					</Typography>

					<div className={classes.sectionDesktop}>
						<IconButton aria-label='show 4 new mails' color='inherit'>
							<Badge badgeContent={4} color='secondary'>
								<Mail />
							</Badge>
						</IconButton>
						<IconButton aria-label='show 17 new notifications' color='inherit'>
							<Badge badgeContent={17} color='secondary'>
								<Notifications />
							</Badge>
						</IconButton>

						<IconButton
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							onClick={handleProfileMenuOpen}
							color='inherit'
						>
							<AccountCircle />
						</IconButton>
						<Typography component={'h1'} style={{ margin: '0 10px' }}>
							{logged && logged.firstname + ' ' + logged.lastname}
						</Typography>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
					</IconButton>
				</div>
				<Divider />
				<NavbarItem />
			</Drawer>

			<NavbarMenu
				anchorEl={anchorEl}
				menuId={menuId}
				isMenuOpen={isMenuOpen}
				handleMenuClose={handleMenuClose}
				logout={adminLogout}
			/>
		</div>
	);
};
const mapStateToProps = state => ({
	adminAuth: state.adminAuth
});
export default connect(mapStateToProps, { adminLogout })(Navbar);
