import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	root: {
		marginLeft: 'auto'
	},
	input: {
		flex: 1
	}
}));

export default function CustomizedInputBase() {
	const classes = useStyles();

	return (
		<Paper component='form' className={classes.root}>
			<IconButton className={classes.iconButton} aria-label='menu'>
				<MenuIcon />
			</IconButton>
			<TextField id='standard-basic' label='Search Product here' />
			<IconButton
				type='submit'
				className={classes.iconButton}
				aria-label='search'
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
