import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(name => (
    <button key={name} name={name} onClick={onLeaveFeedback}>
      {name}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onLeaveFeedback: PropTypes.func,
};
