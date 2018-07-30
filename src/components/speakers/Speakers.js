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
      <p>Here's a list of awesome speakers you'll be expecting at React Summit 2018</p>
      {
        speakersList.map(speaker =>
          <SpeakerCard
            name={speaker.name}
            title={speaker.title}
            company={speaker.company}
            introText={speaker.introText}
            image={speaker.image}
            githubUrl={speaker.githubUrl}
            twitterUrl={speaker.twitterUrl}
          />)
      }
    </div>
  </div>
);
