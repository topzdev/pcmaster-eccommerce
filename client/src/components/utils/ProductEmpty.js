import React from 'react';
import { Link } from 'react-router-dom';

const ProductEmpty = ({ title, description, link }) => {
	return (
		<div className='product__empty'>
			<div className='product__empty-img'>
				<img src='https://res.cloudinary.com/deiecmpac/image/upload/v1575744588/logo/warning_tsvjff.png' alt='The list empty' draggable />
			</div>
			<h1 className='mb-1'>{title}</h1>
			<p>{description}</p>

			<Link className='product__empty-link' to={link}>
				Add Product Now!
			</Link>
		</div>
	);
};

export default ProductEmpty;
