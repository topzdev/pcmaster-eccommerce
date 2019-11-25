import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import TableSearch from './TableSearch';
const TableToolbar = props => {
	return (
		<Toolbar>
			<Typography variant='h6' id='tableTitle'>
				Products
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
