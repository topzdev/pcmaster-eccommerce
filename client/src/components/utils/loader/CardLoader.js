import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = () => (
	<ContentLoader
		height={350}
		width={300}
		speed={2}
		primaryColor='#f3f3f3'
		secondaryColor='#ecebeb'
		className='card--primary'
	>
		<rect x='15' y='17' rx='5' ry='5' width='268' height='244' />
		<rect x='15' y='271' rx='10' ry='10' width='229' height='21' />
		<rect x='15' y='299' rx='10' ry='10' width='179' height='14' />
		<rect x='15' y='325' rx='5' ry='5' width='95' height='10' />
	</ContentLoader>
);

export default CardLoader;
