import React, { Component } from 'react';

import schedule from './content/schedule';

import './Schedule.css';

const Event = ({ type, time, title, anchor }) => {
  return (
    <div className="event">
      <div className="event__metadata">
        {type && <span className="event__type">
          {type}
        </span> }
        <span className="event__time">
          {time}
        </span>
      </div>

      <div className="event__details">
        <span className="event__title">{title}</span>
        {anchor && <span className="event__anchor">{anchor}</span> }
      </div>
    </div>
  );
};

export default class Schedule extends Component {
  state = {
    activeTab: "primary"
  }

  makeActiveTab(compareStr) {
    const { activeTab } = this.state;

    return activeTab === compareStr ? 'active' : '';
  }

  listEvents(events) {
    return events.map(({ type, time, title, anchor }) => (
      <Event
        key={title}
        type={type}
        time={time}
        title={title}
        anchor={anchor}
      />
    ));
  }

  render () {
    return (
      <div id="schedule" className="side-panel__container schedule">
        <h2 className="side-panel__header-title">
          <i className="fa fa-calendar-alt"></i>
          Schedule
        </h2>

        <div className="side-panel__content">
          <div className="timelines">
            <p
              className={`timeline ${this.makeActiveTab('primary')}`}
              onClick={() => {
                this.setState({
                  activeTab: 'primary'
                })
              }}
            >
              Fri, Oct 19
            </p>

            <p
              className={`timeline ${this.makeActiveTab('secondary')}`}
              onClick={() => {
                this.setState({
                  activeTab: 'secondary'
                })
              }}
            >
              Sat, Oct 20
            </p>
          </div>

          <div className={`events ${this.makeActiveTab('primary')}`}>
            { this.listEvents( schedule.firstDayEvents ) }
          </div>

          <div className={`events ${this.makeActiveTab('secondary')}`}>
            { this.listEvents( schedule.secondDayEvents ) }
          </div>
        </div>
      </div>
    );
  }
}
