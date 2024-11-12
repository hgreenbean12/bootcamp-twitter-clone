// App.js
import React from 'react';
import Tweet from './Tweet';
import { tweetsData } from './data';

/* Do not write your tweet component here, write it in the tweet.tsx file */

function App() {
  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <div className="feed">
        {tweetsData.map(tweet => (
          <Tweet
            key={tweet.id}
            username={tweet.username}
            content={tweet.content}
            likes={tweet.likes}
            timestamp={tweet.timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
