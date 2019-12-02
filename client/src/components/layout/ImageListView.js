import React, { useState, useEffect, Fragment } from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ImageListView = ({ img }) => {
	const curImg = {
		path: '',
		altImg: ''
	};
	const [curImage, setCurImage] = useState(curImg);

	useEffect(() => {
		console.log(img);
	}, [img]);

	const { path, altImg } = curImage;
	return (
		<div className='details__img-viewer'>
			<div className='details__img-main'>
				<img
					className='image'
					src={img ? img[0].url : ''}
					alt={img ? img[0].public_id : ''}
				/>
				{/* <ReactImageMagnify
          className="image"
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: false,
              src: sample
            },
            largeImage: {
              src: sample,
              width: 1200,
              height: 1800
            }
          }}
        /> */}
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
