import React from './node_modules/react';
import ListItemSecondaryAction from './node_modules/@material-ui/core/ListItemSecondaryAction';
import ListItem from './node_modules/@material-ui/core/ListItem';
import ListItemText from './node_modules/@material-ui/core/ListItemText';

import Delete from './node_modules/@material-ui/icons/Delete';
import IconButton from './node_modules/@material-ui/core/IconButton';

const ModalListItem = ({ data, onDelete }) => {
	return (
		<ListItem>
			<ListItemText
				primary={data.title}
				secondary={
					(data.category != null && data.category) ||
					(data.subcategory != null && data.subcategory)
				}
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
