import React, { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("");

  if (name === "Admin") {
    throw new Error("Security violation: 'Admin' is not allowed");
  }

  return (
    <form>
      <label>
        სახელი:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">შენახვა</button>
    </form>
  );
}

export default UserProfile;
