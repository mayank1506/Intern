import { useState } from "react";
import './login.css';
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";


const LoginPage = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  localStorage.setItem("username",JSON.stringify(username));
  localStorage.setItem("password",JSON.stringify(password));

  const navigate = useNavigate();
  const handleLogin = () => {

     if (username === "mayank" && password === "1234") {
     setIsAuthenticated(true);
     };
     if (username === "adarsh" && password === "1234") {
      setIsAuthenticated(true);
     };
  }
     if (isAuthenticated) {
    
     return <Dashboard onLogout={function (): void {
       throw new Error("Function not implemented.");
     } } children={undefined} profilePicUrl={""} />;
    
     }

  return (
    <><header className="dashboard__header">
      <div className="dashboard__header__logo">
        <img src="/techsophylogo.png" alt="Logo" />
        <a className="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div className="dashboard__header__user">
      </div>
    </header><div className="Login-page">
        <div className="Login-box">
          <div className="Login-Header">Login</div>
          <div className="inputs">
            <form>
              <label>
                Username:
                <input className="Name"
                  type="text" value={username}
                  onChange={(e) => setUsername(e.target.value)} />
              </label>
              <label>
                Password:
                <input className="Password"
                  type="password" value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </label>
              <div style={{ display: 'flex', justifyContent: 'center' }}></div>
              <button className="loginbutton" type="button" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div></>
    
  );
};

export default LoginPage;
