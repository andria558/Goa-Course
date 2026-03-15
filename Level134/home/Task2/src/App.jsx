import React, { useState } from 'react';

const App = () => {
  const [list, setList] = useState(['Ana', 'Andria', 'Daviti', 'Datuna', 'Dato', 'Mari']);

  // კონკრეტული ელემენტის წაშლა index-ის მიხედვით
  const remove = (indexToRemove) => {
    setList(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => remove(index)}>
            {item}
          </li>
        ))}
      </ul>
      <br />
      <button onClick={() => setList(prev => [...prev, 'Gigi'])}>Add Gigi</button>
    </div>
  );
};

export default App;
