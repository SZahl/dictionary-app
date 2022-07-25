import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
    return (
        <div className="Meaning">
        <h3 className="Part-of-speech">{props.meaning.partOfSpeech}</h3>    
        {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                   <p>
                    <section>
                      <strong>{definition.definition}</strong>
                      <br />
                       <em>{definition.example}</em> 
                       <Synonyms synonyms={definition.synonyms} />  
                       </section>       
                    </p>
                </div>
           );    
        })}
          </div>
    );
}