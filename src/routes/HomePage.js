import React from 'react'
import Header from '../pages/home/Header'
import Banner_Wrapper from '../pages/home/Banner_Wrapper'
import Coach_Athelete_Wrapper from '../pages/home/Coach_Athelete_Wrapper'
import Software_Wrapper from '../pages/home/Software_Wrapper'
import Gaming_Wrapper from '../pages/home/Gaming_Wrapper'
import Our_Coaches_Wrapper from '../pages/home/Our_Coaches_Wrapper'
import Footer from '../pages/home/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner_Wrapper />
      <Coach_Athelete_Wrapper />
      <Software_Wrapper />
      {/* <Gaming_Wrapper />  */}
      <Our_Coaches_Wrapper /> 
       <Footer />
    </div>
  )
}

export default HomePage
