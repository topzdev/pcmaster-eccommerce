import React from 'react';
import truncate from 'cli-truncate';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
const SearchCard = ({ data, onExit }) => {
	const { name, img, price, _id } = data;
	return (
		<Link
			onClick={() => onExit()}
			to={`/overview/${name}`}
			className='card--search'
		>
			<div className='card--search__images'>
				<Image className='image' publicId={img[0].public_id} alt={name}></Image>
			</div>
			<div className='card--search__body'>
				<h1>{truncate(name, 90, { position: 'end' })}</h1>
				<p>₱ {numeral(price).format('0,0.00')}</p>{' '}
			</div>
		</Link>
	);
};

export default SearchCard;
