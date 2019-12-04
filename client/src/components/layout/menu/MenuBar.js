import React from 'react';
import { Link } from 'react-router-dom';

//Dropdowns

import ComponentDropdown from './menu-dropdown/ComponentDropdown';
import PeripheralsDropdown from './menu-dropdown/PeripheralsDropdown';
import NetDeviceDropdown from './menu-dropdown/NetDeviceDropdown';
import AcessoriesDropdown from './menu-dropdown/AcessoriesDropdown';
import GadgetsDropdown from './menu-dropdown/GadgetsDropdown';
import ComputerDropdown from './menu-dropdown/ComputerDropdown';

const MenuBar = () => {
	return (
		<div className='menu'>
			<ul className='menu__list'>
				<li className='menu__item'>
					<Link to='/products/computers' className='menu__link'>
						Computers &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
					<ComputerDropdown />
				</li>
				<li className='menu__item'>
					<Link to='/products/component' className='menu__link'>
						Components &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
					<ComponentDropdown category={'/products/component/'} />
				</li>

				<li className='menu__item'>
					<Link to='/products/peripheral' className='menu__link'>
						Peripherals &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
					<PeripheralsDropdown />
				</li>
				<li className='menu__item'>
					<Link to='/products/net devices' className='menu__link'>
						Net Devices &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
					<NetDeviceDropdown />
				</li>
				<li className='menu__item'>
					<Link to='/products/accessories' className='menu__link'>
						Accessories &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
					<AcessoriesDropdown />
				</li>
				<li className='menu__item'>
					<Link to='/products/gadgets' className='menu__link'>
						Gadgets &nbsp;
						<span>
							<i className='fas fa-angle-down'></i>
						</span>
					</Link>
					<GadgetsDropdown />
				</li>
			</ul>
		</div>
	);
};

export default MenuBar;
