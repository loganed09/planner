import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          name='name'
          type='text'
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        <input 
          name="phone"
          type='tel'
          value={phone}
          // pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          placeholder="Phone Number (###-###-####)"
          onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        <input 
          name='email'
          type='email'
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />
      </label>
      <input
        type="submit"
        value="Submit" />
    </form>
  );
};
