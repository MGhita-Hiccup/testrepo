import React from 'react';
import people from '../../people.jpg.jpg'
import avatar from '../../avatar.jpg.jpg'
import joker from '../../joker.jpg.jpg'
import background_people from '../../background_people.jpg'

export default function People() {
  return (
    <>
      <div className='bacImg py-4'>
        <h4 className='lead'>Expand Your Mind</h4>
      </div>
      
        <div className="row gy-2 mb-3">
          <div className="col-md-4">
            <img 
              src={people} 
              className="shadow-lg w-100" 
              alt="Campaign" 
            />
          </div>
          <div className="col-md-7 offset-md-1 d-flex align-items-center">
            <div className="mt-md-0 mt-4">
              <h5 className="fw-bolder text-muted">OSN+ Movie</h5>
              <p className="lead text-main">Expand your network</p>
              <p>Find contact info for agents, see who's attached to in-development titles, and view mutual connections who can help you land your next opportunity.</p>
            </div>
          </div>
        </div>

        <div className="row gy-2 mb-3">
          <div className="col-md-4">
            <img 
              src={avatar} 
              className="shadow-lg w-100" 
              alt="Campaign" 
            />
          </div>
          <div className="col-md-7 offset-md-1 d-flex align-items-center">
            <div className="mt-md-0 mt-4">
              <h5 className="fw-bolder text-muted">OSN+ Movie</h5>
              <p className="lead text-main">Showcase yourself</p>
              <p>Add images and demo reels to your IMDb page to bring it to life. Show decision-makers who you are and what you're proud of with premium page management features.</p>
            </div>
          </div>
        </div>

        <div className="row gy-2 mb-3">
          <div className="col-md-4">
            <img 
              src={joker} 
              className="shadow-lg w-100" 
              alt="Campaign" 
            />
          </div>
          <div className="col-md-7 offset-md-1 d-flex align-items-center">
            <div className="mt-md-0 mt-4">
              <h5 className="fw-bolder text-muted">OSN+ Movie</h5>
              <p className="lead text-main">Access exclusive insights</p>
              <p>Track in-development projects and new attachments to stay in the know and discover your next opportunity.</p>
            </div>
          </div>
        </div>
      
    </>
  );
}