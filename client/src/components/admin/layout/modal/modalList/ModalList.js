import React from 'react';
import { List, Divider } from '@material-ui/core';
import ModalListItem from './ModalListItem';
const ModalList = ({ data, deleteItem }) => {
	return (
		<List dense={true}>
			<Divider />
			{data != null &&
				data.map(item => (
					<ModalListItem key={item._id} data={item} deleteItem={deleteItem} />
				))}
		</List>
	);
};

export default ModalList;
