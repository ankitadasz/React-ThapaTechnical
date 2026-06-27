import "./Registration.css";
import { useState } from "react";
const Registration = () => {
  const data = JSON.parse(localStorage.getItem("UserData") || {});
  const [firstname, setFirstName] = useState(data.firstname || "");
  const [lastname, setLastName] = useState(data.lastname || "");
  const [email, setEmail] = useState(data.email || "");
  const [Password, setPassword] = useState(data.Password || "");
  const [phoneno, setPhoneNo] = useState(data.phoneno || "");

  const getInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "firstname":
        setFirstName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "Password":
        setPassword(value);
        break;
      case "Phone No":
        setPhoneNo(value);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const FormData = {
      firstname,
      lastname,
      email,
      Password,
      phoneno,
    };
    localStorage.setItem("UserData", JSON.stringify(FormData));
    console.log(data);
  };

  return (
    <>
      <p className="information">
        {" "}
        Hello,{" "}
        <b>
          {firstname} {lastname}
        </b>{" "}
        👋. We're glad to have you here! You can be reached at <b>{email}</b> or{" "}
        <b>{phoneno}</b>
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
            value={firstname}
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
            value={lastname}
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
            value={email}
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
            value={Password}
            onChange={getInputChange}
          />

          <label htmlFor="Phone No">
            <b>Phone No</b>
          </label>
          <input
            type="tel"
            placeholder="Enter Phone No"
            name="Phone No"
            required
            value={phoneno}
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
export default Registration;
