import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { Image } from 'cloudinary-react';
import { connect } from 'react-redux';
import {
	addToCart,
	removeWishlist
} from '../../../controller/frontendController/frontendActions';
const WishlistCard = ({
	frontend: { wishlist },
	data,
	addToCart,
	removeWishlist
}) => {
	const { _id, img, name, price } = data;
	const onAddWishlist = () => {
		console.log(data);
		addToCart(data, 1);
		removeWishlist(_id);
	};
	return (
		<div className='card--wishlist'>
			<div className='card--wishlist__img'>
				<Image publicId={img[0].public_id} draggable='false'></Image>
			</div>
			<Link to='/' className='card--wishlist__title'>
				{name}
			</Link>

			<p className='card--wishlist__total mr-5'>
				<span>₱</span> {numeral(price).format('0,0.00')}
			</p>

			<button className='btn btn--subcribe' onClick={onAddWishlist}>
				Add to Cart
			</button>
			<button
				className='card--wishlist__remove'
				onClick={() => removeWishlist(_id)}
			>
				<i className='fas fa-times'></i>
			</button>
		</div>
	);
};

const mapStateToProps = state => ({
	frontend: state.frontend
});

export default connect(mapStateToProps, { addToCart, removeWishlist })(
	WishlistCard
);
