import React, { useState } from 'react';
import Header from '../pages/home/Header';
import Footer from '../pages/home/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPasswordCoach = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPasswordError('');
    setConfirmPasswordError('');

    let isValid = true;

    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    if (isValid) {
      console.log('Form submitted:', { password, confirmPassword });
    }
  };

  return (
    <div className="login-page-wrapper">
      <Header />
      <section className="login_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <form onSubmit={handleSubmit} className="login_form">
                <div className="heading text-center">RESET PASSWORD-COACH</div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={`form-control ${passwordError && 'is-invalid'}`}
                      placeholder="New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      className={`form-control ${confirmPasswordError && 'is-invalid'}`}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" onClick={toggleConfirmPasswordVisibility}>
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  {confirmPasswordError && (
                    <div className="invalid-feedback">{confirmPasswordError}</div>
                  )}
                  </div>
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

export default ResetPasswordCoach;
