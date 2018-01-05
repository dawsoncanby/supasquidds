import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h2>Supa Squidds</h2>
              <h5>A music group from Denver, Colorado</h5>
              <a>Listen On: </a>
              <a href="https://soundcloud.com/will-and-dawson-beats">SoundCloud</a>
              &nbsp;
              <a href="https://www.youtube.com/channel/UCR9w3xFUSjoym2O0Qnqwiyg">YouTube</a>
          </header>

          <div className="App-content-section">
            <h2>Recent Tracks</h2>
            <iframe width="90%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/229298628&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
          </div>
      </div>
    );
  }
}

export default App;
