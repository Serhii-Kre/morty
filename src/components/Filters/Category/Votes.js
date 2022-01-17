import React from 'react'
import FilterBOX from '../FilterBOX'

const Votes = ({setPageNumber, dislikes, likes, setCharacters}) => {
    let votes = ["Like", "Dislike"]
    return (
        <>
          
        <li className="list-group-item">
            By Votes
            {votes.map((item, i)=> 
            (<FilterBOX dislikes={dislikes} likes={likes} action={setCharacters} setPageNumber={setPageNumber} key={i} name="vote" index={i} item={item}/>) 
            )}
            
        </li>
        
      </>
    )
}

export default Votes
