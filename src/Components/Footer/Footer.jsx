import React from 'react'

export default function Footer() {
  return (
    <>
   <footer className="footer py-1 mt-1 text-center">
    <div className='one'>
      <p>&copy; 2025 OSN+ Movies. All rights reserved.</p>
    </div>
    <div className='item'>
      <a className="nav-link text-white" href="#"><i className='fab fa-facebook'></i></a>
      <a className="nav-link text-white" href="#"><i className='fab fa-instagram'></i></a>
      <a className="nav-link text-white" href="#"><i className='fab fa-whatsapp'></i></a>
      <a className="nav-link text-white" href="#"><i className='fab fa-twitter'></i></a>
      <a className="nav-link text-white" href="#"><i className='fab fa-spotify'></i></a>
    </div>
   </footer>
    </>
  )
}
