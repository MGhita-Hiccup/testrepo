import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Navbar({ userData, setUserData  }) {
  let navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    setUserData(null);
    navigate('/Login');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">OSN+</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-info"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="Home">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="about">ABOUT</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link active" to="Tv">Tv</Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link active" to="Movies">Movies</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link active" to="People">PEOPLE</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="contact">CONTACT</Link>
                </li>
              </ul>
              
            )
            :''}
            <form className="d-flex w-50" role="search">
               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex me-2">
                <a className="nav-link text-white" href="#"><i className='fab fa-facebook'></i></a>
                <a className="nav-link text-white" href="#"><i className='fab fa-instagram'></i></a>
                <a className="nav-link text-white" href="#"><i className='fab fa-whatsapp'></i></a>
                <a className="nav-link text-white" href="#"><i className='fab fa-twitter'></i></a>
                <a className="nav-link text-white" href="#"><i className='fab fa-spotify'></i></a>
              </li>

              {userData ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link text-white" style={{ cursor: 'pointer' }} onClick={logOut}>LOG OUT</span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link text-danger">WELCOME {userData.first_name}</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="Login">LOG IN</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Register">REGISTER</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
