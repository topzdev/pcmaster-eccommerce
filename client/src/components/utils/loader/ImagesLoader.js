import React from 'react';
import ContentLoader from 'react-content-loader';
const ImagesLoader = () => {
	return (
		<ContentLoader
			height={600}
			width={500}
			speed={2}
			primaryColor='#f3f3f3'
			secondaryColor='#ecebeb'
		>
			<rect x='36' y='35' rx='0' ry='0' width='500' height='400' />
			<rect x='37' y='456' rx='0' ry='0' width='113' height='109' />
			<rect x='172' y='454' rx='0' ry='0' width='113' height='109' />
			<rect x='307' y='452' rx='0' ry='0' width='113' height='109' />
		</ContentLoader>
	);
};

export default ImagesLoader;
