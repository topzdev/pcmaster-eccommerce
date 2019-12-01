import React, { useState, useEffect } from 'react';

import Sort from '../layout/search/Sorter';
import CardProduct from '../layout/card/CardProduct';
const Collections = props => {
	useEffect(() => {
		console.log(props.history);
	}, []);
	const [view, setView] = useState(true);
	return (
		<div className='container pt-2 pb-5 mt-4'>
			<div className='row'>
				<div className='col-12 mb-2'>
					<h1 className='heading--primary'>Components/Motherboard</h1>
				</div>
			</div>
			<div className='row'>
				<div className='col-12 mb-2'>
					<Sort setView={setView} view={view} />
				</div>
			</div>
			<div className='row'>
				<div className={`${view ? 'col-lg-3 col-md-4 col-12' : 'col-12'} mb-3`}>
					<CardProduct size={view ? '' : 'card--big__cart'} />
				</div>
			</div>
		</div>
	);
};

export default Collections;
