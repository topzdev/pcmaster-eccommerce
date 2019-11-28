import React from 'react';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const ModalListItem = ({ data, onDelete }) => {
	return (
		<ListItem>
			<ListItemText
				primary={data.title}
				secondary={data.category != null && data.category}
			/>
			<ListItemSecondaryAction>
				<IconButton
					edge='end'
					aria-label='delete'
					onClick={e => onDelete(data._id)}
				>
					<Delete />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default ModalListItem;
