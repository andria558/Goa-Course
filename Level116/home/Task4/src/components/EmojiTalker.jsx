import React from 'react'
import EmojiButton from './EmojiButton';

const EmojiTalker = () => {

    const handleEmoji = () => {
    let Emoji;

    let i = 1;
    while (i <= 3000) {
      Emoji += '🔥'
      i++;
    }
    alert(Emoji);
  }

  return (
    <div>
      <EmojiButton onEmoji={handleEmoji} />
    </div>
  )
}

export default EmojiTalker;