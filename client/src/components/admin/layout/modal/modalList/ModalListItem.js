import React from 'react';
import {
	ListItem,
	IconButton,
	ListItemSecondaryAction,
	ListItemText
} from '@material-ui/core';

import { Delete } from '@material-ui/icons';
const ModalListItem = ({ data, deleteItem }) => {
	return (
		<ListItem>
			<ListItemText primary={data.title} />
			<ListItemSecondaryAction>
				<IconButton
					edge='end'
					aria-label='delete'
					onClick={e => deleteItem(data._id)}
				>
					<Delete />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default ModalListItem;
