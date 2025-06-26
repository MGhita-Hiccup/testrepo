import axios from 'axios';
import React , { useState , useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import profile1 from '../../profile1.jpg'
import profile2 from '../../profile2.jpg'
import profile3 from '../../profile3.jpg'


export default function MovieDetails() {
    const [itemDetails, setitemDetails] = useState({})
   let params = useParams();
    // console.log(params.id);
    // console.log(params.media_type);
    async function getItemDetails() {
        let {data} = await axios.get(`https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=f1aca93e54807386df3f6972a5c33b50`)
        setitemDetails(data)
    }
    useEffect(() => {
    getItemDetails();
    }, [])
    
  return (
    
    <div className='row'>
        <div className='col-md-3 py-4'>
             { itemDetails.profile_path? <img className='w-100 h-100' src= {'https://image.tmdb.org/t/p/w500' + itemDetails.profile_path} />: ''}
                { itemDetails.poster_path? <img className='w-100 h-100' src= {'https://image.tmdb.org/t/p/w500' + itemDetails.poster_path} />:''}
                {!itemDetails.poster_path && !itemDetails.profile_path? <img className='w-100 hight-img' src={profile3}/> :''}
        </div>
        <div className='col-md-9'>
            <h2 className='fw-bolder'>{itemDetails.title} {itemDetails.name}</h2>
            <h4 className='lead'>{itemDetails.overview}</h4>

        </div>

    </div>
  )
}
