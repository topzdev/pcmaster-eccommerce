import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartCard from '../layout/card/CartCard';
import { connect } from 'react-redux';
import numeral from 'numeral';
import _ from 'lodash';
const Cart = ({ frontend: { cart } }) => {
	const [summary, setSummary] = useState({
		quantity: 0,
		amount: 0,
		shipping: 50,
		subtotal: 0
	});

	useEffect(() => {
		let data = {
			quantity: 0,
			amount: 0,
			subtotal: 0,
			shipping: 50
		};
		cart.map(item => {
			data.quantity += parseFloat(item.quantity);
			data.amount += parseFloat(item.quantity * item.price);
		});
		data.subtotal = data.shipping + data.amount;
		setSummary(data);
	}, [cart]);

	const { quantity, amount, shipping, subtotal } = summary;

	return (
		<div className='container'>
			<div className='cart'>
				<div className='cart__main'>
					<h1 className='heading--primary'>Shopping Cart</h1>

					{!_.isEmpty(cart) && (
						<p className='cart__count'>{cart.length + ' items'} </p>
					)}

					<div className='cart__list'>
						{cart && cart.map(item => <CartCard key={item.id} data={item} />)}
					</div>

					<Link to={`/overview/${cart.name}`} className='btn btn--more'>
						<span>&#8636; </span> Continue Shopping
					</Link>
				</div>

				<div className='cart__summarry'>
					<h1 className='heading--primary mb-3'>Summarry</h1>
					<div className='row mb-1'>
						<div className='col-4'>
							<h3 className='cart__title'>Total Quantity</h3>
						</div>
						<div className='col-8'>
							<p className='cart__total'>{quantity && quantity}</p>
						</div>
					</div>
					<div className='row mb-1'>
						<div className='col-4'>
							<h3 className='cart__title'>Total Amount</h3>
						</div>
						<div className='col-8'>
							<p className='cart__total'>
								<span>₱</span> {amount && numeral(amount).format('0,0.00')}
							</p>
						</div>
					</div>
					<div className='row mb-3'>
						<div className='col-4'>
							<h3 className='cart__title'>Shipping total</h3>
						</div>
						<div className='col-8'>
							<p className='cart__total'>
								<span>₱</span> {shipping && numeral(shipping).format('0,0.00')}
							</p>
						</div>
					</div>

					<div className='row mb-2'>
						<div className='col-4'>
							<h3 className='cart__title'>Subtotal</h3>
						</div>
						<div className='col-8'>
							<p className='cart__total'>
								<span>₱</span> {subtotal && numeral(subtotal).format('0,0.00')}
							</p>
						</div>
					</div>

					<button className='btn btn--summarry mt-4'>Proceed Checkout</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	frontend: state.frontend
});
export default connect(mapStateToProps)(Cart);
