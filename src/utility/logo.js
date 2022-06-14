import React from 'react';
import { Link } from 'react-router-dom';
// import siteConfig from '../../config/site.config';
// import medcoboxFullLogo  from '../../assets/images/medco-full-logo.png'

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
          <Link to="/dashboard"><img
                alt="demo"
                width={50}
                // src="https://s3.ap-south-1.amazonaws.com/medcobox.images/public/logo-s.png"
              /></Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard"><img
                alt="demo"
                width={'100%'}
                // src={medcoboxFullLogo}
              /></Link>
        </h3>
      )}
    </div>
  );
};
