import React, { Component } from "react";

import schedule from "./content/schedule";

import "./Schedule.css";

const Event = ({ type, time, title, anchor }) => {
	return (
		<div className="event">
			<div className="event__metadata">
				{type && <span className="event__type">{type}</span>}
				<span className="event__time">{time}</span>
			</div>

			<div className="event__details">
				<span className="event__title">{title}</span>
				{anchor && <span className="event__anchor">{anchor}</span>}
			</div>
		</div>
	);
};

const TimelineOption = ({ option, makeActiveTab, onClick }) => {
	return (
		<p
			className={`timeline ${makeActiveTab(option)}`}
			onClick={onClick}
			data-tab-option={option}>
			{option}
		</p>
	);
};

const TimelineTab = ({ makeActiveTab, onClick }) => {
	return (
		<div className="timelines">
			<TimelineOption
				option="beginner"
				makeActiveTab={makeActiveTab}
				onClick={onClick}
			/>

			<TimelineOption
				option="advanced"
				makeActiveTab={makeActiveTab}
				onClick={onClick}
			/>
		</div>
	);
};

export default class Schedule extends Component {
	state = {
		activeTab: "beginner"
	};

	makeActiveTab = compareStr => (this.state.activeTab === compareStr ? "active" : "");

	listEvents(events) {
		return events.map(({ type, time, title, anchor }) => (
			<Event key={title} type={type} time={time} title={title} anchor={anchor} />
		));
	}

	handleClick = e => {
		this.setState({
			activeTab: e.target.dataset.tabOption
		});
	};

	render() {
		return (
			<div id="schedule" className="side-panel__container schedule">
				<h2 className="side-panel__header-title">Schedule</h2>

				<div>Sit back, hold tight! We're cooking something good :)</div>
				{/*<div className="side-panel__content">*/}
				{/*<p>*/}
				{/*React Summit is scheduled for the 30th of November 2019*/}
				{/*</p>*/}
				{/*<div className="events active">*/}
				{/*{ this.listEvents(schedule.events.shared) }*/}
				{/*</div>*/}
				{/*<h2>*/}
				{/*Presentations && Workshops*/}
				{/*</h2>*/}
				{/*<TimelineTab*/}
				{/*makeActiveTab={this.makeActiveTab}*/}
				{/*onClick={this.handleClick}*/}
				{/*/>*/}
				{/*<div className={`events ${this.makeActiveTab('beginner')}`}>*/}
				{/*{ this.listEvents( schedule.events.beginner ) }*/}
				{/*</div>*/}
				{/*<div className={`events ${this.makeActiveTab('advanced')}`}>*/}
				{/*{ this.listEvents( schedule.events.advanced ) }*/}
				{/*</div>*/}
				{/*</div>*/}
			</div>
		);
	}
}
