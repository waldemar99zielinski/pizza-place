import React, { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("");

  const NAME_MAX_LENGTH = 50;

  const nameHandler = (e) => {
    const name = e.target.value;

    if (name.length > NAME_MAX_LENGTH) {
      setName(`${name.slice(0, NAME_MAX_LENGTH)}`);
    } else {
      setName(`${name}`);
    }
  };

  return (
    <div className="order-finalization-form-container">
      <input
        type="text"
        value={name}
        onChange={(e) => nameHandler(e)}
        className="order-finalization-input"
        placeholder=" "
      />
      <label className="order-finalization-label">Name:</label>
    </div>
  );
};

export default NameInput;
