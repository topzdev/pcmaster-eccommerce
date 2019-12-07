import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignInCopyright from './SignInCopyright';
import HeaderChanger from '../../utils/HeaderChanger';
import { connect } from 'react-redux';

import {
	loginAdmin,
	checkAdmin
} from '../../../controller/authController/admin/authActions';

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

const AdminSignInPage = ({
	adminAuth: { isAuthenticated },
	history,
	loginAdmin,
	error
}) => {
	const classes = useStyles();

	const initialState = {
		email: '',
		password: ''
	};

	useEffect(() => {
		if (isAuthenticated) history.push('/admin/product/');
	}, [isAuthenticated, history]);

	const [credentials, setCredentials] = useState(initialState);

	const onChange = e => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const onClick = () => {
		loginAdmin(credentials);
	};

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<HeaderChanger
				name={'Sign in '}
				description={'Welcome to! Admin Sign In Page'}
			/>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<div className={classes.form} noValidate>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						value={credentials.email}
						id='email'
						label='Email Address'
						name='email'
						type='email'
						autoComplete='email'
						onChange={onChange}
						autoFocus
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						value={credentials.password}
						name='password'
						label='Password'
						type='password'
						id='password'
						onChange={onChange}
						autoComplete='current-password'
					/>
					<FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
						onClick={onClick}
					>
						Sign In
					</Button>
				</div>
			</div>
			<Box mt={8}>
				<SignInCopyright />
			</Box>
		</Container>
	);
};

const mapStateToProps = state => ({
	adminAuth: state.adminAuth
});

export default connect(mapStateToProps, { loginAdmin, checkAdmin })(
	AdminSignInPage
);
