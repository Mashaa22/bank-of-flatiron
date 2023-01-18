import React from "react";
import { useState } from "react";
import JSONDATA from './db.json'

const data = Array.from(JSONDATA);



function Search() {
  const [searchTerm, setSearchTerm] = useState("")

  const onChange = function handleChange(e) {
    setSearchTerm(e.target.value)

    
      const data = data.filter((val) => {
        if (searchTerm === "") {
          return val
        } else if (val.description.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return <div className="search" data={JSONDATA} key={key} >
          {val.description}
        </div>
      })

    
  }
  return (
    <div data = {JSONDATA}>
      < input className="input" type="text" placeholder="Search" onChange={onChange} ></input>
      </div>

  )
}
export default Search;