import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState("");

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
        }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <div className="dictionary">  
            <form onSubmit={search}>
                <input type="search" placeholder="Search for a word.." onChange={handleKeywordChange} autoFocus={true} />
            </form>
            <Results results={results}/>
</div>
);
    }