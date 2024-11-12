// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/



// export default Tweet;


// Tweet.tsx
//import React, { useState } from 'react';

interface TweetProps {
  key: number;
  username: string;
  content: string;
  likes: number;
  timestamp: string;
}

const Tweet: React.FC<TweetProps> = ({ key, username, content, likes, timestamp }) => {
  const [likeCount, setLikeCount] = useState<number>(likes);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="Tweet">
      <h3>{username}</h3>
      <p>{content}</p>
      <div>
        <button onClick={handleLike}>
          {isLiked ? '❤️' : '🤍'} Like
        </button>
        <span>{likeCount} {likeCount === 1 ? 'Like' : 'Likes'}</span>
        <span style={{ marginLeft: '10px', color: '#555' }}>{timestamp}</span>
      </div>
    </div>
  );
};

export default Tweet;
