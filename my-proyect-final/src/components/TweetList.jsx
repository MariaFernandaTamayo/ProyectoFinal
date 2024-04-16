import React, { useState } from 'react';

const TweetList = ({ tweets, onTweetEdit, onTweetDelete }) => {
  const [editTweetId, setEditTweetId] = useState(null);
  const [editedTweetText, setEditedTweetText] = useState('');

  const handleEditClick = (tweetId, tweetContent) => {
    setEditTweetId(tweetId);
    setEditedTweetText(tweetContent);
  };

  const handleSaveEdit = (tweetId) => {
    const updatedTweets = tweets.map(tweet =>
      tweet.id === tweetId ? { ...tweet, content: editedTweetText } : tweet
    );
    onTweetEdit(updatedTweets);
    setEditTweetId(null);
    setEditedTweetText('');
  };

  const handleCancelEdit = () => {
    setEditTweetId(null);
    setEditedTweetText('');
  };

  const handleDelete = (tweetId) => {
    const updatedTweets = tweets.filter(tweet => tweet.id !== tweetId);
    onTweetDelete(updatedTweets);
  };

  return (
    <div className="tweet-list">
      <h2>Timeline</h2>
      {tweets.map(tweet => (
        <div className="tweet" key={tweet.id}>
          {editTweetId === tweet.id ? (
            <>
              <textarea 
                value={editedTweetText} 
                onChange={(e) => setEditedTweetText(e.target.value)} 
                required 
              />
              <button onClick={() => handleSaveEdit(tweet.id)}>Guardar</button>
              <button onClick={handleCancelEdit}>Cancelar</button>
            </>
          ) : (
            <>
              <h3>{tweet.username}</h3>
              <p>{tweet.content}</p>
              <button onClick={() => handleEditClick(tweet.id, tweet.content)}>Editar</button>
              <button onClick={() => handleDelete(tweet.id)}>Eliminar</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TweetList;