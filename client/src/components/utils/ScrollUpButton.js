import React from 'react';
import Scroll from 'react-scroll';
const ScrollUpButton = () => {
	return (
		<button
			className='scrollToTop'
			onClick={() => Scroll.animateScroll.scrollToTop()}
		>
			<span>
				<i className='fas fa-chevron-up'></i>
			</span>
		</button>
	);
};

export default ScrollUpButton;
