import React from 'react';
import { Container } from '@material-ui/core';
import ProductTable from './productTable/Table';
import SearchBar from './utils/SearchBar';
export default function ProductDashboard() {
	return (
		<Container py={5}>
			<SearchBar />
			<ProductTable />
		</Container>
	);
}
