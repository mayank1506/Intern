// import { useState } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import LoginPage from './login';
// import './dashboard.css';
 

// interface DashboardProps {
//   onLogout: () => void;
//   profilePicUrl: string;
//   children: React.ReactNode;
// }

// function Dashboard(props: DashboardProps) {
//   const navigate = useNavigate();

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleDropdownClick = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogoutClick = () => {
//     navigate('/');
//   };
  
  

//   return (
//     <div className="dashboard">
//       <div className="dashboard__header">
//         <div className="dashboard__header__user">
//         <img src="/techsophylogo.png" alt="Logo" />
//           <p>{props.profilePicUrl}</p>
//           </div>
//           <div className="dashboard__header__user__dropdown">
//             <div className="dashboard__header__user__dropdown__user">
//             <img src="/profilelogo.png" alt="Profile" onClick={handleDropdownClick} />
//             </div>
//         </div>
//       </div>
//       {/* <nav className="navbar">
//         <div className="navbar-brand">
//           <img src="/techsophylogo.png" alt="Logo" />
//         </div>
//         <div className="navbar-profile">
//           <img src="/profilelogo.png" alt="Profile" onClick={handleDropdownClick} />
//           {isDropdownOpen && (
//             <div className="dropdown">
//               <button><a href="/">Profile</a></button> | 
//               <button><a href="/">Logout</a></button>
//             </div>
//           )}
//         </div>
//       </nav> */}
//       <main>{props.children}</main>
//       <footer>
//         <div className="footer-links">
//           <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
//             <img src="/linkedinlogo.png" alt="LinkedIn Logo" />
           
//           </a>
//           <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
//             <img src="/facebooklogo.png" alt="Facebook Logo" />
            
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }
// export default Dashboard;
// import React, { useState } from "react";
// import LoginPage from './login';
// import { Navigate, useNavigate } from 'react-router-dom';
// import './dashboard.css';

// interface Props {
//   profilePicUrl: string;
// }

import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './login';
import './dashboard.css';
 

interface DashboardProps {
  onLogout: () => void;
  profilePicUrl: string;
  children: React.ReactNode;
}

function Dashboard(props: DashboardProps) {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogoutClick = () => {
    navigate('/login');
  };
 
  return (
    <div className="dashboard">
      {/* <div className="header">
  <a href="#default" className="logo">CompanyLogo</a>
  <div className="header-right">
    <a className="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div> */}

      <header className="dashboard__header">
      
        <div className="dashboard__header__logo">
        <img src="/techsophylogo.png" alt="Logo" />
        <a className="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
          
        </div>
        <div className="dashboard__header__user">
          
          <div className="dashboard__header__user__dropdown">
            <img
              src="/profilelogo.png"
              alt="Profile"
              onClick={handleDropdownClick}
            />
            {isDropdownOpen && (
              <div className="dropdown">
                <button>
                  <a href="/">Profile</a>
                </button>{" "}
                |
                <button>
                  <a href="/">Logout</a>

                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      {/* <main>{children}</main> */}
      <footer className="dashboard__footer">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedinlogo.png" alt="LinkedIn Logo" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebooklogo.png" alt="Facebook Logo" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
