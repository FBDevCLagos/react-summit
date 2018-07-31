import React from 'react';

export default ({
  name,
  introText,
  image,
}) => (
  <div className="sponsor__wrapper">
    <div className="sponsor__avatar">
      <img
        src={image}
        alt="sponsor__image"
      />
    </div>
    <div className="sponsor__details">
      <h3 className="sponsor__name">{name}</h3>
      <p>{introText}</p>
    </div>
  </div>
);
