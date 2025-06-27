import React from 'react'
import profile1 from '../../profile1.jpg'
import profile2 from '../../profile2.jpg'
import profile3 from '../../profile3.jpg'
import { Link } from 'react-router-dom';
export default function MediaItem({movie}) {
  return (
    <>
    
    <div  className="col-md-3 gy-4">
      <Link to={'/MovieDetails/' + movie.id + '/' + movie.media_type}>
        <div className='item'>
            <div className="movie gy-4 position-relative">
                { movie.profile_path? <img className='w-100 hight-img' src= {'https://image.tmdb.org/t/p/w500' + movie.profile_path} />: ''}
                { movie.poster_path? <img className='w-100 hight-img' src= {'https://image.tmdb.org/t/p/w500' + movie.poster_path} />:''}
                {!movie.poster_path && !movie.profile_path? <img className='w-100 hight-img' src={profile3}/> :''}
                
                <h6 className='fw-bolder'>{movie.title} {movie.name}</h6>
                <div className="vote p-2 text-center position-absolute top-0 end-0">{movie.vote_average?.toFixed(1)}</div>
                    
            </div>
       </div>
     </Link>         
    </div>
    
    
     
    </>
  );
}
