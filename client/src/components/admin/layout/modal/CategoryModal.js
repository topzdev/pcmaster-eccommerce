import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
	getCategory,
	addCategory,
	deleteCategory
} from '../../../../actions/optionsActions';
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
import { Add as AddIcon } from '@material-ui/icons';
import ModalList from './modalList/ModalList';

const useStyles = makeStyles(theme => ({
	grid: {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'row',
		width: '100%'
	}
}));

const CategoryModal = ({
	show,
	set,
	options: { categories },
	getCategory,
	addCategory,
	deleteCategory
}) => {
	const classes = useStyles();
	const [title, setTitle] = useState('');
	useEffect(() => {
		if (categories == null && show === true) {
			getCategory();
			console.log('fetch');
		}
	}, []);

	const onChange = e => setTitle(e.target.value);

	const onAddCategory = () => {
		addCategory(title);
		setTitle('');
	};

	return (
		<div>
			{console.log(categories)}
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
											name='title'
											valuue={title}
											label='Add Category'
											fullWidth
											onChange={onChange}
										/>
									</div>
									<div style={{ flex: 0 }}>
										<Fab
											color='primary'
											aria-label='add'
											mt={2}
											style={{ marginLeft: 'auto' }}
											onClick={onAddCategory}
										>
											<AddIcon />
										</Fab>
									</div>
								</div>
							</div>
						</Grid>
						<Grid item xs={12}>
							<ModalList data={categories} deleteItem={deleteCategory} />
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

const mapStateToProps = state => ({
	options: state.options
});

export default connect(mapStateToProps, {
	getCategory,
	addCategory,
	deleteCategory
})(CategoryModal);
