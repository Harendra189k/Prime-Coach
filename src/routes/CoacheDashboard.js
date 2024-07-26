import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Header from '../pages/home/Header';
import Footer from '../pages/home/Footer';

const CoacheDashboard = () => {

  
  const navigate = useNavigate()
    
    const [passwordEye, setPasswordEye] = useState('');
    const [confirmPasswordEye, setConfirmPasswordEye] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const [errors, setErrors] = useState({});

  function callCoach(){
    axios.post('http://192.168.1.79:5000/api/prime/coachsign', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,

    })
    .then(function (response) {
      navigate("/login-coach")
      console.log(response)
    })
    .catch(function (err) {
      console.log(err)
    })

  }
    
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    
    const errors = {};


    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    else if (!/^[a-zA-Z]+$/.test(firstName.trim())) {
      errors.firstName = 'First name should only contain letters';
    }
    else if (firstName.length < 3) {
      errors.firstName = 'First name is Short';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    else if (!/^[a-zA-Z]+$/.test(lastName.trim())) {
      errors.lastName = 'First name should only contain letters';
    }
    else if (lastName.length < 3) {
      errors.lastName = 'Last name is Short';
    }
    else if (lastName === firstName) {
      errors.lastName = 'FirstName and LastName Should not be Same';
    }


    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!phone.trim()) {
      errors.phone = 'Phone number is required';
    }else if (phone.length > 10) {
      errors.phone = 'Phone number cannot exceed 10 characters';
    }
     else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Invalid phone number format';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (!/[A-Z]/.test(password)) {
      errors.password = 'Password must contain at least one uppercase letter';
    } else if (!/[0-9]/.test(password)) {
      errors.password = 'Password must contain at least one number';
    } else if (!/[!@#$%^&*()\-_=+{};:,<.>]/.test(password)) {
      errors.password = 'Password must contain at least one symbol (!@#$%^&*()-_=+{};:,<.>)';
    }
    
    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    if (Object.keys(errors).length === 0) {
      callCoach()
         
        console.log('Form submitted!');
      }

      setErrors(errors);
      
    }


    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setErrors({});
    };


  return (
    <div className='deshboard-container'>
      <Header />
        <div><h1 className='h1-coach'>PLEASE SIGNUP AS COACH</h1></div>
      <form className='form-athe' onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">FirstName :</label>
      <input  className="form-control" placeholder="FirstName"
         type="text"
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}
      />
       {errors.firstName && <span className="error">{errors.firstName}</span>}
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">LastName :</label>
      <input  className="form-control" placeholder="LastName" 
       type="text"
       value={lastName}
       onChange={(e) => setLastName(e.target.value)}
      />
       {errors.lastName && <span className="error">{errors.lastName}</span>}
    </div>
  </div>


  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email :</label>
      <input className="form-control"  placeholder="Email"
       type="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />
       {errors.email && <span className="error">{errors.email}</span>}
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Phone No. :</label>
      <input className="form-control" placeholder="Phone No"
       type="number"
       value={phone}
       onChange={(e) => setPhone(e.target.value)}
      />
      {errors.phone && <span className="error">{errors.phone}</span>}
    </div>
  </div>


  <div className="form-row">


  <div className="form-group col-md-6">
  <label htmlFor="inputEmail4">Password :</label>
  <div className="input-group">
    <input
      className="form-control"
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
    />
    <div className="input-group-append">
      {showPassword ? (
        <span className="input-group-text" onClick={togglePasswordVisibility}>
          <FaEyeSlash />
        </span>
      ) : (
        <span className="input-group-text" onClick={togglePasswordVisibility}>
          <FaEye />
        </span>
      )}
    </div>
  </div>
  {errors.password && <span className="error">{errors.password}</span>}
</div>

<div className="form-group col-md-6">
  <label htmlFor="inputEmail4">Confirm Password :</label>
  <div className="input-group">
    <input
      className="form-control"
      type={showConfirmPassword ? 'text' : 'password'}
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      placeholder="Confirm your password"
    />
    <div className="input-group-append">
      {showConfirmPassword ? (
        <span className="input-group-text" onClick={toggleConfirmPasswordVisibility}>
          <FaEyeSlash />
        </span>
      ) : (
        <span className="input-group-text" onClick={toggleConfirmPasswordVisibility}>
          <FaEye />
        </span>
      )}
    </div>
  </div>
  {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
</div> 

        </div>


  <button type="submit"  className="desboard-button" >Sign Up</button>
  <button type="reset" className="desboard-btn-reset" onClick={handleReset}>Reset</button>
</form>
<Footer />
    </div>
  )
}

export default CoacheDashboard
