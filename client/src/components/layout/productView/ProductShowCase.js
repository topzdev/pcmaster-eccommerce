import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

import CardProduct from '../card/CardProduct';
const ProductShowCase = ({ title, items }) => {
	return (
		<div className='container'>
			<section className='showcase'>
				<Link to='/collections'>
					<h1 className='heading--primary mb-2'>{title}</h1>
				</Link>
				<OwlCarousel
					className='owl-theme'
					nav
					navClass={['nav-carousel nav-left', 'nav-carousel nav-right']}
					items={4}
					margin={20}
				>
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
				</OwlCarousel>
			</section>
		</div>
	);
};

export default ProductShowCase;
