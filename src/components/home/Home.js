import React, { Component } from 'react';

import Logo from './Logo';
import BackgroundParticle from './BackgroundParticle';

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

class Home extends Component {
  state = {
    bg: "#fff",
    sidePanelPos: "-70%",
    sectionStartMargin: "10%",
    introMessageWidth: "100%"
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

  showPanel = () => {
    this.setState({
      sidePanelPos: 0,
      sectionStartMargin: "7%",
      introMessageWidth: "70%"
    });
  }

  closePanel = () => {
    this.setState({
      sidePanelPos: "-70%",
      sectionStartMargin: "10%",
      introMessageWidth: "100%"
    });
  }

  render() {
    const { bg, sidePanelPos, sectionStartMargin, introMessageWidth } = this.state;

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
              React Summit is a one-day community driven event aimed at
              bringing together frontend developers who use React/Javascript
              or are hoping to learn more about it so as to foster deep,
              valuable discussions around what’s new, what’s possible and best
              practices.
            </p>

            <a href="#" className="button"> Register</a>
          </section>

          <section className="main__navigation">
            <nav onClick={this.showPanel}>
              <a href="#about">About</a>
              <a href="#venue">Venue</a>
              <a href="#sponsors">Sponsors</a>
            </nav>
          </section>
        </main>

        <footer className="footer">
          <i className="fa fa-envelope-o social-icon"></i>
          <i className="fa fa-twitter social-icon"></i>
          <i className="fa fa-facebook social-icon"></i>
        </footer>

        <aside
          className="side-panel"
          style={{
            right: sidePanelPos
          }}
        >
          <span
            className="side-panel__close-panel"
            onClick={this.closePanel}
          >
            &times;
          </span>
          <h2 className="side-panel__header-title">
            About
          </h2>
          <p className="side-panel__content">
            React Summit is a one-day community driven event aimed at bringing
            together frontend developers who use React/Javascript or are hoping
            to learn more about it so as to foster deep, valuable discussions
            around what’s new, what’s possible and best practices
          </p>
        </aside>
      </section>
    );
  }
}

export default Home;
