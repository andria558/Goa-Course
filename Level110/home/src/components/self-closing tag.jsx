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

      {/* მაგალითი 6 */}
      <link rel="stylesheet" href="styles.css" />

      {/* მაგალითი 7 */}
      <video controls>
        <source src="video.mp4" type="video/mp4" />
      </video>

      {/* მაგალითი 8 */}
      <p>ThisIsA<wbr />VeryLong<wbr />Word</p>

      {/* მაგალითი 9 */}
      <keygen name="name" />

      {/* მაგალითი 10 */}
      <object data="movie.swf" type="application/x-shockwave-flash">
        <param name="autoplay" value="true" />
      </object>

    </div>

  )
}

export default selfClosingTag;
