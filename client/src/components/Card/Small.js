import React from "react";
import { Link } from "react-router-dom";
const Small = props => {
  const { img, link, title, color } = props;
  return (
    <div className='card--small mb-2'>
      <img src={img} alt={title} />
      <Link to={link} style={{ backgroundColor: `rgba(${color}, 0.75)` }}>
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default Small;
