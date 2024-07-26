import React from 'react'
import Header from './Header'
import Software_Wrapper from './Software_Wrapper'
import Gaming_Wrapper from './Gaming_Wrapper'
import Our_Coaches_Wrapper from './Our_Coaches_Wrapper'
import Footer from './Footer'
import Banner_Wrapper from './Banner_Wrapper'
import Coach_Athelete_Wrapper from './Coach_Athelete_Wrapper'
import InnerHeader from './InnerHeader'
import EnterOtp from '../../routes/EnterOtpAthlete'
import New from '../../routes/New'

const Main = () => {
  return (
    <div>
      <Header />
      <Banner_Wrapper />
      <Coach_Athelete_Wrapper />
      <Software_Wrapper />
      <Our_Coaches_Wrapper /> 
      <New />
       <Footer />
    </div>
  )
}

export default Main
