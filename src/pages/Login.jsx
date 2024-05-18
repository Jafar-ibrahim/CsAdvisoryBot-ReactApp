import React, {useEffect, useState} from "react";
import Button from "../components/Button";
import SignupForm from "../components/signup/SignUpForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [isSignupFormVisible, setIsSignupFormVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCsrfToken();
    }, []);

  const fetchCsrfToken = async () => {
    try {
      await axios.get('http://localhost:8000/chat/login');
    } catch (error) {
      console.error('Failed to fetch CSRF token:', error);
    }
  };
  const handleClick = async (purpose) => {
    if (purpose === "signup") {
      setIsSignupFormVisible(true);
    }
    if (purpose === "login") {
      navigate("/login");
    }
  };

  return (
    <>
      {!isSignupFormVisible ? (
        <div className="loginContainer">
          <div className="loginContainerContent">
            <img
                src="../CsAdvisoryBot-icon.png"
                alt="Cs Advisory Bot Logo"
                width="360"
                height="360"
            />
            <h1>Welcome to CsBot</h1>
            <p>Your AI Assistant In Your Studies</p>
            <div className="loginButtonWrapper">
              <Button text="Log in" handleClick={() => handleClick("login")} />
              <Button
                text="Sign up"
                handleClick={() => handleClick("signup")}
              />
            </div>
          </div>
        </div>
      ) : (
        <SignupForm />
      )}
    </>
  );
};

export default Login;
