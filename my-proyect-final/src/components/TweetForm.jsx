import React, { useState } from 'react';

const TweetForm = ({ onTweetSubmit, username }) => {
  const [tweetText, setTweetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = tweetText.trim();
    if (trimmedText) {
      const newTweet = {
        id: Date.now(),
        username: username,
        content: trimmedText,
      };
      onTweetSubmit(newTweet);
      setTweetText('');
    } else {
      alert('Por favor, ingresa un tweet válido.');
    }
  };

  return (
    <div className="tweet-form">
      <h2>Crear nuevo Tweet</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={tweetText} 
          onChange={(e) => setTweetText(e.target.value)} 
          placeholder="¿Qué está pasando?" 
          required 
        />
        <button type="submit">Twittear</button>
      </form>
    </div>
  );
}

export default TweetForm;