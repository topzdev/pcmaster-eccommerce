import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuDropdown from './MenuDropdown';
const MenuList = ({ list }) => {
	const link = `/products/${list.title}`.toLowerCase();
	const [drop, setDrop] = useState(false);
	return (
		<li className='menu__item'>
			<Link to={link} className='menu__link'>
				{list.title} &nbsp;
				<span>
					<i className='fas fa-angle-down'></i>
				</span>
			</Link>
			<button className='menu__button' onClick={() => setDrop(!drop)}>
				{drop ? (
					<i class='fas fa-minus'></i>
				) : (
					<i className='fas fa-angle-down'></i>
				)}
			</button>
			<MenuDropdown link={link} subcategory={list.item} show={drop} />
		</li>
	);
};

export default MenuList;
