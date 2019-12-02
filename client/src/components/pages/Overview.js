import React, { useEffect, Fragment, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ImageListView from '../layout/ImageListView';
import ProductTab from '../layout/productView/ProductTab';
import NumericField from '../layout/input/NumericField';
import Scroll from 'react-scroll';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { searchProduct } from '../../controller/productController/productActions';
import {
	addToCart,
	addWishlist
} from '../../controller/frontendController/frontendActions';
import _ from 'lodash';
//Tabs

const ProductDetails = ({
	product: { current },
	searchProduct,
	addToCart,
	addWishlist
}) => {
	const { name } = useParams();
	const [quantity, setQuantity] = useState(1);
	const quantityValue = value => {};

	useEffect(() => {
		searchProduct({ name });
		Scroll.animateScroll.scrollToTop();
	}, []);

	const [data, setData] = useState({
		_id: '',
		overview: '',
		description: [],
		tags: [],
		sku: '',
		price: '',
		quantity: '',
		subcategory: '',
		variety: '',
		category: '',
		brand: '',
		img: []
	});

	useEffect(() => {
		if (current) setData(current);
		console.log(current);
	}, [current]);

	return (
		<div className='container'>
			<div className='details'>
				<ImageListView img={!_.isEmpty(data.img) && data.img} />
				<div className='divdetails__description'>
					<h1 className='details__title'>{name && name}</h1>
					<p className='details__price'>
						₱{data.price && numeral(data.price).format('0,0.00')}
					</p>
					<p className='details__overview mb-2'>
						{data.overview && data.overview}
					</p>
					<div className='details__main-btn'>
						<NumericField initValue={quantity} quantityValue={setQuantity} />
					</div>
					<button
						className='btn btn--primary mt-2'
						onClick={() => addToCart(data, quantity)}
					>
						<span>
							<i className='fas fa-shopping-cart'></i>
						</span>
						Add to Cart
					</button>

					<div className='details__btn'>
						<button className='btn btn--wishlist'>
							<span>
								<i className='far fa-heart'></i>
							</span>
							Add to Wishlist
						</button>
						<button className='btn btn--wishlist'>
							<span>
								<i className='fas fa-random'></i>
							</span>
							Compare Product
						</button>
					</div>

					<ul className='details__others'>
						<li>
							<b>SKU: </b>
							<Link to='/'>{data.sku && data.sku}</Link>
						</li>
						<li>
							<b>Category: </b>
							<Link to='/'>{data.category && _.capitalize(data.category)}</Link>
							<Link to='/'>
								{data.subcategory && _.capitalize(data.subcategory)}
							</Link>
						</li>
						<li>
							<b>Tags: </b>
							{data.tags &&
								data.tags.map((tag, idx) => (
									<Fragment key={idx}>
										<Link to='/'>{_.capitalize(tag)}</Link>
									</Fragment>
								))}
						</li>
						<li>
							<b>Share: </b>
							<Link to='/'>
								<span>
									<i className='fab fa-facebook'></i>
								</span>
							</Link>{' '}
							<Link to='/'>
								<span>
									<i className='fab fa-twitter'></i>
								</span>
							</Link>{' '}
							<Link to='/'>
								<span>
									<i className='fab fa-pinterest'></i>
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='details__tab'>
				<ProductTab description={data.description} />
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	product: state.product
});
export default connect(mapStateToProps, {
	searchProduct,
	addToCart,
	addWishlist
})(ProductDetails);
