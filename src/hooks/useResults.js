import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("hello there");

    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "utah",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMsg("Something went wrong :(");
    }
  };

  //call searchApi when component is first rendered
  // searchApi("pasta"); BAD CODE

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMsg];
};
