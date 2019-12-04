import React, { useEffect } from 'react';
import Banner from '../include/Banner';
import NewArrival from '../section/NewArrival';
import ProductShowCase from '../layout/productView/ProductShowCase';
import { connect } from 'react-redux';
// import '../../resources/css/home.css';
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

const mapStateToProps = state => ({
	frontend: state.frontend
});

export default connect(mapStateToProps)(Home);
