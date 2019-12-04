import React, { useState, useEffect, Fragment } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import ImagesLoader from '../utils/loader/ImagesLoader';

const ImageListView = ({ img, loading }) => {
	if (loading) return <ImagesLoader />;
	return (
		<div className='details__img-viewer'>
			<div className='details__img-main'>
				<img
					className='image'
					src={img ? img[0].url : ''}
					alt={img ? img[0].public_id : ''}
				/>
			</div>
			<ul className='details__img-item'>
				{img &&
					img.map(image => (
						<li className='details__img-list' key={image.public_id}>
							<img className='image' src={image.url} alt='' draggable='false' />
						</li>
					))}
			</ul>
		</div>
	);
};

export default ImageListView;
