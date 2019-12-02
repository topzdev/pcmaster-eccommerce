import React from 'react';
import { Link } from 'react-router-dom';
const ComponentDropdown = () => {
	return (
		<div className='menu__dropdown'>
			<div className='menu__img-preview'>
				<img src='' alt='' className='image' />
			</div>
			<ul className='menu__drp-group'>
				<li className='menu__drp-item'>
					<Link to='/processor' className='menu__drp-link'>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Processor</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link to='/motherboard' className='menu__drp-link'>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Motherboard</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link to='/' className='menu__drp-link'>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Graphic Cards</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link to='/' className='menu__drp-link'>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Memory</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link to='/' className='menu__drp-link'>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Power Supply</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link to='/' className='menu__drp-link'>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Hard Drive</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link to='/' className='menu__drp-link'>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Chasis</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link to='/' className='menu__drp-link'>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Sound Card</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link to='/' className='menu__drp-link'>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>LAN Card</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link to='/' className='menu__drp-link'>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Optical Drive</p>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ComponentDropdown;
