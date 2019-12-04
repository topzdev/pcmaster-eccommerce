import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//Dropdowns
import SearchBar from '../search/SearchBar';
import MenuList from './MenuList';
import BackDrop from '../../utils/Backdrop';
import { Scrollbars } from 'react-custom-scrollbars';
import { toggleNav } from '../../../controller/frontendController/frontendActions';
const MenuBar = ({ frontend: { sidebar }, toggleNav }) => {
	const menu = [
		{
			title: 'Computer',
			item: ['Desktop PC', 'Notebooks', 'Mini PC', 'Diskless PC', 'Software']
		},
		{
			title: 'Components',
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
		toggleNav();
	};

	return (
		<Fragment>
			<div className={`menu ${sidebar ? 'menu-show' : ''}`}>
				<div className='menu__search'>
					<SearchBar />
				</div>
				<ul className='menu__list'>
					{menu.map(item => (
						<MenuList key={item.title} list={item} />
					))}
				</ul>
			</div>
			<BackDrop
				zIndex={10}
				show={sidebar}
				className={'menu-backdrop'}
				onHide={closeNav}
			/>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	frontend: state.frontend
});

export default connect(mapStateToProps, { toggleNav })(MenuBar);
