import React from 'react';
import loaderIcon from '../assets/loader-icon.svg';

const Loader = ({ loading }) => (
  loading ? 
    (<div className="loader">
      <img src={loaderIcon} alt="loading icon" />
    </div>) : (null)
)

export default Loader;
