import React, { Fragment } from 'react';

const ProductDescription = ({ description }) => {
	return (
		<div className='details__tab--description'>
			<div className='container'>
				<div className='row'>
					<h2>Description</h2>
				</div>
				{description &&
					description.map((desc, idx) => (
						<Fragment key={idx}>
							<div className='row mt-2'>
								<div className='col-12 col-lg-4'>
									<h3>{desc.title}</h3>
								</div>
								<div className='col-12 col-lg-8'>
									<p>{desc.content}</p>
								</div>
							</div>
						</Fragment>
					))}
			</div>
		</div>
	);
};

export default ProductDescription;
