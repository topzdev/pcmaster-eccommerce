import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import Backdrop from '@material-ui/core/Backdrop';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import CategoryOutlined from '@material-ui/icons/CategoryOutlined';
import LoyaltyOutlined from '@material-ui/icons/LoyaltyOutlined';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ClassIcon from '@material-ui/icons/Class';
import BallotIcon from '@material-ui/icons/Ballot';
import { List as ListIcon } from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
	root: {
		height: 380,
		transform: 'translateZ(0px)',
		flexGrow: 1
	},
	speedDial: {
		position: 'fixed',
		bottom: '30px',
		right: '30px',
		zIndex: 2000
	},
	backdrop: {
		zIndex: 2000
	}
}));

const SpeedDialButtons = () => {
	const classes = useStyles();
	const history = useHistory();
	const [open, setOpen] = React.useState(false);
	const [hidden, setHidden] = React.useState(false);
	const [showCategory, setCategory] = React.useState(false);
	const [showTag, setTag] = React.useState(false);
	const [showBrand, setBrand] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const changeUrl = path => {
		history.push(path);
	};

	const showModal = modal => {
		modal(true);
		setHidden(true);
	};

	return (
		<div>
			<SpeedDial
				ariaLabel='Product Speed Dial'
				className={classes.speedDial}
				hidden={hidden}
				icon={<SpeedDialIcon />}
				onClose={handleClose}
				onOpen={handleOpen}
				open={open}
			>
				<SpeedDialAction
					icon={<ListIcon />}
					tooltipTitle={'Product Dashboard'}
					onClick={() => changeUrl('/admin/product')}
				/>
				<SpeedDialAction
					icon={<ShoppingCart />}
					tooltipTitle={'Add Product'}
					onClick={() => changeUrl('/admin/product/add')}
				/>

				<SpeedDialAction
					icon={<CategoryOutlined />}
					tooltipTitle={'Add Category'}
					onClick={() => changeUrl('/admin/product/category')}
				/>
				<SpeedDialAction
					icon={<ClassIcon />}
					tooltipTitle={'Add SubCategory'}
					onClick={() => changeUrl('/admin/product/sub-category')}
				/>
				<SpeedDialAction
					icon={<BallotIcon />}
					tooltipTitle={'Add Variety'}
					onClick={() => changeUrl('/admin/product/variety')}
				/>
				<SpeedDialAction
					icon={<LoyaltyOutlined />}
					tooltipTitle={'Add Tags'}
					onClick={() => changeUrl('/admin/product/tag')}
				/>
				<SpeedDialAction
					icon={<DescriptionOutlinedIcon />}
					tooltipTitle={'Add Brand'}
					onClick={() => changeUrl('/admin/product/brand')}
				/>
			</SpeedDial>
			<Backdrop open={open} style={{ zIndex: 1400 }} />
		</div>
	);
};

export default SpeedDialButtons;
