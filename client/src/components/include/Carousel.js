import React, { Fragment } from 'react';
import alter from '../../resources/images/pc-master-welcome.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Banner = () => {
	return (
		<Fragment>
			<div className='carousel__mobile'>
				<img src={alter} alt='Welcome to pc master mobile users!' draggable />
			</div>

			<div className='carousel'>
				<OwlCarousel
					className='carousel__list'
					loop={true}
					margin={0}
					nav
					items={1}
					autoplay={'true'}
					dot={'false'}
					animateOut={'fadeOut'}
					animateIn={'fadeIn'}
					autoplayTimeout={5000}
					mouseDrag={true}
					navClass={[
						'nav-carousel nav-banner-left',
						'nav-carousel nav-banner-right'
					]}
					autoHeightClass={true}
				>
					<li className='carousel__item'>
						<img
							src='https://res.cloudinary.com/deiecmpac/image/upload/v1575728258/banner/banner-4_o2eaxf.jpg'
							alt='carousel'
							draggable={false}
						/>
					</li>
					<li className='carousel__item'>
						<img
							src='https://res.cloudinary.com/deiecmpac/image/upload/v1575728259/banner/banner-6_j5bjkg.jpg'
							alt='carousel'
							draggable={false}
						/>
					</li>
					<li className='carousel__item'>
						<img
							src='https://res.cloudinary.com/deiecmpac/image/upload/v1575728259/banner/banner-7_nrotzx.jpg'
							alt='carousel'
							draggable={false}
						/>
					</li>
					<li className='carousel__item'>
						<img
							src='https://res.cloudinary.com/deiecmpac/image/upload/v1575728258/banner/banner-5_mmrxt0.jpg'
							alt='carousel'
							draggable={false}
						/>
					</li>
					<li className='carousel__item'>
						<img
							src='https://res.cloudinary.com/deiecmpac/image/upload/v1575728258/banner/banner-3_fra4xr.jpg'
							alt='carousel'
							draggable={false}
						/>
					</li>
					<li className='carousel__item'>
						<img
							src='https://res.cloudinary.com/deiecmpac/image/upload/v1575728258/banner/banner-8_xcjkaw.jpg'
							alt='carousel'
							draggable={false}
						/>
					</li>
				</OwlCarousel>
			</div>
		</Fragment>
	);
};

export default Banner;
