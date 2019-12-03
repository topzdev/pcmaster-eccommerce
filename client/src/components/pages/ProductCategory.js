import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sort from '../layout/search/Sorter';
import CardProduct from '../layout/card/CardProduct';
import { connect } from 'react-redux';
import { getProducts } from '../../controller/productController/productActions';
import ProductCategoryLoader from '../utils/loader/ProductCategoryLoader';
import _ from 'lodash';
import qs from 'query-string';
const Collections = ({
	product: { products, loading },
	location,
	getProducts
}) => {
	const [view, setView] = useState(true);
	const { category } = useParams();
	let { brand, variety, subcategory } = qs.parse(location.search);

	useEffect(() => {
		if (!products) getProducts({ category, subcategory });
	}, [products]);

	return (
		<div className='container pt-2 pb-5 mt-4'>
			<div className='row'>
				<div className='col-12 mb-2'>
					<h1 className='heading--primary'>{_.capitalize(category)}</h1>
				</div>
			</div>
			<div className='row'>
				<div className='col-12 mb-2'>
					<Sort setView={setView} view={view} />
				</div>
			</div>
			{loading ? (
				<ProductCategoryLoader view={view} />
			) : (
				<div className='row'>
					{products &&
						products.map(product => (
							<div
								key={product.barcode}
								className={`${
									view ? 'col-lg-3 col-md-4 col-12' : 'col-12'
								} mb-2`}
							>
								<CardProduct
									size={view ? '' : 'card--big__cart'}
									data={product}
								/>
							</div>
						))}
				</div>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	product: state.product
});

export default connect(mapStateToProps, { getProducts })(Collections);
