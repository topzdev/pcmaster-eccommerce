import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import qs from 'query-string';
import 'rc-pagination/assets/index.css';

//Components
import Sort from '../layout/productFilter/Sorter';
import Paginate from '../layout/productFilter/Pagination';
import CardProduct from '../layout/card/CardProduct';
import ProductCategoryLoader from '../utils/loader/ProductCategoryLoader';
import BannerPage from '../include/BannerPage';
import HeaderChanger from '../utils/HeaderChanger';
//Actions
import { getProducts } from '../../controller/productController/productActions';

const Collections = ({
	product: { products, loading },
	location,
	getProducts
}) => {
	const [view, setView] = useState(true);
	const [show, setShow] = useState(24);
	const [sort, setSort] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [productShow, setProduct] = useState([]);

	let {
		category,
		brand,
		variety,
		subcategory,
		name,
		logical,
		search
	} = qs.parse(location.search);

	useEffect(() => {
		if (products) {
			const indexOfLastProduct = currentPage * show;
			const indexOfFirstProduct = indexOfLastProduct - show;
			setProduct(products.slice(indexOfFirstProduct, indexOfLastProduct));
		}
	}, [products, show, currentPage]);

	useEffect(() => {
		logical = 'and'
		if (search) {
			category = subcategory = name = variety = brand = search;
			logical = 'or'
			console.log(logical)
			console.log(category);
		}
		getProducts({
			logical,
			category,
			subcategory,
			name,
			variety,
			brand
		});
	}, [category, subcategory, search]);

	return (
		<Fragment>
			<BannerPage
				title={
					search
						? `Searched for ${search}`
						: `${_.capitalize(category)}${
						subcategory ? '/' + _.capitalize(subcategory) : ''
						}`
				}
			/>
			<div className='container pt-2 pb-5'>
				<div className='col-12'>
					<Sort
						setView={setView}
						view={view}
						show={show}
						setShow={setShow}
						sort={sort}
						setSort={setSort}
					/>
				</div>
				<div className='col-12 mb-2'>
					<Paginate
						length={products && products.length}
						currentPage={currentPage}
						setCurPage={setCurrentPage}
						small={true}
					/>
				</div>
				{loading ? (
					<ProductCategoryLoader view={view} />
				) : (
						<div className='row mr-0'>
							<HeaderChanger
								name={'Product '}
								description={'Search products in PC Master Shop'}
							/>
							{productShow &&
								productShow.map(product => (
									<div
										key={product.barcode}
										className={`${
											view ? 'col-xl-3 col-lg-4 col-md-6 col-12' : 'col-12'
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

				<Paginate
					length={products && products.length}
					currentPage={currentPage}
					setCurPage={setCurrentPage}
				/>
			</div>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	product: state.product
});

export default connect(mapStateToProps, { getProducts })(Collections);
