import React from 'react'
import  Axios  from "axios"
import HomeStyle from './Home.module.css';
import { useEffect, useState } from "react"
import MediaItem from '../MediaItem/MediaItem';
export default function Home() {

     let [trendingMovies , setTrendingMovie] = useState([])
     let [trendingTv , setTrendingTv] = useState([])
     let [trendingPerson , setTrendingPerson] = useState([])
     async function getTrendsMovies(mediaType , func) {
      let {data} = await Axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
      console.log(data.results);
      func(data.results)      
     }
     useEffect(()=>{
      getTrendsMovies('movie' , setTrendingMovie);
      getTrendsMovies('tv' , setTrendingTv); 
      getTrendsMovies('person' , setTrendingPerson); 
     } , []);
    
        return (<>
          <h1 className='text-center' style={{color:'red' , backgroundColor:'gray'}}>Home Page</h1>
          <div className="row text-center gy-2">
            <div className='col-md-3'>
              <h3 className='h6'>Get Trending Movies</h3> <br/> <h3 className='lead'> Right Now</h3>
              <br/> <br/>
              <p className='lead'>Sign in to access your Watchlist Save shows and movies to keep track of what you want to watch.<br/> <br/>  Don't forget to log out. </p>
               <br/> <br/>
            </div>
            {trendingMovies.length > 0 ? trendingMovies.slice(0,15).map((movie , index)=>  <MediaItem key={index} movie={movie}/> ) : <i className='fas fa-spinner fa-spin fa-4x'></i>}
            
            
          </div>

          <div className="row text-center gy-2">
            <div className='col-md-3'>
              <h3 className='h6'>Get Trending TV</h3> <br/> <h3 className='lead'> Right Now</h3>
              <br/> <br/>
              <p className='lead'>Sign in to access your Watchlist Save shows and TV to keep track of what you want to watch.<br/> <br/>  Don't forget to log out. </p>
               <br/> <br/>
            </div>
            {trendingTv.length > 0 ? trendingTv.slice(0,15).map((movie , index)=>  <MediaItem key={index} movie={movie}/> ) : <i className='fas fa-spinner fa-spin fa-4x'></i>}
            
            
          </div>

          <div className="row text-center gy-2">
            <div className='col-md-3'>
              <h3 className='h6'>Get Trending Person</h3> <br/> <h3 className='lead'> Right Now</h3>
              <br/> <br/>
              <p className='lead'>Sign in to access your Watchlist Save Person to keep track of what you want to watch.<br/> <br/>  Don't forget to log out. </p>
               <br/> <br/>
            </div>
            {trendingPerson.length > 0 ? trendingPerson.slice(0,15).map((movie , index)=>  <MediaItem key={index} movie={movie}/> ) : <i className='fas fa-spinner fa-spin fa-4x'></i>}
            
            
          </div>

       
        </>)
    }
