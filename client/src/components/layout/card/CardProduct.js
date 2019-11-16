import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Card = ({ size, data }) => {
	data = {
		title: 'MSI MPG X570 GAMING EDGE WIFI',
		price: '₱10,970.00',
		img_orig:
			'https://asset.msi.com/resize/image/global/product/product_3_20190527092824_5ceb3d3885f21.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
		img_hover:
			'https://static.bhphoto.com/images/images2500x2500/1562456871_1489703.jpg',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatibus nisi neque, rerum dolor est quidem ea eius impedit reprehenderit error autem, velit quasi? Odit suscipit iusto beatae dolorum amet.'
	};
	const [show, setShow] = useState(false);
	const { title, price, img_orig, img_hover, description } = data;
	return (
		<div className={`card--primary ${size}`} onMouseEnter={() => setShow(true)}>
			<div className='card--primary__main'>
				<img className='card--primary__img' src={img_orig} alt='' />
				<img
					className='card--primary__b-img'
					src={show ? img_hover : ''}
					alt=''
				/>

				<Link to='/overview' className='card--primary__cover'></Link>
			</div>

			<div className='card--primary__body'>
				<Link to='/overview' className='card--primary__title'>
					{title}
				</Link>
				<p className='card--primary__price'>{price}</p>
				<div className='card--primary__description'>{description}</div>
				<div className='card--primary__btn'>
					<button className='card--primary__link'>
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

export default Card;
