import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Import CSS file for styling

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();

    // Perform sign-in logic (authentication)
    // For demonstration purposes, assume the user is authenticated successfully
    // You can replace this with your actual authentication logic

    // Navigate to the home page
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="img-co">
        <img src="/images/images.png" alt="clock" />
      </div>
      <h1>Welcome Back!</h1>
      <p>Sign in to your account</p>
      <form id="signin-form" onSubmit={handleSignIn}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username or Email"
        />
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
