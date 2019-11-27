import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

const RedirectPage = (set, to) => {
	return <Fragment>{set && <Redirect to={to} />}</Fragment>;
};

export default RedirectPage;
