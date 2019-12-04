import React from "react";
import { Helmet } from "react-helmet";
import _ from "lodash";
import truncate from "cli-truncate";
import def_img from "../../resources/images/logo.png";
const HeaderChanger = ({ name, img, description }) => {
    return (
        <Helmet>
            {" "}
            <title>{name}| PC Master</title>
            {description && (
                <meta
                    name="description"
                    content={`${truncate(description, 100)}`}
                />
            )}
            <meta property="og:title" content={name} />
            <meta property="og:type" content="e-commerce" />
            <meta property="og:site_name" content="PC Master" />
            <meta property="og:url" content={window.location.href} />
            {<meta property="og:image" content={img ? img : def_img} />}
        </Helmet>
    );
};

export default HeaderChanger;
