import React, { Component } from 'react';
import './App.css';
import {
  Link,
  Route
} from 'react-router-dom'

import Home from '../home/Home.js'
import About from '../about/About.js'
import Projects from '../projects/Projects.js'
import VR from '../vr/VR.js'
import Art from '../art/Art.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className="app">
        <header>
          <Link to="/" className="logo">Donell Ellis</Link>
          <nav>
            <button className="nav-burger" onClick={this.handleClick}></button>
            <div className={this.state.isToggleOn ? 'nav-links-open' : 'nav-links-closed'}>
              <Link to="/about">About</Link>
              <Link to="/projects">Work</Link>
              <Link to="/vr">VR</Link>
              {/* <Link to="/art">Art</Link> */}
            </div>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/about" component={ About }/>
          <Route exact path="/projects" component={ Projects }/>
          <Route exact path="/vr" component={ VR }/>
          <Route exact path="/art" component={ Art }/>
        </main>
        <aside>
            <i className="fab fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/donellellis"></i>
            <i className="fab fa-linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/donell-ellis/"></i>
        </aside>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
