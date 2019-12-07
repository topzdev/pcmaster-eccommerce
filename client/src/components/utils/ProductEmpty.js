import React from 'react';
import { Link } from 'react-router-dom';
import image_empty from '../../resources/images/warning.png';

const ProductEmpty = ({ title, description, link }) => {
	return (
		<div className='product__empty'>
			<div className='product__empty-img'>
				<img src={image_empty} alt='' />
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
