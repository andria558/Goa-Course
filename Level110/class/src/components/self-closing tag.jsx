import React from 'react'

const selfClosingTag = () => {
  return (
    <div>
      {/* მაგალითი 1 */}
      < img src="logo.png" alt="Logo" />

      {/* მაგალითი 2 */}
      < input type="text" placeholder="Enter name" />

      {/* მაგალითი 3 */}
      < br />

      {/* მაგალითი 4 */}
      < hr />

      {/* მაგალითი 5 */}
      < meta charSet="UTF-8" />
    </div>

  )
}

export default selfClosingTag;
