import React, { useEffect, useState } from "react";
import axios from "axios";

const Cats = () => {
  const [randomCat, setRandomCat] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const config = {
        headers: {
          "x-api-key": "",
        },
      };
      let fetch = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        config
      );

      setRandomCat(fetch.data[0]);
    };

    fetchCats();
  }, []);

  return (
    <div>
      <h1>Random Cat</h1>
      <img src={randomCat.url} />
    </div>
  );
};

export default Cats;
