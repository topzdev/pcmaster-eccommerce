import React from 'react';
import { List, Divider } from '@material-ui/core';
import ModalListItem from './ModalListItem';
const ModalList = () => {
	return (
		<List dense={true}>
			{/* Map here */}
			<Divider />
			<ModalListItem data={{}} />
		</List>
	);
};

export default ModalList;
