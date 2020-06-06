import React from 'react';
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';
import {Link} from 'gatsby'

const SearchBox = ({ currentRefinement, refine }) => (
    <>
    <style type="text/css">
    {`
    .searchbox input {
          background-color:#f5f5f5;
          border: 0;
          padding: 13px 24px;
          border-radius: 3px;
          width: 100%;
    }
    .ais-SearchBox-submit, .ais-SearchBox-reset {
        display: none;
    }
    `}
    </style>
    <div className="ais-SearchBox">
        <form noValidate action="" role="search" className="ais-SearchBox-form">
            <input 
            className="ais-SearchBox-input"
            type="search"
            value={currentRefinement} 
            onChange={(event) => refine(event.currentTarget.value)}
            />
        </form>
    </div>
    </>
);
export const CustomSearchBox = connectSearchBox(SearchBox);

// print out first and last characters around search term
const getSnippet = (body, match) => {
const index = body.indexOf(match);
return body.substring(index - 50, index + 50);
};

// only display Hits when user types in SearchBox
const Hits = ({ hit }) => (


    <p key={hit.id}>
      <Link to={hit.id}>
        {hit.title}
        <p>{`...${getSnippet(hit.body,  hit._highlightResult.body.matchedWords[0])}...`}
       </p>
     </Link>
    </p>


);
export const CustomHits = connectHits(Hits);