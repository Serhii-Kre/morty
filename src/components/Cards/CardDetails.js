import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    
    let { id } = useParams()
    let [fetchedData, setFetchedData] = useState([])
    let api = `https://rickandmortyapi.com/api/character/${id}`;  
    let{
        image,
        name,
       species,
       gender,
       location,
       episode,
       status,
       created 
    } = fetchedData

    useEffect(() => {
    
        (async function(){
         let data = await fetch(api).then((res)=>res.json())       
         setFetchedData(data)     
        })()
    
      }, [api])


    
    return (
        <>
        <div className='container d-flex justify-content-center'>
            <div className='d-flex flex-column gap-4 text-center'>
                <h2>{name}</h2>
                <img src={image} alt='' className='' />
                <div className='content'>
                 <div className=''>
                     <span className='fw-bold'>gender: </span>
                     {gender}
                 </div>
                 <div className=''>
                     <span className='fw-bold'>species: </span>
                     {species}
                 </div>
                 <div className=''>
                     <span className='fw-bold'>location: </span>
                     {location?.name}
                 </div>
                 <div className=''>
                     <span className='fw-bold'>episode: </span>
                     {episode?.map(ep=>{
                         return (
                            <div key={ep}>{ep}</div>
                         )
                     })}
                 </div>
                 <div className=''>
                     <span className='fw-bold'>status: </span>
                     {status}
                 </div>
                 <div className=''>
                     <span className='fw-bold'>created: </span>
                     {created}
                 </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default CardDetails
