import React from 'react';
import Dashboard from '@material-ui/icons/Dashboard';
import Settings from '@material-ui/icons/Settings';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import CategoryOutlined from '@material-ui/icons/CategoryOutlined';
import LoyaltyOutlined from '@material-ui/icons/LoyaltyOutlined';
import ClassIcon from '@material-ui/icons/Class';
import BallotIcon from '@material-ui/icons/Ballot';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import List from '@material-ui/core/List';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import { List as ListIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
	nested: {
		paddingLeft: theme.spacing(4)
	}
}));

const NavbarItem = () => {
	const classes = useStyles();
	const [menuOpen, setMenuOpen] = React.useState({
		product: false
	});

	const handleMenuClick = menu => {
		setMenuOpen({ ...menuOpen, [menu]: menuOpen[menu] ? false : true });
	};
	return (
		<List>
			<ListItem button component={Link} to='/admin'>
				<ListItemIcon>
					<Dashboard />
				</ListItemIcon>
				<ListItemText primary={'Dashboard'} />
			</ListItem>
			<ListItem button onClick={() => handleMenuClick('product')}>
				<ListItemIcon>
					<ShoppingCart />
				</ListItemIcon>
				<ListItemText primary='Product' />
				{menuOpen.product ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={menuOpen.product} timeout='auto' unmountOnExit>
				<List component='div' disablePadding>
					<ListItem
						button
						component={Link}
						to='/admin/product'
						className={classes.nested}
					>
						<ListItemIcon>
							<ListIcon />
						</ListItemIcon>
						<ListItemText primary='Dashboard' />
					</ListItem>
					<ListItem
						button
						component={Link}
						to='/admin/product/add'
						className={classes.nested}
					>
						<ListItemIcon>
							<ShoppingCart />
						</ListItemIcon>
						<ListItemText primary='Add Product' />
					</ListItem>
					<ListItem
						button
						component={Link}
						to='/admin/product/category'
						className={classes.nested}
					>
						<ListItemIcon>
							<CategoryOutlined />
						</ListItemIcon>
						<ListItemText primary='Add Category' />
					</ListItem>
					<ListItem
						button
						component={Link}
						to='/admin/product/sub-category'
						className={classes.nested}
					>
						<ListItemIcon>
							<ClassIcon />
						</ListItemIcon>
						<ListItemText primary='Add Sub Category' />
					</ListItem>
					<ListItem
						button
						component={Link}
						to='/admin/product/variety'
						className={classes.nested}
					>
						<ListItemIcon>
							<BallotIcon />
						</ListItemIcon>
						<ListItemText primary='Add Variety' />
					</ListItem>
					<ListItem
						button
						component={Link}
						to='/admin/product/tag'
						className={classes.nested}
					>
						<ListItemIcon>
							<LoyaltyOutlined />
						</ListItemIcon>
						<ListItemText primary='Add Tags' />
					</ListItem>
					<ListItem
						button
						component={Link}
						to='/admin/product/brand'
						className={classes.nested}
					>
						<ListItemIcon>
							<DescriptionOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary='Add Brand' />
					</ListItem>
				</List>
			</Collapse>
			<ListItem button component={Link} to='/admin/setting'>
				<ListItemIcon>
					<Settings />
				</ListItemIcon>
				<ListItemText primary={'Settings'} />
			</ListItem>
		</List>
	);
};

export default NavbarItem;
