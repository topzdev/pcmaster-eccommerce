import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setRedirect } from '../../actions/utilityActions';
const SetRedirect = ({ utility: { redirect }, setRedirect }) => {
	useEffect(() => {
		setRedirect(null);
	}, [redirect]);
	return (
		<div>
			{redirect != null && redirect.open && <Redirect to={redirect.url} />}
		</div>
	);
};
const mapStateToProps = state => ({
	utility: state.utility
});
export default connect(mapStateToProps, { setRedirect })(SetRedirect);
