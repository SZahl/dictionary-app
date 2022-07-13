import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
        }

    function search(event) {
        event.preventDefault();
        alert(`${keyword}`);
    }

    return (
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} autoFocus={true} />
            </form>
</div>
);
    }