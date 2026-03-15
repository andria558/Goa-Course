import React from 'react';

const Prop = ({ array }) => {
  return (
    <div>
      {array.map((e, i) => (
        <h1 key={i}>{String(e)}</h1>
      ))}
    </div>
  );
};

export default Prop;