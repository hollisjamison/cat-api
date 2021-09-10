import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBreeds = () => {
  const [searchedCats, setSearchedCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCats();
  }, []);

  const fetchCats = async () => {
    const config = {
      headers: {
        "x-api-key": "",
      },
    };
    let fetch = await axios.get(
      `https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`,
      config
    );

    setSearchedCats(fetch.data);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Searched Cats</h1>
      <input type="text" onChange={handleSearchChange} />
      <button onClick={fetchCats}>Search Cats</button>

      {searchedCats.map((cat) => {
        return (
          <div>
            <h4>{cat.name}</h4>
            <p>{cat.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchBreeds;
