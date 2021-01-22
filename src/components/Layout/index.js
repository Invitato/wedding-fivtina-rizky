import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from './assets/invitato-logo.png';
import { SEO_IMAGE, SEO_URL, SEO_DESCRIPTION, SEO_TITLE } from '@/constants';

import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';
// custom styles
import './assets/custom-styles.css';

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>{SEO_TITLE}</title>

        <link rel="icon" type="image/png" href={Favicon} />

        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:image" content={SEO_IMAGE} />
        <meta property="og:url" content={SEO_URL} />
        <meta property="og:site_name" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={SEO_IMAGE} />
        <meta name="twitter:url" content={SEO_URL} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@idindrakusuma" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&family=Work+Sans:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
