import React from 'react';
import d_img from '../../resources/images/banner-2.jpg';
const BannerPage = ({ title }) => {
	return (
		<div className='banner'>
			<img src={d_img} alt='PC Master Products' className='banner__image' />
			<div className='banner__cover'>
				<div className='container'>
					<div className='banner__body'>
						<h1 className='heading--primary'>{title}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerPage;
