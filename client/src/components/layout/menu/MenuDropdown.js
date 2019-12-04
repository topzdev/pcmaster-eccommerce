import React from 'react';
import { Link } from 'react-router-dom';
const MenuDropdown = ({ link, subcategory, show }) => {
	return (
		<div className={`menu__dropdown ${show ? 'menu-drp-show' : ''}`}>
			<div className='menu__img-preview'>
				<img src='' alt='' className='image' />
			</div>
			<ul className='menu__drp-group'>
				{subcategory.map((item, idx) => (
					<li className='menu__drp-item' key={idx}>
						<Link to={`${link}?subcategory=${item}`} className='menu__drp-link'>
							<span>
								<i className='fas fa-chevron-right'></i>
							</span>{' '}
							<p>{item}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MenuDropdown;
