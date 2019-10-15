import React from "react";

export default ({ name, title, company, introText, image, githubUrl, twitterUrl }) => (
   <div className="speaker__wrapper">
      <div className="speaker__details">
         <div className="speaker__avatar">
            <img src={image} alt="speaker__image" />
         </div>
         <h3 className="speaker__name">{name}</h3>
         <p className="speaker__title">{`${title}, ${company}`}</p>
         <div dangerouslySetInnerHTML={{ __html: introText }} />
         <div className="icon__wrapper">
            {githubUrl && <a className="github__icon" href={githubUrl} target="_blank" />}
            {twitterUrl && (
               <a className="twitter__icon" href={twitterUrl} target="_blank" />
            )}
         </div>
      </div>
   </div>
);
