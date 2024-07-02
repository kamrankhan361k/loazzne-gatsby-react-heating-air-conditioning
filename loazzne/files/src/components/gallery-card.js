import React from "react";
import Img from "@/components/img";
import { SRLWrapper } from "simple-react-lightbox";

const GalleryCard = ({ src, alt, title, url }) => {
  return (
    <div className="gallery_width">
      <div className="gallery_fixed_height">
        <div className="gallery_width__image">
          <Img src={src} alt={alt} className="img-fluid" />
        </div>
        <div className="gallery_overlay">
          <h3>{title}</h3>
          <SRLWrapper>
            <a
              href={src}
              className="gallery_icon_btn text-center"
              data-attribute="SRL"
              aria-label="open image"
            >
              <img src={src} className="img-fluid" alt={title} />
              <i className="fa fa-angle-right"></i>
            </a>
          </SRLWrapper>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
