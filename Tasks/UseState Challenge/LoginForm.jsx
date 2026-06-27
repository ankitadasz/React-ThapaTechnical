import { useState } from "react";
import "./LoginForm.css"
const LoginForm = () => {
  const initialState = {
    firstname: "",
    email: "",
    password: "",
  };

  const [User, setUser] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userData", JSON.stringify(User));
    alert("Logged in Successfully");
    setUser(initialState);
  };

  const getInput = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Log-In</h1>
        <div>
          <label htmlFor="Name">
            <b>Name:</b>
          </label>
          <input
            type="text"
            name="firstname"
            onChange={getInput}
            value={User.firstname}
            placeholder="Give the Name"
            required
          />

          <label htmlFor="E-Mail">
            <b>E-Mail:</b>
          </label>
          <input
            type="email"
            name="email"
            onChange={getInput}
            value={User.email}
            placeholder="Give the mail"
            required
          />
          <label htmlFor="password">
            <b>Password:</b>
          </label>
          <input
            type="password"
            name="password"
            onChange={getInput}
            value={User.password}
            placeholder="Give the Password"
            required
          />
        </div>
        <button type="submit">Log-in</button>
      </form>
    </>
  );
};
export default LoginForm;
