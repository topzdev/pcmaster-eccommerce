import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchCard from '../card/SearchCard';
import Backdrop from '../../utils/Backdrop';
import { getProducts } from '../../../controller/productController/productActions';

const SearchBar = ({ product: { products }, getProducts }) => {
	const [search, setSearch] = useState('');
	const [searchProduct, setSearchProduct] = useState([]);

	const onChange = e => {
		const searchString = e.target.value;
		if (searchString) {
			setSearch(searchString);
			getProducts({ name: search });
		} else setSearchProduct(null);
	};

	useEffect(() => {
		if (search) setSearchProduct(products);
	}, [products]);

	const onExit = () => {
		setSearch(null);
		setSearchProduct(null);
	};

	return (
		<div className='search-field'>
			<div className='inp--search'>
				<input
					className='inp'
					type='text'
					placeholder='Search product'
					onChange={onChange}
				/>
				<button>
					<i className='fas fa-search'></i>
				</button>
			</div>
			{!_.isEmpty(searchProduct) && (
				<Fragment>
					<div
						className={`search-field__dropdown ${
							!_.isEmpty(searchProduct) ? 'search-field-expand' : ''
						}`}
					>
						<p className='search-field__label'>
							Search Results for {search && <span>"{search}"</span>}
						</p>
						{searchProduct.splice(0, 5).map(product => (
							<SearchCard key={product._id} data={product} onExit={onExit} />
						))}

						<Link
							to={`/products?name=${search}?category=${search}?subcategory=${search}`}
							className='search-field__view'
						>
							View {searchProduct.length} more related on{' '}
							<span>"{search}"</span>
						</Link>
					</div>
				</Fragment>
			)}
			{/* <Backdrop show={!_.isEmpty(searchProduct)} zIndex='10' /> */}
		</div>
	);
};

const mapStateToProps = state => ({
	product: state.product
});

export default connect(mapStateToProps, { getProducts })(SearchBar);
