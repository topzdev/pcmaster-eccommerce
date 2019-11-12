import React, { useState, useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";
import sample from "../../resources/images/test-1.png";

const ImageListView = () => {
  const curImg = {
    path: "",
    altImg: ""
  };
  const [curImage, setCurImage] = useState(curImg);

  useEffect(() => {
    setCurImage({ path: sample, altImg: "Hello there" });
  }, [sample]);

  const { path, altImg } = curImage;
  return (
    <div className="details__img-viewer">
      <div className="details__img-main">
        <img className="image" src={path} alt={altImg} />
        {/* <ReactImageMagnify
          className="image"
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: false,
              src: sample
            },
            largeImage: {
              src: sample,
              width: 1200,
              height: 1800
            }
          }}
        /> */}
      </div>
      <ul className="details__img-item">
        <li className="details__img-list">
          <img className="image" src={sample} alt="" draggable="false" />
        </li>
        <li className="details__img-list">
          <img className="image" src={sample} alt="" draggable="false" />
        </li>
      </ul>
    </div>
  );
};

export default ImageListView;
