import React, { Fragment, useEffect } from 'react';

const Backdrop = ({ zIndex, show }) => {
	useEffect(() => {
		document.body.style.overflow = `${show ? 'hidden' : 'auto'}`;
	}, [show]);

	if (!show) return <Fragment></Fragment>;

	const onHide = () => {
		console.log('hidden');
	};

	return <div className='backdrop' style={{ zIndex }} onClick={onHide}></div>;
};

export default Backdrop;
