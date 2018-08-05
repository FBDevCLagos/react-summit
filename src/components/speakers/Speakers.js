import React from 'react';

import SpeakerCard from './SpeakerCard';
import { speakersList } from './content/speakers';
import './Speakers.css';

export default () => (
  <div id="speakers">
    <h2 className="side-panel__header-title">
      Speakers
    </h2>
    <div className="side-panel__content speakers">
        <p>
          { false && `Here's a list of awesome speakers you should be expecting at
          React Summit 2018` }
          { true && `Do you have valuable knowledge that you'd like to share to
            help drive the community forward? If you are interested in speaking
            or hosting a workshop at the React Summit event, please apply below.` }
        </p>
      {
        false && speakersList.map((speaker, index) =>
          <SpeakerCard
            key={`speaker-${index}`}
            name={speaker.name}
            title={speaker.title}
            company={speaker.company}
            introText={speaker.introText}
            image={speaker.image}
            githubUrl={speaker.githubUrl}
            twitterUrl={speaker.twitterUrl}
          />)
      }

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdVkvsWReh0zCJE3PJfmLm8Xomq36rXZZEJ-NweSRWXfq9g3Q/viewform"
        className="button apply"
        target="_blank"
      >
        Apply to Speak
      </a>
    </div>
  </div>
);
