import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h2>Supa Squidds</h2>
              <h5>A music group from Denver, Colorado</h5>
              <a href="https://soundcloud.com/will-and-dawson-beats">
                  <img src="soundcloud_logo.png" alt="SoundCloud" width="32" height="32"/>
              </a>
              &nbsp;&nbsp;
              <a href="https://www.youtube.com/channel/UCR9w3xFUSjoym2O0Qnqwiyg">
                  <img src="youtube_logo.png" alt="YouTube" width="32" height="32"/>
              </a>
              &nbsp;&nbsp;
              <a href="https://www.instagram.com/supa_squidds/">
                  <img src="instagram_logo.png" alt="Instagram" width="32" height="32"/>
              </a>
              &nbsp;&nbsp;
              <a href="https://open.spotify.com/artist/226oZaBWbPTWNFWW3SdOwB?si=eaHQE0fAS-umwIbF9TzdZw">
                  <img src="spotify_logo.png" alt="Spotify" width="32" height="32"/>
              </a>
              &nbsp;&nbsp;
              <a href="https://itunes.apple.com/us/artist/supa-squidds/1344140343">
                  <img src="itunes_logo.png" alt="Itunes" width="32" height="32"/>
              </a>
          </header>

          <div className="App-content-section">
              <h2> Aquatic Boys out now!!</h2>
              <iframe width="90%" height="800px" src="https://artist.landr.com/music/800739333734"></iframe>
              <h2>Recent Tracks</h2>
              <iframe width="90%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/229298628&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
          </div>
      </div>
    );
  }
}

export default App;
