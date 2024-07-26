import React from 'react';
import { CCard, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { NavLink, useNavigate } from 'react-router-dom';

const Card = ({ title, text, buttonText }) => {


  const navigate = useNavigate();

  const handleClick = () => {
    const dataToSend = { name: 'John', age: 30 };
    
    navigate('/cart-items', { state: { data: dataToSend } });
  };
  

  return (
    <div className='col-4' >
      <CCard style={{ width: '20rem', backgroundColor:"gray",  height: "215px" }}>
        <CCardBody>
          <CCardTitle className='tn'>{title}</CCardTitle>
          <CCardText className='ctext'>{text}</CCardText>
          {/* <NavLink to="cart-items"> */}
          <CButton color="primary" onClick={handleClick} >{buttonText} </CButton>
          {/* </NavLink> */}
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Card;




