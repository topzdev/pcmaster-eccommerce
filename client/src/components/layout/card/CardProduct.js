import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import truncate from 'cli-truncate';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import { addToCart } from '../../../controller/frontendController/frontendActions';
import { connect } from 'react-redux';

const Card = ({ size, data, addToCart }) => {
	const [show, setShow] = useState(false);
	const { _id, name, overview, price, img } = data;

	const onAddCart = () => {
		addToCart(data, 1);
	};

	return (
		<div className={`card--primary ${size}`} onMouseEnter={() => setShow(true)}>
			<div className='card--primary__main'>
				<Image
					className='card--primary__img'
					publicId={img[0].public_id}
				></Image>
				<Image
					className='card--primary__b-img'
					publicId={show && img[1] ? img[1].public_id : ''}
				></Image>

				<Link to={`/overview/${name}`} className='card--primary__cover'></Link>
			</div>

			<div className='card--primary__body'>
				<Link to='/overview' className='card--primary__title'>
					{truncate(name, 50, { position: 'end' })}
				</Link>
				<p className='card--primary__price'>
					{'₱' + numeral(price).format('0,0.00')}
				</p>
				<div className='card--primary__description'>
					{truncate(overview, 300, { position: 'end' })}
				</div>
				<div className='card--primary__btn'>
					<button className='card--primary__link' onClick={onAddCart}>
						<span>
							<i className='fas fa-shopping-cart'></i>
						</span>
						<p>Add to cart</p>
					</button>
					<button className='card--primary__link'>
						<span>
							<i className='far fa-eye'></i>
						</span>
					</button>
					<button className='card--primary__link'>
						<span>
							<i className='far fa-heart'></i>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	frontend: state.frontend
});

export default connect(mapStateToProps, { addToCart })(Card);
