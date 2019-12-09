import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuDropdown from './MenuDropdown';
import { toggleNav } from '../../../controller/frontendController/frontendActions';
import { connect } from 'react-redux';

const MenuList = ({ list, closeNav }) => {
	const link = `/products/?category=${list.title}&`.toLowerCase();
	const [drop, setDrop] = useState(false);
	const [hover, setHover] = useState(null);
	return (
		<li className={`menu__item ${hover === true && 'in'} ${hover === false && 'out'}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			<Link to={link} className='menu__link' onClick={() => closeNav()}>
				{list.title} &nbsp;
				<span>
				</span>
			</Link>
			<button className='menu__button' onClick={() => setDrop(!drop)}>
				{drop ? (
					<i className='fas fa-minus'></i>
				) : (
						<i className='fas fa-angle-down'></i>
					)}
			</button>
			<MenuDropdown
				link={link}
				subcategory={list.item}
				img={list.img}
				show={drop}
				closeNav={closeNav}
			/>
		</li>
	);
};
const mapStateToProps = state => ({
	frontend: state.frontend
});
export default connect(mapStateToProps, { toggleNav })(MenuList);
