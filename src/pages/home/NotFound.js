import React from 'react'
import Header from './Header'
import Footer from './Footer'

const NotFound = () => {
  return (
    <div className='page-notfount-container'>
      <Header />
        <h1 className='pagenot'>
      404
      <br />
       Page Not Found
        </h1>
        <Footer />
    </div>
  )
}

export default NotFound
