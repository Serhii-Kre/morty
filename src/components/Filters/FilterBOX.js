import React from 'react'

const FilterBOX = ({name, index, item, action,setPageNumber, likes, dislikes}) => {
    let filterRun = (e) => {
        if(e.target.name === 'vote') {
          if(item === 'Like') {
            action([...likes])
         
          }
          if(item === 'Dislike') {
            action((state) => ([...dislikes]))
          }
        } else {
           action(item)
        }
        setPageNumber(1)
        
    }
    return (
        <div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name={name} id={`${name}-${index}`} onClick={filterRun} />
                <label className="form-check-label" htmlFor={`${name}-${index}`}>
                    {item}
                </label>
            </div>
        </div>
    )
}

export default FilterBOX
