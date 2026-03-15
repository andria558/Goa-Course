import React from 'react'

const classVSclassName = () => {
  return (
      <div>
        {/* ეს არასწორი გზაა class -ის გამოყენების React-ში */}
        {/* <div class="box">Hello</div> */}

        {/* სწორი გზაა className გამოყენება */}
        <div className="box">Hello</div>

        {/* მაგალითი 2 */}
        <p className="text-large">This is a paragraph</p>

        {/* მაგალითი 3 */}
        <button className="btn-primary">Click Me</button>
      </div>
  )
}

export default classVSclassName
