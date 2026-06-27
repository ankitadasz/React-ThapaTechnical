import "./Registration.css";
import { useState } from "react";
const RegistrationReact = () => {
 
  const [User, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    Password:"",
    PhoneNo:"",
  });

  const getInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("UserData", JSON.stringify(User));
    console.log(User);
  };

  return (
    <>
      <p className="information">
        {" "}
        Hello,{" "}
        <b>
          {User.firstname} {User.lastname}
        </b>{" "}
        👋. We're glad to have you here! You can be reached at{" "}
        <b>{User.email}</b> or <b>{User.PhoneNo}</b>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please Fill This Form </p>
          <label htmlFor="firstname">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter First Name"
            required
            value={User.firstname}
            onChange={getInputChange}
          />

          <label htmlFor="lastname">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastname"
            placeholder="EnterLast Name"
            required
            value={User.lastname}
            onChange={getInputChange}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            value={User.email}
            onChange={getInputChange}
          />

          <label htmlFor="Password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="Password"
            required
            security="hiden"
            value={User.Password}
            onChange={getInputChange}
          />

          <label htmlFor="Phone No">
            <b>Phone No</b>
          </label>
          <input
            type="tel"
            placeholder="Enter Phone No"
            name="PhoneNo"
            required
            value={User.PhoneNo}
            onChange={getInputChange}
          />

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>
          <div className="clearfix">
            <button type="submit" className="btn">
              SignUp
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default RegistrationReact;
