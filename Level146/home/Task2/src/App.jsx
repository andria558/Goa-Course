import React, { useState, useEffect } from "react";

export default function HooksExamples() {
  // Example 1: useState
  const [count, setCount] = useState(0);

  // Example 2: useEffect
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  // Example 3: useState with object
  const [user, setUser] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Example 1 */}
      <h3>Example 1: useState Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      {/* Example 2 */}
      <h3>Example 2: useEffect Timer</h3>
      <p>Seconds passed: {seconds}</p>

      {/* Example 3 */}
      <h3>Example 3: useState with Object</h3>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={user.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        name="age"
        placeholder="Enter age"
        value={user.age}
        onChange={handleChange}
      />
      <p>
        User: {user.name}, Age: {user.age}
      </p>
    </div>
  );
}
