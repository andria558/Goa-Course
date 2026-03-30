import React, { useState } from "react";

export default function FormsExamples() {
  // Example 1: Simple text input
  const [name, setName] = useState("");

  // Example 2: Checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Example 3: Radio buttons
  const [gender, setGender] = useState("");

  // Example 4: Select dropdown
  const [country, setCountry] = useState("");

  // Example 5: Full form with multiple fields
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Example 1 */}
      <h3>Example 1: Text Input</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name: {name}</p>

      {/* Example 2 */}
      <h3>Example 2: Checkbox</h3>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Accept Terms
      </label>
      <p>{isChecked ? "Accepted" : "Not Accepted"}</p>

      {/* Example 3 */}
      <h3>Example 3: Radio Buttons</h3>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <p>Selected gender: {gender}</p>

      {/* Example 4 */}
      <h3>Example 4: Select Dropdown</h3>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Choose country</option>
        <option value="Georgia">Georgia</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
      </select>
      <p>Selected country: {country}</p>

      {/* Example 5 */}
      <h3>Example 5: Full Form</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Email: ${formData.email}, Password: ${formData.password}`);
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleFormChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
