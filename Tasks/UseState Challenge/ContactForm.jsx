import { useState } from "react";
import "./ContactForm.css"
const ContactForm = () => {
  const [User, setUser] = useState({
    Username: "",
    mail: "",
    password: "",
  });
  const getInput = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    localStorage.setItem("UserData", JSON.stringify(User));

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Please Fill The Form</h1>

        <div>
          <h1>
            <b>Contact Form</b>
          </h1>
          <label htmlFor="name">
            <b> Your Name:</b>
          </label>
          <input
            type="text"
            name="Username"
            placeholder="Enter your name"
            required
            autoComplete="off"
            value={User.Username}
            onChange={getInput}
          />

          <label htmlFor="email">
            <b> Your Email:</b>
          </label>
          <input
            type="email"
            name="mail"
            placeholder="Enter your mail"
            autoComplete="off"
            value={User.mail}
            onChange={getInput}
            required
          />

          <label htmlFor="password">
            <b> Your Password:</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={User.password}
            onChange={getInput}
            autoComplete="off"
            required
          />

          <button
          type="submit"
          >Contact</button>
        </div>
      </form>
    </>
  );
};
export default ContactForm;
