import React, { Fragment, useState } from 'react';
//Dropdowns
import SearchBar from '../search/SearchBar';
import MenuList from './MenuList';
import BackDrop from '../../utils/Backdrop';

const MenuBar = ({ show, setShow }) => {
	const menu = [
		{
			title: 'Computer',
			img:
				'https://res.cloudinary.com/deiecmpac/image/upload/v1575729503/Dropdown/drp-computer_zkz8ec.jpg',
			item: ['Desktop PC', 'Notebooks', 'Mini PC', 'Diskless PC', 'Software']
		},
		{
			title: 'Components',
			img:
				'https://res.cloudinary.com/deiecmpac/image/upload/v1575729503/Dropdown/drp-components_hwtvfr.jpg',
			item: [
				'Processor',
				'Motherboard',
				'Graphics Card',
				'Memory',
				'Power Supply',
				'Hard Drive',
				'Casing',
				'Sound Card',
				'Lan Card',
				'Optical Drive'
			]
		},
		{
			title: 'Peripherals',
			img:
				'https://res.cloudinary.com/deiecmpac/image/upload/v1575729503/Dropdown/drp-peripherals_klxx1f.jpg',
			item: [
				'Displays',
				'Audio',
				'Keyboard/Mouse',
				'Office Furniture',
				'Printer/Scanner/Inks',
				'Surveillance/CCTV',
				'UPS/AVR',
				'Webcam'
			]
		},
		{
			title: 'Net Devices',
			img:
				'https://res.cloudinary.com/deiecmpac/image/upload/v1575729504/Dropdown/drp-netdevices_x74hrs.jpg',
			item: [
				'Access Point/Range Extender',
				'Adaptor',
				'Router',
				'Switch',
				'UTP Cable',
				'Network Attached Storage'
			]
		},
		{
			title: 'Accessories',
			img:
				'https://res.cloudinary.com/deiecmpac/image/upload/v1575729521/Dropdown/drp-acessories_mxdxio.jpg',
			item: [
				'Batteries and Chargers',
				'Cables',
				'Cooling Solutions',
				'Cleaning Solutions',
				'HDD Dock / Enclosure / Caddy',
				'Lightings',
				'Memory Devices',
				'Sleeves / Bags',
				'USB Hub / Card Reader'
			]
		},
		{
			title: 'Gadgets',
			img:
				'https://res.cloudinary.com/deiecmpac/image/upload/v1575729503/Dropdown/drp-gadgets_msvazj.jpg',
			item: [
				'Digital Camera',
				'Media Player',
				'Mobile',
				'Mobile Accessories',
				'Mining',
				'Wellness'
			]
		}
	];

	const closeNav = () => {
		setShow(!show);
	};

	return (
		<Fragment>
			<div className={`menu ${show ? 'menu-show' : ''}`}>
				<div className='menu__search'>
					<SearchBar />
				</div>
				<ul className='menu__list'>
					{menu.map(item => (
						<MenuList key={item.title} list={item} closeNav={closeNav} />
					))}
				</ul>
			</div>
			<BackDrop
				zIndex={10}
				show={show}
				className={'menu-backdrop'}
				onHide={closeNav}
			/>
		</Fragment>
	);
};

export default MenuBar;
