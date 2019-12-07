import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import WishlistCard from '../layout/card/WishlistCard';
import { connect } from 'react-redux';
import HeaderChanger from '../utils/HeaderChanger';
import ProductEmpty from '../utils/ProductEmpty';
import BackButton from '../utils/BackButton';
import _ from 'lodash';
const Wishlist = ({ frontend: { wishlist } }) => {
	return (
		<div className='container pb-3 mt-2'>
			<HeaderChanger
				name={`Wishlist (${wishlist.length}) `}
				description={'When you want to get product soon, add it to wishlist.'}
			/>
			<div className='wishlist '>
				<h1 className='heading--primary mb-2'>Wishlist</h1>
				<div className='row pr-1'>
					<div className='col-12'>
						{!_.isEmpty(wishlist) ? (
							<Fragment>
								{wishlist &&
									wishlist.map(item => (
										<WishlistCard key={item._id} data={item} />
									))}
								<BackButton />
							</Fragment>
						) : (
							<ProductEmpty
								title={'Wishlist is empty'}
								description={
									'Click the button below to start viewing products and add it to wishlist'
								}
								link={'/products/category=components'}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = state => ({
	frontend: state.frontend
});
export default connect(mapStateToProps)(Wishlist);
