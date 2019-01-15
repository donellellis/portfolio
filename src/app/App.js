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
            </div>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/about" component={ About }/>
          <Route exact path="/projects" component={ Projects }/>
          <Route exact path="/vr" component={ VR }/>
        </main>
        <aside>
            <a className="fab fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/donellellis"></a>
            <a className="fab fa-linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/donell-ellis/"></a>
        </aside>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
