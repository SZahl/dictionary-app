import React from "react";

export default function Phonetics(props) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>{" "}
        {props.phonetic.text}
      </div>
    );
}