import React from 'react';

export default ({
  name,
  introText,
  image,
  url,
}) => (
  <div className="sponsor__wrapper">
    <a className="sponsor__avatar" target="_blank" href={url}>
      <img
        src={image}
        alt="sponsor__image"
      />
    </a>
    <div className="sponsor__details">
      <h3 className="sponsor__name">{name}</h3>
      <p>{introText}</p>
    </div>
  </div>
);
