import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../pages/home/Header";
import Footer from "../pages/home/Footer";
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    } else if (name === "password") {
      setPassword(value);
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      callCoachLogin();
    } else {
      console.log("Form is invalid. Cannot submit.");
    }
  };

  const validateForm = () => {
    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      valid = false;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      valid = false;
    } else if (!/[0-9]/.test(password)) {
      setPasswordError("Password must contain at least one number");
      valid = false;
    } else if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(password)) {
      setPasswordError("Password must contain at least one symbol");
      valid = false;
    }

    return valid;
  };

  function callCoachLogin() {
    axios.post('http://192.168.1.79:5000/api/prime/coachlogin', { email, password })
      .then(function(response) {
        navigate("/inner-header");
        console.log(response);
      })
      .catch(function(err) {
        if (err.response && err.response.status === 401) {
          alert(err.response.data.message);
        }
        console.log(err);
      });
  }

  return (
    <div className="login-page-wrapper">
      <Header />
      <section className="login_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <form onSubmit={handleSubmit} className="login_form">
                <div className="heading text-center">COACH - LOGIN</div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                  {emailError && <span className="error">{emailError}</span>}
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  {passwordError && <span className="error">{passwordError}</span>}
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>

                <div className="page_links mt-4">
                  <NavLink to="/forget-password" className="forgot_password">
                    Forgot Password?
                  </NavLink>
                  <NavLink to="/coach-dasboard" className="forgot_password">
                    New User
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;



// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import Header from "../pages/home/Header";
// import Footer from "../pages/home/Footer";
// import axios from 'axios'
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const Login = () => {

//   const navigate = useNavigate()
  
//   const [showPassword, setShowPassword] = useState(false);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");


//   function callCoachLogin(){
//     axios.post('http://192.168.1.79:5000/api/prime/coachlogin' , { email, password })
//     .then(function(response){
//       navigate("/inner-header")
//         console.log(response)
//     })
//     .catch(function (err){
//       if(err.response.status === 401){
//         alert(err.response.data.message)
//       }
//         console.log(err)
//     })
//   }

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "email") {
//       setEmail(value);
//       setEmailError("");
//     } else if (name === "password") {
//       setPassword(value);
//       setPasswordError("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form is valid. Submitting...");
//     } else {
//       console.log("Form is invalid. Cannot submit.");
//     }
//   };

//   const validateForm = () => {
//     let valid = true;

//     if (!email) {
//       setEmailError("Email is required");
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError("Email is invalid");
//       valid = false;
//     }

//     if (!password) {
//       setPasswordError("Password is required");
//       valid = false;
//     } else if (password.length < 6) {
//       setPasswordError("Password must be at least 6 characters long");
//       valid = false;
//     }

//     return valid;
//   };

//   return (
//     <div className="login-page-wrapper">
//       <Header />
//       <section className="login_page">
        
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 m-auto">
//               <form onSubmit={handleSubmit} className="login_form">
//                 <div className="heading text-center">COACH - LOGIN</div>
//                 <div className="form-group">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Email Address"
//                     name="email"
//                     value={email}
//                     onChange={handleChange}
//                   />
//                     {emailError && <span className="error">{emailError}</span>}
//                 </div>

//                 <div className="form-group">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     name="password"
//                     value={password}
//                     onChange={handleChange}
//                   />
//                    <div className="input-group-append">
//       {showPassword ? (
//         <span className="input-group-text" onClick={togglePasswordVisibility}>
//           <FaEyeSlash />
//         </span>
//       ) : (
//         <span className="input-group-text" onClick={togglePasswordVisibility}>
//           <FaEye />
//         </span>
//       )}
//     </div>

//                    {passwordError && <span className="error">{passwordError}</span>}
//                 </div>
//                 <button type="submit" className="btn btn-primary" onClick={callCoachLogin} >
//                   Submit
//                 </button>

//                 <div className="page_links mt-4">
//                   <NavLink to="/forget-password" className="forgot_password">
//                     Forgot Password ?
//                   </NavLink>
//                   <NavLink to="/athlete-dasboard" className="forgot_password">
//                     New User
//                   </NavLink>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Login;