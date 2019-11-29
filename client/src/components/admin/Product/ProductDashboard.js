import React from './node_modules/react';
import { Container } from './node_modules/@material-ui/core';
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
