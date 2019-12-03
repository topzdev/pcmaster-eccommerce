import React from 'react';
import ContentLoader from 'react-content-loader';

const DescriptionLoader = () => {
	return (
		<ContentLoader
			height={600}
			width={400}
			speed={2}
			primaryColor='#f3f3f3'
			secondaryColor='#ecebeb'
		>
			<rect x='19' y='0' rx='0' ry='0' width='420' height='40' />
			<rect x='21' y='50' rx='0' ry='0' width='330' height='40' />
			<rect x='20' y='110' rx='0' ry='0' width='187' height='25' />
			<rect x='21' y='170' rx='5' ry='5' width='334' height='8' />
			<rect x='21' y='189' rx='5' ry='5' width='250' height='8' />
			<rect x='44' y='220' rx='0' ry='0' width='56' height='25' />
			<rect x='21' y='220' rx='0' ry='0' width='20' height='25' />
			<rect x='103' y='220' rx='0' ry='0' width='20' height='25' />
			<rect x='21' y='273' rx='0' ry='0' width='187' height='38' />
			<rect x='20' y='347' rx='0' ry='0' width='152' height='24' />
			<rect x='185' y='345' rx='0' ry='0' width='152' height='24' />
			<rect x='21' y='405' rx='5' ry='5' width='50' height='10' />
			<rect x='21' y='425' rx='5' ry='5' width='50' height='10' />
			<rect x='83' y='423' rx='5' ry='5' width='80' height='10' />
			<rect x='83' y='405' rx='5' ry='5' width='184' height='10' />
			<rect x='171' y='423' rx='5' ry='5' width='60' height='10' />
			<rect x='82' y='444' rx='5' ry='5' width='60' height='10' />
			<rect x='21' y='445' rx='5' ry='5' width='50' height='10' />
			<rect x='151' y='444' rx='5' ry='5' width='100' height='10' />
			<rect x='22' y='473' rx='5' ry='5' width='50' height='10' />
			<circle cx='98' cy='480' r='15' />
			<circle cx='137' cy='480' r='15' />
			<circle cx='173' cy='478' r='15' />
		</ContentLoader>
	);
};

export default DescriptionLoader;
