import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import sample from '../../../resources/images/test-2.jpg';
import NumericField from '../input/NumericField';
const CartCard = () => {
	const cartValue = {
		img: '../../../resources/images/test-2.jpg',
		name: 'Philips SHB1801P Car kit Bluetooth Headset',
		price: 1900.0,
		quantity: 1,
		total: 1900.0
	};

	const [cart, setCart] = useState(cartValue);

	const { img, name, price, quantity, total } = cart;
	const quantityValue = value => {
		console.log(value);
		setCart({ ...cart, quantity: value, total: price * value });
	};

	return (
		<div className='card--cart'>
			<div className='card--cart__img'>
				<img src={sample} alt='' draggable='false' />
			</div>
			<div className='card--cart__description'>
				<Link to='/' className='card--cart__title'>
					{name}
				</Link>

				<p className='card--cart__price'>₱{price}</p>
			</div>

			<NumericField quantityValue={quantityValue} initValue={quantity} />

			<p className='card--cart__total'>
				<span>₱</span> {numeral(total).format('0,0.00')}
			</p>

			<button className='card--cart__remove'>
				<i className='fas fa-times'></i>
			</button>
		</div>
	);
};

export default CartCard;
