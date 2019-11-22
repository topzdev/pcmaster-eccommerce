import React from 'react';
import {
	makeStyles,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
	Button,
	Fab,
	Grid
} from '@material-ui/core';
import { CategoryOutlined, Add as AddIcon } from '@material-ui/icons';
import ModalList from './modalList/ModalList';

const useStyles = makeStyles(theme => ({
	grid: {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'row',
		width: '100%'
	}
}));

const CategoryModal = ({ show, set }) => {
	const classes = useStyles();
	return (
		<div>
			<Dialog
				open={show}
				onClose={() => set(false)}
				fullWidth={true}
				maxWidth={'sm'}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title'>Category</DialogTitle>
				<DialogContent>
					<DialogContentText>Add and Delete Category</DialogContentText>
					<Grid container>
						<Grid item xs={12}>
							<div>
								<div className={classes.grid}>
									<div style={{ flex: 1 }}>
										<TextField
											autoFocus
											margin='dense'
											id='name'
											label='Add Category'
											fullWidth
										/>
									</div>
									<div style={{ flex: 0 }}>
										<Fab
											color='primary'
											aria-label='add'
											mt={2}
											style={{ marginLeft: 'auto' }}
										>
											<AddIcon />
										</Fab>
									</div>
								</div>
							</div>
						</Grid>
						<Grid item xs={12}>
							<ModalList />
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => set(false)} color='primary'>
						CLose
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CategoryModal;
