import React from 'react';
import { Link } from 'react-router-dom';

//Child components
import MenuDropdown from './MenuDropdown';
const MenuBar = () => {
	const componentList = {
		items: [
			{
				title: 'Processor',
				subItem: [{ title: 'Amd' }, { title: 'Intel' }]
			},
			{
				title: 'Motherboard',
				subItem: [{ title: 'Amd' }, { title: 'Intel' }]
			},
			{
				title: 'Graphics Card',
				subItem: [{ title: 'Amd' }, { title: 'Intel' }]
			},
			{
				title: 'Memory',
				subItem: [{ title: 'Amd' }, { title: 'Intel' }]
			},
			{
				title: 'Hard Drive',
				subItem: [{ title: 'Amd' }, { title: 'Intel' }]
			},
			{
				title: 'Sound Card',
				subItem: [{ title: 'Amd' }, { title: 'Intel' }]
			},
			{
				title: 'Chasis',
				subItem: [{ title: 'Amd' }, { title: 'Intel' }]
			},
			{
				title: 'Optical Drive',
				subItem: [{ title: 'Amd' }, { title: 'Intel' }]
			}
		]
	};

	// const peripherals = {
	// 	title: 'Components',
	// 	items: [
	// 		{
	// 			title: 'Display'
	// 		},
	// 		{
	// 			title: 'Audi'
	// 		},
	// 		{
	// 			title: 'Gaming'
	// 		},
	// 		{
	// 			title: 'Keyboard/Mouse'
	// 		},
	// 		{
	// 			title: 'Office Furniture'
	// 		},
	// 		{
	// 			title: 'Printer/Scanner/Inks'
	// 		},
	// 		{
	// 			title: 'UPS'
	// 		},
	// 		{
	// 			title: 'Servailance Camera'
	// 		}
	// 	]
	// };

	return (
		<div className='menu'>
			<ul className='menu__list'>
				<li className='menu__item'>
					<Link to='/' className='menu__link'>
						Components &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
					<MenuDropdown list={componentList} />
				</li>

				<li className='menu__item'>
					<Link to='/' className='menu__link'>
						Computers &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
					{/* <MenuDropdown list={peripherals} /> */}
				</li>
				<li className='menu__item'>
					<Link to='/' className='menu__link'>
						Peripherals &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
					{/* <MenuDropdown list={peripherals} /> */}
				</li>
				<li className='menu__item'>
					<Link to='/' className='menu__link'>
						Net Devices &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
				</li>
				<li className='menu__item'>
					<Link to='/' className='menu__link'>
						Accessories &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
				</li>
				<li className='menu__item'>
					<Link to='/' className='menu__link'>
						Gadgets &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default MenuBar;
