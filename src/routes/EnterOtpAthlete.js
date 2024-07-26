import React, { useState } from 'react';
import Header from '../pages/home/Header';
import Footer from '../pages/home/Footer';

const EnterOtp = () => {
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  const handleInputChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset previous error message
    setOtpError('');

    // Validate OTP (in this case, checking if it's not empty)
    if (!otp.trim()) {
      setOtpError('Please enter OTP');
      return;
    }

    // Further validations can be added as needed

    // If all validations pass, you can proceed with form submission
    console.log('OTP entered:', otp);
    // Add your logic here for handling the OTP submission

    // Example: For now, just console log the OTP
    alert('OTP submitted successfully');
  };

  return (
    <div className="login-page-wrapper">
      <Header />
      <section className="login_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <form className="login_form" onSubmit={handleSubmit}>
                <div className="heading text-center"> Please Enter Code </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control ${otpError && 'is-invalid'}`}
                    placeholder="Please Enter OTP"
                    value={otp}
                    onChange={handleInputChange}
                  />
                  {otpError && <div className="invalid-feedback">{otpError}</div>}
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EnterOtp;
