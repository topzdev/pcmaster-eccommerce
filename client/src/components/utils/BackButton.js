import React from 'react';
import { useHistory } from 'react-router-dom';
const BackButton = props => {
	const history = useHistory();

	return (
		<button className='btn btn--more' onClick={() => history.goBack()}>
			<span>&#8636; </span> Continue Shopping
		</button>
	);
};

export default BackButton;
