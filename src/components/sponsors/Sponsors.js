import React from 'react';

import SponsorCard from './SponsorCard';
import './Sponsors.css';
import { sponsorsList } from "./content/sponsors";

export default () => (
  <div id="sponsors">
    <h2 className="side-panel__header-title">
      Sponsors
    </h2>
    <div className="side-panel__content sponsors">
      {
        sponsorsList.map(speaker =>
          <SponsorCard
            name={speaker.name}
            introText={speaker.introText}
            image={speaker.image}
          />)
      }
    </div>
    {/*<p className="side-panel__content">*/}
      {/*<div className="sponsor__wrapper">*/}
        {/*<div className="sponsor__logo"></div>*/}
        {/*<div className="sponsor__details"></div>*/}
      {/*</div>*/}
    {/*</p>*/}
  </div>
);
