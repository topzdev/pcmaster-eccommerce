import React from 'react';
import { Link } from 'react-router-dom';
import HeaderChanger from '../utils/HeaderChanger';
const Page404 = () => {
	return (
		<div className='page404'>
			<HeaderChanger name={'404 Page not found '} description={'Your are not in the coverage area of PC Master'} />
			<div className='page404__image'>
				<img src='https://res.cloudinary.com/deiecmpac/image/upload/v1575744588/logo/404_v5v4eq.png' alt='Ow snap!' draggable />
			</div>

			<h1>Page not found</h1>
			<p>
				Isang malaking awit ang mapunta sa page na to pero salamat sa pag bisita
				naappreciate kita pre! ngunit ngayun mayroon pindutan sa ilalim para
				ipunta ka aming bahay pahina.
			</p>

			<Link className='product__empty-link' to='/'>
				Halika pre!
			</Link>
		</div>
	);
};

export default Page404;
