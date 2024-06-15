import React, { useEffect, useState } from "react";
import  userData  from "./userData";

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] =  useState([])

  useEffect(() =>{
   console.log("resul",results)
   console.log(userData)
  },[])

  const handleSearch = (event) => {
  const value = event.target.value.toLowerCase()
  setQuery(value)

  //The query will run only when its length is greather than zero 
  //user can search using name or country
  if(value.length > 0){
    const filteredUsers = userData.filter(user => 
        user.name.first.toLowerCase().includes(value) ||
        user.name.last.toLowerCase().includes(value) || user.location.country.toLowerCase().includes(value)
    )
    setResults(filteredUsers)
  }else{
    //here the state is setting to intially 
    setResults([])
  }

  };

  return (
    <div className="container">
      <div className="sub-container">
        <div className="search-container">
          <h3 id="text">User List</h3>
          <p>Search by name/location</p>
          <input type="search" value={query} placeholder="Search" onChange={handleSearch} />
        </div>
        <div className="card-container">
            {/* it will load 10 data in the dropdown card */}
            {results.slice(0,10).map((item, index) => (
              <div className="desc" key={index}>
                <img src={item.picture} alt="" />
                <div className="details">
                <strong className="username">{item.name.first} {item.name.last}</strong>
                <div className="location">{item.location.city}, {item.location.country}</div>

                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
