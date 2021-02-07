import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import WithAnimation from '../WithAnimation/UseIntersect';
import { photos } from './photo-data';
import { THE_BRIDE, CUSTOM_ANIMATION } from '@/constants';
import { styBg } from './styles';

function PhotoSection() {
  return (
    <div id="fh5co-testimonial" css={styBg}>
      <div className="container">
        <div className="row">
          <WithAnimation>
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font pr-co" style={{ animation: CUSTOM_ANIMATION }}>
                  Our Moments
                </h2>
              </div>
            </div>
          </WithAnimation>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery autoPlay infinite lazyLoad items={photos} showBullets={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
