import React from 'react';
import { useLocation } from 'react-router-dom';
export const Generic = () => {
    const location = useLocation()
  return <h1>
      {location?.pathname} Coming soon...vdvd c xc cx x x
  </h1>;
};
export default Generic