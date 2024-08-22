import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "your form has been submitted " + name + " " + email + " " + password
    );

    setName('');
    setEmail('');
    setPassword('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name :-{" "}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <h4>{name}</h4>
        </div>
        <div>
          Email :-{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h4>{email}</h4>
        </div>
        <div>
          Password :-{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <h4>{password}</h4>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
