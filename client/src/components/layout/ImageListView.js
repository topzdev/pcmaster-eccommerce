import React, { useState, useEffect, Fragment } from "react";
import ReactImageMagnify from "react-image-magnify";
import ImagesLoader from "../utils/loader/ImagesLoader";
import ImageGallery from "react-image-gallery";
import _ from "lodash";
import "react-image-gallery/styles/css/image-gallery.css";
const ImageListView = ({ img, loading }) => {
    const [active, setActive] = useState({
        idx: 0,
        image: ""
    });

    const selectedImage = (idx, image) => {
        setActive({ idx, image });
    };

    useEffect(() => {
        if (loading)
            setActive({ idx: 0, image: !_.isEmpty(img) ? img[0].url : "" });
    }, [loading]);

    if (loading)
        return (
            <div className="details__img-viewer">
                <ImagesLoader />
            </div>
        );

    return (
        <div className="details__img-viewer">
            <div className="details__img-main">
                <img
                    className="image"
                    src={img ? active.image : ""}
                    alt={img ? active.image : ""}
                />
            </div>
            <ul className="details__img-item">
                {img &&
                    img.map((image, idx) => (
                        <li
                            className={`details__img-list ${
                                active.idx === idx ? "details--img-active" : ""
                            }`}
                            key={image.public_id}
                            onClick={() => selectedImage(idx, image.url)}
                        >
                            <img
                                className="image"
                                src={image.url}
                                alt=""
                                draggable="false"
                            />
                        </li>
                    ))}
            </ul>
            {/* {img && <ImageGallery item={img} />} */}
        </div>
    );
};

export default ImageListView;
