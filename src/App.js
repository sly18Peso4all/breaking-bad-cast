import React, {useState, useEffect} from "react";
import axios from "axios"
import './App.css';
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharcterGrid from "./components/characters/CharacterGrid";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  const fetchData = async() => {
     const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

     console.log(result.data)
     setCharacters(result.data)
     setIsLoading(false)
  }

  useEffect(()=> {
     fetchData()
  }, [query])

  const getQuery = (q) => {
      setQuery(q)
  }

  return (
   <div className="container">
     <Header />
     <Search getQuery={getQuery} />
     {/* <Search getQuery={(q) => setQuery(q)} /> */}
     <CharcterGrid characters={characters} isLoading={isLoading} />
   </div>
  );
}

export default App;
