import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleNav } from '../../../controller/frontendController/frontendActions';
const MenuDropdown = ({ link, subcategory, img, show, toggleNav }) => {
	return (
		<div className={`menu__dropdown ${show ? 'menu-drp-show' : ''}`}>
			<div className='menu__img-preview'>
				<img src={img} alt='' className='image' draggable={false} />
			</div>
			<ul className='menu__drp-group'>
				{subcategory.map((item, idx) => (
					<li className='menu__drp-item' key={idx}>
						<Link
							to={`${link}subcategory=${item}`.toLowerCase()}
							className='menu__drp-link'
							onClick={() => toggleNav()}
						>
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

const mapStateToProps = state => ({
	frontend: state.frontend
});

export default connect(mapStateToProps, { toggleNav })(MenuDropdown);
