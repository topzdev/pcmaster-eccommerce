import React, { Fragment, useState } from './node_modules/react';
import InputAdornment from './node_modules/@material-ui/core/InputAdornment';
import List from './node_modules/@material-ui/core/List';
import Divider from './node_modules/@material-ui/core/Divider';
import Grid from './node_modules/@material-ui/core/Grid';
import IconButton from './node_modules/@material-ui/core/IconButton';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import TextField from './node_modules/@material-ui/core/TextField';
import SearchIcon from './node_modules/@material-ui/icons/Search';
import ProductListItem from './ProductListItem';

const useStyles = makeStyles(theme => ({
	input: {
		display: 'flex',
		flex: 1,
		width: '300px'
	}
}));

const ProductList = ({ data, onDelete, title }) => {
	const classes = useStyles();
	const [search, setSearch] = useState('');
	const onChange = e => setSearch(e.target.value);
	return (
		<List dense={false} height={800}>
			<Grid container align={'center'} style={{ margin: '10px 0' }}>
				<Grid item>
					<h2>{title} List</h2>
				</Grid>
				<Grid item container justify={'flex-end'}>
					<div className={classes.input}>
						<TextField
							fullWidth
							name={'category'}
							value={search}
							label={`Search ${title}`}
							className={classes.input}
							onChange={onChange}
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton onClick={() => {}} aria-label='delete'>
											<SearchIcon />
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
					</div>
				</Grid>
			</Grid>
			{data != null &&
				data.map((item, idx) => (
					<Fragment key={item._id}>
						<ProductListItem data={item} onDelete={onDelete} />
						<Divider />
					</Fragment>
				))}
		</List>
	);
};

export default ProductList;
