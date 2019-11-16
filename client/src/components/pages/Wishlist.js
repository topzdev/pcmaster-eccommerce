import React from 'react';
import { Link } from 'react-router-dom';
import WishlistCard from '../layout/card/WishlistCard';
const Wishlist = () => {
	return (
		<div className='container'>
			<div className='wishlist'>
				<h1 className='heading--primary mb-2'>Wishlist</h1>
				<div className='row'>
					<div className='col-12'>
						<WishlistCard />
					</div>
				</div>
				<Link to='/' className='btn btn--more mt-2'>
					<span>&#8636; </span> Continue Shopping
				</Link>
			</div>
		</div>
	);
};

export default Wishlist;
