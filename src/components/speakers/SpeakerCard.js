import React from 'react';

export default ({
  name,
  title,
  company,
  introText,
  image,
  githubUrl,
  twitterUrl,
}) => (
  <div className="speaker__wrapper">
    <div className="speaker__avatar">
      <img
        src={image}
        alt="speaker__image"
      />
    </div>
    <div className="speaker__details">
      <h3 className="speaker__name">{name}</h3>
      <p className="speaker__title">{`${title}, ${company}`}</p>
      <p>{introText}</p>
      <div>
        {githubUrl !== '#' && <a
          className="github__icon"
          href={githubUrl}
          target="_blank"
        />}
        {twitterUrl !== '#' && <a
          className="twitter__icon"
          href={twitterUrl}
          target="_blank"
        />}
      </div>
    </div>
  </div>
);
