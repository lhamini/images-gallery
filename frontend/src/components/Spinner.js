import { Spinner as Loader } from 'react-bootstrap';
import React from 'react';
const spinnerStyle = {
    position: 'absolute',
    top: 'calc(50% - 1rem)',
    left: 'calc(50% - 1rem)',
}

const Spinner = () => {
  return (
    <Loader style={spinnerStyle} animation="border" variant="primary"/>
  );
}

export default Spinner;