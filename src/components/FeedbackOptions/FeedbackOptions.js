import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(name => (
    <button key={name} name={name} onClick={onLeaveFeedback}>
      {name}
    </button>
  ));
