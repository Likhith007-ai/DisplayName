import "./App.css";
import React, { useState } from "react";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value) {
      e.target.setCustomValidity("");
    }
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value) {
      e.target.setCustomValidity("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName("");
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={handleFirstName}
            value={firstName}
            required
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleLastName}
            value={lastName}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default DisplayName;
