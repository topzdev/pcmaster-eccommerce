import React from 'react';
import {
	ListItem,
	IconButton,
	ListItemSecondaryAction,
	ListItemText
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
const ModalListItem = ({ data }) => {
	return (
		<ListItem>
			<ListItemText primary='ASUS' secondary='Secondary text' />
			<ListItemSecondaryAction>
				<IconButton edge='end' aria-label='delete'>
					<Delete />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default ModalListItem;
