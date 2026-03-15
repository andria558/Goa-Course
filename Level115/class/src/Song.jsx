import React from 'react'

// const Song = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.artist}</h2>
//       <h2>{props.istruments}</h2>
//       <h4>{props.date}</h4>
//     </div>
//   )
// }

// export default Song;


const Song1 = ({ name1, artist1, istruments1, date1 }) => {
  return (
    <div>
      <h1>{name1}</h1>
      <h2>{artist1}</h2>
      <h2>{istruments1}</h2>
      <h4>{date1}</h4>
    </div>
  )
}

export default Song1;

