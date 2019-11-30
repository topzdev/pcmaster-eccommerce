import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const SignInCopyright = () => {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://pcmastershop.heroku.com/'>
				PC Master Administrator Dashboard
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export default SignInCopyright;
