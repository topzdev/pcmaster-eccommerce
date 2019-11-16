import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import sample from '../../../resources/images/test-2.jpg';
const WishlistCard = () => {
	const cartValue = {
		img: '../../../resources/images/test-2.jpg',
		name: 'Philips SHB1801P Car kit Bluetooth Headset',
		price: 1900.0,
		quantity: 1,
		total: 1900.0
	};

	const [cart, setCart] = useState(cartValue);

	const { img, name, price, quantity, total } = cart;

	return (
		<div className='card--wishlist'>
			<div className='card--wishlist__img'>
				<img src={sample} alt='' draggable='false' />
			</div>
			<Link to='/' className='card--wishlist__title'>
				{name}
			</Link>

			<p className='card--wishlist__total mr-5'>
				<span>₱</span> {numeral(total).format('0,0.00')}
			</p>

			<button className='btn btn--subcribe'>Add to Cart</button>
			<button className='card--wishlist__remove'>
				<i className='fas fa-times'></i>
			</button>
		</div>
	);
};

export default WishlistCard;
