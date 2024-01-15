import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onLogInTextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onLogInAsClick = useCallback(() => {
    navigate("/laman-admin");
  }, [navigate]);

  const onGaPunyaAkunClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="login">
      <img className="login-child" alt="" src="/vector-2.svg" />
      <div className="login-item" />
      <div className="login-inner" />
      <div className="login-child1" />
      <div className="login-child2" />
      <div className="login-child3" />
      <div className="login-child4" />
      <div className="hi-welcome">Hi! WELCOME</div>
      <div className="email1">Email</div>
      <div className="password1">Password</div>
      <div className="log-in" onClick={onLogInTextClick}>
        Log In
      </div>
      <div className="login-child5" />
      <div className="log-in-as" onClick={onLogInAsClick}>
        Log In As Admin
      </div>
      <div className="ga-punya-akun" onClick={onGaPunyaAkunClick}>
        Ga punya Akun? Sign UP
      </div>
    </div>
  );
};

export default Login;
