import React, { Fragment } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
const PreLoader = () => {
	return (
		<Fragment>
			<LinearProgress style={{ width: '100%', position: 'absolute', top: 0, left: 0 }} />
		</Fragment>
	);
};

export default PreLoader;
