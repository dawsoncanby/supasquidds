import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
              <h2>Supa Squidds</h2>
              <h3>A music group from Denver, Colorado</h3>
          </div>



          <div className="App-content-section">
              <h2>Info</h2>
              <p className="App-intro">
                  Inquiries: wilanddawsonbeats@gmail.com
              </p>
          </div>
          <div className="App-content-section">
            <h2>Recent Tracks</h2>
            <iframe width="90%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/229298628&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
          </div>
      </div>
    );
  }
}

export default App;
