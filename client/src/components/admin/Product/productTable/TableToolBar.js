import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { lighten, makeStyles } from './node_modules/@material-ui/core/styles';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import IconButton from './node_modules/@material-ui/core/IconButton';
import Tooltip from './node_modules/@material-ui/core/Tooltip';
import FilterListIcon from './node_modules/@material-ui/icons/FilterList';
import TableSearch from './TableSearch';
const TableToolbar = props => {
	return (
		<Toolbar style={{ padding: '20px' }}>
			<Typography variant='h6' id='tableTitle'>
				Products Table
			</Typography>

			<Tooltip title='Filter list'>
				<IconButton aria-label='filter list'>
					<FilterListIcon />
				</IconButton>
			</Tooltip>

			<TableSearch />
		</Toolbar>
	);
};

export default TableToolbar;
