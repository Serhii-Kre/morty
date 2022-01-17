import React from 'react'
import styles from './Search.module.scss'
import { useNavigate } from 'react-router-dom';


const Search = ({setSearch, setPageNumber, results}) => {
    const navigate = useNavigate();

  
    let searchChange = (e) => {
        setSearch(e.target.value)
        setPageNumber(1)
    }
    let searchSubmit = (e) => {
        e.preventDefault();
        navigate("/"+results[0].id);
    }
    return (
        <div className='container'>
            <div className='row justify-content-center text-center'>
                <div className='col-4'>
                    <form className={`${styles.btnform}` }>
                        <input onChange={searchChange} placeholder='Find me' type="text" className={styles.input}></input>
                        <button onClick={searchSubmit} className={`${styles.btnsearch} btn btn-light`}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
