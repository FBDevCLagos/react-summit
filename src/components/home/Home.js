import React, { Component } from 'react';

import Logo from './Logo';
import BackgroundParticle from './BackgroundParticle';
import Speakers from '../speakers/Speakers';
import Sponsors from '../sponsors/Sponsors';
import Venue from '../venue/Venue';
import Schedule from '../schedule/Schedule';

import './Home.css';

const fancyBgs = [
  "#ffffff", "#177e89", "#dccca3", "#ffc857"
];

const pickBg = () => {
  let startIndex = 0;

  return () => {
    if (startIndex >= fancyBgs.length) startIndex = 0;

    let bgColor = fancyBgs[startIndex];

    startIndex += 1

    return bgColor;
  };
};

const sidePanelComponents = {
  speakers: Speakers,
  venue: Venue,
  sponsors: Sponsors,
  schedule: Schedule
}

class Home extends Component {
  state = {
    bg: "#fff",
    sidePanelPos: "-70%",
    introMessageWidth: "100%",
    panelActive: false,
    activeContent: null
  }

  componentDidMount() {
    let bgColor = pickBg();
    let intervalId = setInterval(function () {
      this.setState({
        bg: bgColor()
      });
    }.bind(this), 5000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  showPanel = (e) => {
    this.setState({
      panelActive: true,
      activeContent: e.target.dataset.activePanel,
      introMessageWidth: "70%"
    });
  }

  closePanel = () => {
    this.setState({
      panelActive: false,
      introMessageWidth: "100%"
    });
  }

  showActivePanelContent() {
    const { activeContent } = this.state;

    if (activeContent) {
      const $activeComponent = sidePanelComponents[activeContent];

      return <$activeComponent />
    }
  }

  render() {
    const {
      bg,
      panelActive,
      introMessageWidth
    } = this.state;

    return (
      <section
        className="container"
        style={{
          border: `10px solid ${bg}`
        }}
      >
        <BackgroundParticle backgroundColor={bg} />

        <header className="header">
          <Logo backgroundColor={bg} />
          <p>React Summit</p>
        </header>

        <main className="main">
          <section className="main__jumbotron">
            <Logo backgroundColor={bg} />

            <h1 className="main__header-title">
              Get Ready for React Summit 2018
            </h1>

            <p
              className="main__intro-message"
              style={{
                width: introMessageWidth
              }}
            >
              React Summit is a community driven event aimed at
              bringing together frontend developers who use React/Javascript
              or are hoping to learn more about it so as to foster deep,
              valuable discussions around what’s new, what’s possible and best
              practices.
            </p>

            <a
              href="https://eventplog.com/ext/c/devclagos/e/reactsummit2018/register"
              className="button"
              target="_blank"
            >
              Register
            </a>
          </section>

          <section className="main__navigation">
            <nav onClick={this.showPanel}>
              <a href="#speakers" data-active-panel="speakers">Speakers</a>
              <a href="#venue" data-active-panel="venue">Venue</a>
              <a href="#sponsors" data-active-panel="sponsors">Sponsors</a>
              <a href="#schedule" data-active-panel="schedule">Schedule</a>
            </nav>
          </section>
        </main>

        <footer className="footer">
          <p className="info">
            React Summit is powered by Developer Circles Lagos
          </p>
        </footer>

        <aside className={`side-panel ${panelActive ? 'active' : ''}`}>
          <span
            className="side-panel__close-panel"
            onClick={this.closePanel}
          >
            &times;
          </span>

          { panelActive && this.showActivePanelContent() }
        </aside>
      </section>
    );
  }
}

export default Home;
