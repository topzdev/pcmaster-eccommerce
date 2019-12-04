import React from 'react';
import ReactPaginate from 'rc-pagination';
const Pagination = ({
	loading,
	length,
	currentPage,
	setCurPage,
	small = false
}) => {
	if (loading) {
		return <div></div>;
	}
	return (
		<ReactPaginate
			className={`rc-pagination ${small ? 'rc-pagination-small' : ''}`}
			total={length}
			defaultCurrent={1}
			current={currentPage}
			defaultPageSize={24}
			onChange={current => setCurPage(current)}
			locale={{
				prev_page: 'Previous Page',
				next_page: 'Next Page',
				page: 'page'
			}}
			nextIcon={<i className='fas fa-angle-right'></i>}
			prevIcon={<i className='fas fa-angle-left'></i>}
		/>
	);
};

export default Pagination;
