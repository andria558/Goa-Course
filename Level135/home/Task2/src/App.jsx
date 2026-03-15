import React, { useState } from 'react';

const ProfileForm = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted profile:', profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
