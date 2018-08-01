import React, { Component } from 'react';

import './Schedule.css';

export default class Schedule extends Component {
  state = {
    activeTab: "primary"
  }

  makeActiveTab(compareStr) {
    const { activeTab } = this.state;

    return activeTab === compareStr ? 'active' : '';
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
            <div className="event">
              <div className="event__metadata">
                <span className="time">
                  11am - 11:15 am
                </span>
              </div>

              <div className="event__details">
                <span className="event__title">Opening Remarks</span>
              </div>
            </div>

            <div className="event">
              <div className="event__metadata">
                <span className="event__type">
                  Beginner Workshop
                </span>
                <span className="event__time">
                  11:15 am - 11:30 am
                </span>
              </div>

              <div className="event__details">
                <span className="event__anchor">Bolu Oluwagbesan</span>
                <span className="event__title">Building awesome apps with React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
