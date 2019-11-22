import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import {
	List as ListIcon,
	ShoppingCart,
	LoyaltyOutlined,
	CategoryOutlined
} from '@material-ui/icons';

import CategoryModal from '../layout/modal/CategoryModal';
import TagModal from '../layout/modal/TagModal';
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
		zIndex: 4000
	}
}));

const SpeedDialButtons = (props, { setPage }) => {
	const classes = useStyles();
	const history = useHistory();
	const [open, setOpen] = React.useState(false);
	const [hidden, setHidden] = React.useState(false);
	const [showCategory, setCategory] = React.useState(false);
	const [showTag, setTag] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const openCategoryModal = () => {
		setCategory(true);
		handleClose();
	};

	const changeUrl = path => {
		history.push(path);
	};

	return (
		<div>
			{/* <Backdrop className={classes.backdrop} open={open} /> */}
			<SpeedDial
				ariaLabel='SpeedDial openIcon example'
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
					onClick={() => setCategory(true)}
				/>
				<SpeedDialAction
					icon={<LoyaltyOutlined />}
					tooltipTitle={'Add Tags'}
					onClick={() => setTag(true)}
				/>
				{/* {console.log(showCategory)} */}
				<CategoryModal show={showCategory} set={setCategory} />
				<TagModal show={showTag} set={setTag} />
			</SpeedDial>
		</div>
	);
};

export default SpeedDialButtons;
