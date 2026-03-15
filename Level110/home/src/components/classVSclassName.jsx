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

      {/* მაგალითი 4 */}
      <input type="text" placeholder='Enter Name ..' className='Name' />

      {/* მაგალითი 5 */}
      <details className='Detals-info'>
        {/* მაგალითი 6 */}
        <summary>info</summary>
        its insane Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, porro unde itaque deserunt eveniet similique recusandae voluptas voluptatum aliquam? Ullam nostrum a rem odio eius soluta vero, incidunt iste obcaecati consequatur maxime aspernatur rerum aliquam illum ex impedit eum minima hic accusantium corrupti sed laboriosam consectetur ut. Possimus a, magni laborum exercitationem maxime eveniet incidunt corrupti. Maiores modi expedita veniam in consectetur adipisci dicta officia praesentium dolores.
      </details>
      {/* მაგალითი 7 */}
      <progress className='myProgress' value='0' max='100' min='0'></progress>
      {/* მაგალითი 8 */}
      <fieldset className='setField'>
        <legend className='border_label'>HEY, Bro</legend>
        {/* მაგალითი 9 */}
        <p className='field_paragraph'>thats insane</p>
      </fieldset>
      {/* მაგალითი 10 */}
      <abbr title="HyperText Markup Language"><a href="#">HTML</a></abbr>
    </div>
  )
}

export default classVSclassName
