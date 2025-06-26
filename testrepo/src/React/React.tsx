import { useEffect } from 'react';
import PropTypes from 'prop-types';

const React = () => {

  useEffect(() => {
    console.log(`React mounted`)
  }, [])

  return (
    <div className="React-component">
      Test content
    </div>
  )
}

React.propTypes = {
  // bla: PropTypes.string,
};

React.defaultProps = {
  // bla: 'test',
};

export default React;
