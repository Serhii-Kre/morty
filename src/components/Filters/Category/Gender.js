import React from 'react'
import FilterBOX from '../FilterBOX'

const Gender = ({setGender,setPageNumber}) => {
    let genders = ["Male", "Female", "Unknown"]
    return (
        <>
          
        <li className="list-group-item">
            By Gender
            {genders.map((item, i)=> 
            (<FilterBOX action={setGender} setPageNumber={setPageNumber} key={i} name="gender" index={i} item={item}/>) 
            )}
            
        </li>
        
      </>
    )
}

export default Gender
