import React from 'react';
import Banner from '../include/Banner';
import NewArrival from '../section/NewArrival';
import ProductShowCase from '../layout/productView/ProductShowCase';
const Home = () => {
	return (
		<div>
			<Banner />
			<ProductShowCase title={'Popular'} list={{}} />
			<ProductShowCase title={'Components'} list={{}} />
			<ProductShowCase title={'Motherboard'} list={{}} />
		</div>
	);
};

export default Home;
