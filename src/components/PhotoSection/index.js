import React from 'react';

import WithAnimation from '../WithAnimation';
import Photo1 from '../WelcomeSection/assets/wedding-welcome.jpg';
import Photo2 from '../WeddingSection/assets/wedding-box.jpg';

function PhotoSection() {
  const renderImage = (src, delay) => {
    return (
      <WithAnimation delay={delay}>
        <img
          src={src}
          alt=""
          style={{ display: 'block', maxWidth: '300px', margin: '8px auto 16px auto', borderRadius: '8px' }}
        />
      </WithAnimation>
    );
  };

  return (
    <div style={{ backgroundColor: '#CFACAA' }} className="padding__content">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <WithAnimation>
              <h2 className="main-font" style={{ color: '#fff', margin: '0' }}>
                Momen Lamaran
              </h2>
            </WithAnimation>
          </div>
          <div className="row">
            <div style={{ padding: '16px 24px 24px 24px' }}>
              {renderImage(Photo1, 100)}
              {renderImage(Photo2, 300)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
