import React from "react";

import SpeakerCard from "./SpeakerCard";
import { speakersList } from "./content/speakers";
import "./Speakers.css";

export default () => (
	<div id="speakers">
		<h2 className="side-panel__header-title">Speakers</h2>
		<div className="side-panel__content speakers">
			<p>
				We're coming up with a list of awesome speakers you should be expecting at
				React Summit 2019
			</p>
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSf8uIDlMUjBENalEIswZSrWsXNCG_85gbYzWPXFMZiz-gcYOQ/viewform"
				className="button apply"
				target="_blank">
				Apply to speak
			</a>
			{/*{}
			{speakersList.map((speaker, index) =>}
			{SpeakerCard}
			{key={`speaker-${index}`}}
			{name={speaker.name}}
			{title={speaker.title}}
			{company={speaker.company}}
			{introText={speaker.introText}}
			{image={speaker.image}}
			{githubUrl={speaker.githubUrl}}
			{twitterUrl={speaker.twitterUrl}}
			{/>)}
			{}*/}
		</div>
	</div>
);
