import React from 'react'
import { Link } from 'react-router-dom';


const Cards = ({results, setLikes, setDislikes, page}) => {

    let message;
    let vote = (e, id, action) => {
       
        e.preventDefault()
        switch(action) {
            case 'like':
              setLikes((state) => ([...state, id]) );
              setDislikes((state) => (state.filter((i)=> {return i !== id})));
              break;
            case 'dislike':
              setDislikes((state) => ([...state, id]));
              setLikes((state) => (state.filter((i)=> {return i !== id})));
              break;
            default:
              return;
          }
       
    }

    if(results) {
      message = results.map((line) => {
        let {
            id,
            name,
            image
        } = line
        return(
            
            <Link to={`${page}${id}`} key={id} style={{textDecoration: 'none', color: '#000'}} className='col-6'>
                <div className='row border bg-light p-1 m-1 align-items-center justify-content-between'>
                    <div className='card-image col-2'>
                        <img src={image} alt='' className='img-fluid' />
                    </div>
                    <div className='card-content col-6 fs-5'>
                        <strong>{name}</strong>
                    </div>
                    <div className='card-votes col-4'>
                       <button onClick={(e) => vote(e, `${id}`, 'like')} type="button" className="btn btn-light btn-outline-secondary btn-sm m-1">Like</button>
                       <button onClick={(e) => vote(e, `${id}`, 'dislike')}type="button" className="btn btn-light btn-outline-secondary btn-sm m-1">Dislike</button>
                    </div>
                </div>
                
            </Link>
        )
      })
    } else {
      message = "Nothing is found here";
    }
    return (
        <>
            {message}
        </>
    )
}

export default Cards
