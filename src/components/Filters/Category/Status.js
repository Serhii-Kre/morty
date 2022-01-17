import React from 'react'
import FilterBOX from '../FilterBOX'

const Status = ({setStatus,setPageNumber}) => {
    let status = ["Alive", "Dead", "Unknown"]
    return (
        <>
          
          <li className="list-group-item">
              By Status
              {status.map((item, i)=> 
              (<FilterBOX action={setStatus} setPageNumber={setPageNumber} key={i} name="status" index={i} item={item}/>) 
              )}
              
          </li>
          
        </>
    )
}

export default Status
