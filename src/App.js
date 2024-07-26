import './style.css'
import './utils/css/header.css'
import './utils/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/home/Main';
import ForAthelets from './routes/ForAthelets';
import ForCoach from './routes/ForCoach';
import ForgetPassword from './routes/ForgetPasswordCoach';
import FreeTrial from './routes/FreeTrial';
import Pricing from './routes/Pricing';
import HomePage from './routes/HomePage';
import LoginSelection from './pages/home/LoginSelection';
import ContactUs from './pages/home/ContactUs';
import AthleteDasboard from './routes/AthleteDasboard';
import CoacheDashboard from './routes/CoacheDashboard'
import AthleteLogin from './routes/AthleteLogin';
import CoachLogin from './routes/CoachLogin';
import InnerHeader from './pages/home/InnerHeader';
import { CAlert, CCard, CCardImage, ReactImg, CCardBody } from '@coreui/react';
import CardItems from './pages/home/CardItems';
import NotFound from './pages/home/NotFound';
import PrivacyPolicy from './routes/PrivacyPolicy';
import EnterOtp from './routes/EnterOtpAthlete';
import ForgetPasswordAthlete from './routes/ForgetPasswordAthlete';
import ResetPasswordCoach from './routes/ResetPasswordCoach';
import ResPassCodeCoach from './routes/ResPassCodeCoach';


function App() {  

  return (
       
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="home-page" element={<HomePage />} />
          <Route path="for-athelets" element={<ForAthelets />} />
          <Route path="for-coaches" element={<ForCoach />} />
          <Route path="login" element={<LoginSelection />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="forget-password-athlete" element={<ForgetPasswordAthlete />} />
          <Route path="free-trials" element={<FreeTrial />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="athlete-dasboard" element={<AthleteDasboard />} />
          <Route path="coach-dasboard" element={<CoacheDashboard />} />
          <Route path="login-athlete" element={<AthleteLogin />} />
          <Route path="login-coach" element={<CoachLogin />} />
          <Route path="reset-password-coach" element={<ResetPasswordCoach />} />
          <Route path="reset-password-code-coach" element={<ResPassCodeCoach />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="enter-otp-athlete" element={<EnterOtp />} />
          <Route path="/inner-header" element={<InnerHeader  />} />
          <Route path="cart-items" element={<CardItems />}/> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
