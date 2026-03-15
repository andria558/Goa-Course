import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({ name: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
    </form>
  );
};

export default App;
