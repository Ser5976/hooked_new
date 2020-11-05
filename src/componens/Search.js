import React, { useState, useContext } from "react"
import { MoviesContext } from "../context/MoviesContext"


const Search = () => {
  
  const {search} = useContext(MoviesContext)
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = () => {
    search(searchValue);
    resetInputField();
  }

  return (
    <div style = {{width: '55%', margin: 'auto'}}>
    <div className = "container  pt-2 ">
      <div className = 'row'>
           <input className = "form-control col-md-10"
             value={searchValue}
             onChange={handleSearchInputChanges}
             type="text"
             placeholder = "название фильма на английском языке"
           />
           <input className = "form-control col-md-2"onClick={callSearchFunction} type="submit" value="SEARCH" />
       </div>
    </div>
    </div>
    );
}

export default Search;