import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="register">
      <img className="register-child" alt="" src="/vector-2.svg" />
      <div className="register-item" />
      <div className="register-inner" />
      <div className="rectangle-div" />
      <div className="register-child1" />
      <div className="register-child2" />
      <div className="register-child3" />
      <div className="register-child4" />
      <div className="register-child5" />
      <div className="hy-there">Hy There!</div>
      <div className="email">Email</div>
      <div className="your-name">Your Name</div>
      <div className="your-name1">Your Name</div>
      <div className="password">Password</div>
      <div className="retype-pass">Retype Pass</div>
      <img
        className="sign-up-icon"
        alt=""
        src="/sign-up.svg"
        onClick={onSignUpClick}
      />
    </div>
  );
};

export default Register;
