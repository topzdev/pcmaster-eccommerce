import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
const MenuDropdown = ({ list }) => {
	const { items } = list;
	return (
		<div className='menu__dropdown'>
			{console.log(items)}
			<ul>
				{items.map(item => (
					<li key={item.title}>
						<Link to={`/${item.title.toLowerCase().replace(' ', '_')}`}>
							<p>{item.title}</p>
							{console.log(item.title)}
							<span>
								<i class='fas fa-angle-down'></i>
							</span>
							{/* {_.isEmpty(item.subItem) && item.subItem != undefined ? (
								<Fragment>{console.log('Empty')}</Fragment>
							) : (
								<Fragment>
									{console.log(item.subItem)}
									<MenuDropdown list={item.subItem} />
								</Fragment>
							)} */}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MenuDropdown;
