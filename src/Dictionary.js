import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos.js";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState("");
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
        }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }    

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey =
          "563492ad6f91700001000001b4bf19fc32f8400b87a9ce2411537ee3";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
   
        }

    return (
        <div className="dictionary">  
            <form onSubmit={search}>
                <input type="search" placeholder="Search for a word.." onChange={handleKeywordChange} autoFocus={true} />
            </form>
            <Results results={results}/>
            <Photos photos={photos} />
</div>
);
    }