import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import CardDetails from './components/Cards/CardDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <Router>
      <header className="App-header">
        <h1 className="text-center my-3">My <span className="text-info">Morty</span></h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<CardDetails />}></Route>
      </Routes>
    </Router>
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1)
  let [search, setSearch] = useState("")
  let [fetchedData, setFetchedData] = useState([])
  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let savedLikes = JSON.parse(localStorage.getItem('likes'))
  let [likes, setLikes] = useState(savedLikes || [])
  let savedDislikes = JSON.parse(localStorage.getItem('dislikes'))
  let [dislikes, setDislikes] = useState(savedDislikes || [])
  let [characters, setCharacters] = useState([])
  let {info, results} = fetchedData

  
  let api = `https://rickandmortyapi.com/api/character/${characters}?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}`;  
  
  useEffect(() => {
    
    (async function(){
     let data = await fetch(api).then((res)=>res.json())       
     setFetchedData(data)     
    })()

  }, [api])

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes))
  }, [likes])
  useEffect(() => {
    localStorage.setItem('dislikes', JSON.stringify(dislikes))
  }, [dislikes])

  if(characters.length === 1 ) {
    results = [fetchedData];
  }
  if(characters.length > 1 && Array.isArray(fetchedData)) {
   results = [...fetchedData];
  }
  
  
  return (
    <div className="App">
      

      <nav>
        <Search results={results} setSearch={setSearch} setPageNumber={setPageNumber}/>
      </nav>
     
      <section className="my-4">
        <div className="container"> 
          <div className="row">
            <div className="col-2">
              <Filters
                likes={likes}
                dislikes={dislikes}
                setStatus={setStatus}
                setGender={setGender}
                setCharacters={setCharacters}
                voted={!!characters.length}
                setPageNumber={setPageNumber}/>
            </div>
            <div className="col-9">
              <div className="row">
               <Cards page="/" results={results} setLikes={setLikes} setDislikes={setDislikes}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      </footer>

    </div>
  );
}

export default App;
