import React from 'react';
import { Link } from 'react-router-dom';
const ComponentDropdown = ({ category }) => {
	return (
		<div className='menu__dropdown'>
			<div className='menu__img-preview'>
				<img src='' alt='' className='image' />
			</div>
			<ul className='menu__drp-group'>
				<li className='menu__drp-item'>
					<Link
						to={`${category}?subcategory=${'processor'}`}
						className='menu__drp-link'
					>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Processor</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link
						to={`${category}?subcategory=${'motherboard'}`}
						className='menu__drp-link'
					>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Motherboard</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link
						to={`${category}?subcategory=${'graphic cards'}`}
						className='menu__drp-link'
					>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Graphic Cards</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link
						to={`${category}?subcategory=${'memory'}`}
						className='menu__drp-link'
					>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Memory</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link
						to={`${category}?subcategory=${'power supply'}`}
						className='menu__drp-link'
					>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Power Supply</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link
						to={`${category}?subcategory=${'hard drive'}`}
						className='menu__drp-link'
					>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Hard Drive</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link
						to={`${category}?subcategory=${'casing'}`}
						className='menu__drp-link'
					>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Casing</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link
						to={`${category}?subcategory=${'sound card'}`}
						className='menu__drp-link'
					>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>Sound Card</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link
						to={`${category}?subcategory=${'lan card'}`}
						className='menu__drp-link'
					>
						<span>
							<i className='fas fa-chevron-right'></i>
						</span>{' '}
						<p>LAN Card</p>
					</Link>
				</li>
				<li className='menu__drp-item'>
					<Link
						to={`${category}?subcategory=${'optical drive'}`}
						className='menu__drp-link'
					>
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
