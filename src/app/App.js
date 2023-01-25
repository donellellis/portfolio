import React, { Component } from 'react';
import './App.css';
import {
  Link,
  Route
} from 'react-router-dom'

import Home from '../home/Home.js'

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
          <h1 className="logo">Donell Ellis</h1>
        </header>
        <main>
          <Route exact path="/" component={ Home }/>
        </main>
        <aside>
            <a className="fab fa-linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/donell-ellis/" aria-label="Linkedin"></a>
            <a className="fab fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/donellellis" aria-label="GitHub"></a>

        </aside>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
