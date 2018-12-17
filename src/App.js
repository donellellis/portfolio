import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

import Home from './Home.js'
import About from './About.js'
import Projects from './Projects.js'
import VR from './VR.js'
import Art from './Art.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Link to="/" className="logo">Donell Ellis</Link>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            {/* <Link to="/vr">Virtual Reality</Link>
            <Link to="/art">Art</Link> */}
          </nav>
        </header>
        <main>
          <aside>
            <a className="fab fa-github" target="_blank" href="https://github.com/donellellis"></a>
            <a className="fab fa-linkedin" target="_blank" href="https://www.linkedin.com/in/donell-ellis/"></a>
          </aside>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/about" component={ About }/>
          <Route exact path="/projects" component={ Projects }/>
          <Route exact path="/vr" component={ VR }/>
          <Route exact path="/art" component={ Art }/>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
