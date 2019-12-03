import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import NumericField from '../input/NumericField';
import { Image, Transformation } from 'cloudinary-react';
import { connect } from 'react-redux';
import truncate from 'cli-truncate';
import {
	updateCart,
	removeCart
} from '../../../controller/frontendController/frontendActions';

const CartCard = ({ data, updateCart, removeCart }) => {
	const { _id, img, name, price } = data;
	const [quantity, setQuantity] = useState(data.quantity);

	const quantityValue = value => {
		data.quantity = value;
		updateCart(_id, data);
	};

	return (
		<div className='card--cart'>
			<div className='card--cart__img'>
				<Image publicId={img[0].public_id}></Image>
			</div>
			<div className='card--cart__description'>
				<Link to={`/overview/${name}`} className='card--cart__title'>
					{truncate(name, 55, { position: 'end' })}
				</Link>

				<p className='card--cart__price'>₱{price}</p>
			</div>

			<NumericField quantityValue={quantityValue} initValue={quantity} />

			<p className='card--cart__total'>
				<span>₱</span> {numeral(price * data.quantity).format('0,0.00')}
			</p>

			<button className='card--cart__remove' onClick={() => removeCart(_id)}>
				<i className='fas fa-times'></i>
			</button>
		</div>
	);
};

const mapStateToString = state => ({
	frontend: state.frontend
});

export default connect(mapStateToString, { updateCart, removeCart })(CartCard);
