import React from 'react';
import CardLoader from './CardLoader.js';
const ProductCategoryLoader = ({ view }) => {
	const renderCards = () => {
		let cards = [];
		for (let i = 0; i < 20; i++) {
			cards.push(
				<div
					key={i}
					className={`${view ? 'col-lg-3 col-md-4 col-12' : 'col-12'} mb-3`}
				>
					<CardLoader />
				</div>
			);
		}

		return cards;
	};
	return <div className='row'>{renderCards()}</div>;
};

export default ProductCategoryLoader;
