import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
import Header from '../pages/home/Header';
import Footer from '../pages/home/Footer';


const AthleteDasboard = () => {

   const navigate = useNavigate();

//   ********For Password Eye *********
    const [passwordEye, setPasswordEye] = useState('');
    const [confirmPasswordEye, setConfirmPasswordEye] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [weightError, setWeightError] = useState('');
    const [heightError, setHeightError] = useState('');


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [membershipType, setMembershipType] = useState('');
  const [membershipDate, setMembershipDate] = useState('');


  const [errors, setErrors] = useState({});

function callAthelete(){
  axios.post('http://192.168.1.79:5000/api/prime/athletesign', {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    password: password,
    height: height,
    weight: weight,
    membershipType: membershipType,
    membershipDate: membershipDate,
  })
  .then(function (response) {
    navigate("/login-athlete")
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
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
          errors.firstName = 'First name is to Short';
        }

        if (!lastName.trim()) {
          errors.lastName = 'Last name is required';
        }
        else if (!/^[a-zA-Z]+$/.test(lastName.trim())) {
          errors.lastName = 'Last name should only contain letters';
        }
        else if (lastName.length < 3) {
          errors.lastName = 'Last name is Short';
        }
        else if (lastName === firstName) {
          errors.lastName = 'FirstName and Last Name Should not be Same';
        }

        if (!email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Invalid email format';
        }
        if (!phone.trim()) {
          errors.phone = 'Phone number is required';
        } else if (phone.length > 10) {
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
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
          errors.password = 'Password must contain at least one symbol';
        }
        if (!confirmPassword.trim()) {
          errors.confirmPassword = 'Confirm password is required';
        } else if (confirmPassword !== password) {
          errors.confirmPassword = 'Passwords do not match';
        }
        if(!membershipType){
            errors.membershipType = 'Please Select Membership Type'
        }
        if(!membershipDate){
            errors.membershipDate = 'Please Select Membership Date'
        }
       
    
        if (Object.keys(errors).length === 0) {
          callAthelete()
          console.log('Form submitted!');
        }

        setErrors(errors);

        if (!weight) {
            setWeightError('Please enter weight');
          } else if (!/^\d{1,3}$/.test(weight)) {
            setWeightError('Weight should be at most 3 digits');
          } else if (parseInt(weight, 10) <= 2.5) {
            setWeightError('Weight should be greater than 2.5');
          }
          else if (parseInt(weight, 10) > 150) {
            setWeightError('Weight should be not greater than 150');
          }
           else {
            setWeightError('');
          }
    
        if (!height) {
            setHeightError('Please enter height');
          } else if (!/^(\d+(\.\d+)?)$/.test(height)) {
            setHeightError('Please enter a valid number');
          } else if (parseFloat(height) <= 2) {
            setHeightError('Height should be greater than 2');
          } else if (parseFloat(height) > 7) {
            setHeightError('Height should not be greater than 7 feet');
          } else {
            setHeightError('');
          }
    
        if (!weightError && !heightError) {
         
          console.log('Form submitted!');
        }
      };
    
      const handleReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        // setPasswordEye('');
        // setConfirmPasswordEye('');
        setMembershipType('');
        setMembershipDate('')
        setWeight('');
        setHeight('');
        setWeightError('');
        setHeightError('')
        setErrors({});
    };


  return (


<div className='deshboard-container'>
<Header />
    <div><h1 className='h1-ath'>PLEASE SIGN-UP AS ATHELETE</h1></div>
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

  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Height(Feet) :</label>
      <input  className="form-control"  placeholder="Height"
      type="number"
      min={0}
      max={7}
      value={height}
      onChange={(e) => setHeight(e.target.value)}
      />
              {heightError && <span className="error">{heightError}</span>}

    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Weight(KG) :</label>
      <input className="form-control"  placeholder="Weight"
           type="number"
           min={0}
           max={150}
           value={weight}
           onChange={(e) => setWeight(e.target.value)}
      />
       {weightError && <span className="error">{weightError}</span>}
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Membership Type :</label>
      <select className="form-control" value={membershipType} onChange={(e) => setMembershipType(e.target.value)}>
        <option value=''>Select Membership type</option>
        <option value='Free Trial'>Free Trial</option>
        <option value='Standard Membership'>Standard Membership</option>
        <option value='Prime Membership'>Prime Membership</option>
        </select>
        {errors.membershipType && <span className="error">{errors.membershipType}</span>}
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Membership Date :</label>
      <input type="date" className="form-control"
      // min={new Date()}
      value={membershipDate} onChange={(e) => setMembershipDate(e.target.value)}
      />
       {errors.membershipDate && <span className="error">{errors.membershipDate}</span>}
    </div>
  </div>

  <button type="submit" className="desboard-button" >Sign Up</button>
  <button type='reset' className="desboard-btn-reset" onClick={handleReset} >Reset</button>

</form>
<Footer />
</div>

  )
}

export default AthleteDasboard
