import React from 'react'
import '../components/EmojiTalker'

const EmojiButton = (prop) => {
  return (
    <div>
      <button onClick={prop.onEmoji}>Emojisss</button>
    </div>
  )
}

export default EmojiButton;