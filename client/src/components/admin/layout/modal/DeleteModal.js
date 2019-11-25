import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteModal({ open, setOpen, execDelete, id }) {
	const handleDelete = () => {
		execDelete(id);
		setOpen(false);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					Are you sure to Delete this product ?
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Click delete if you want to continue delete.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} autoFocus>
						Cancel
					</Button>
					<Button onClick={handleDelete} color='secondary'>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
