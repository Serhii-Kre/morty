import React from 'react'
import Gender from '../Filters/Category/Gender';
import Votes from './Category/Votes';
import Status from '../Filters/Category/Status';

const Filters = ({setStatus, setGender ,setPageNumber, dislikes, likes, setCharacters, voted}) => {
    let isVoted = voted
    let clearFilters = () => {
        setStatus("")
        setGender("")
        setPageNumber("")
        setCharacters("")
        voted = false
        window.location.reload(false)
    }
    return (
        
        <div className='container'>
            <div className='text-center fw-bold fs-4 mb-4'>Filters</div>
            <div className='text-center fs-6 mb-2'onClick={clearFilters}>
                <span style={{ cursor: "pointer" }} className='text-decoration-underline text-primary'>clear</span>
            </div>

            <ul className="list-group">
            <Votes dislikes={dislikes} likes={likes} setCharacters={setCharacters} setPageNumber={setPageNumber}/>
            { !isVoted && <>
                <Gender setGender={setGender} setPageNumber={setPageNumber} />               
                <Status setStatus={setStatus} setPageNumber={setPageNumber} /> 
            </>
            }
                
               
             </ul>

        </div>
    )
}

export default Filters
