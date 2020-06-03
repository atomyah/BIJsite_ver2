import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import { connectHighlight } from 'react-instantsearch-dom';

import algoliasearch from 'algoliasearch/lite';
import { 
  InstantSearch, 
  SearchBox, 
  Hits,
  Highlight,
  Configure,
  refresh,
  Snippet
 } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
   'TOM42XWGQM', '8cef13065b4e171f5a016c2d90581c10'
);

// 検索ワードにマッチした部分の前後100字をトリミング
const getSnippet = (body, match) => {
  const index = body.indexOf(match);
  return body.substring(index - 100, index + 100);
  };


// 検索結果を表示するコンポーネント
const Hit = ({ hit }) => 
(
    <p key={hit.id}>
      <Link to={hit.id}>
      {hit.title}
      </Link>
      <p>
      <Snippet tagName="strong" nonHighlightedTagName="span" hit={hit} attribute="body" />
      </p>
      <p>{`...${getSnippet(hit.body,  hit._highlightResult.body.matchedWords[0])}...`}
       </p>
    </p>
);


// InstantSearchのコンフィグとレンダリング
const Search = () => {
    const [hasInput, setHasInput] = useState(false);
    return (
        <>
        <InstantSearch 
            searchClient={searchClient}
            indexName="bij-site"
        >

            <Configure hitsPerPage={5}
            />

            <SearchBox 
                searchAsYouType={false}
                reset='クリア'
                onSubmit={(event) => {
                    event.preventDefault();
                    setHasInput(true);
                }}
                onReset={(event) => {
                    event.preventDefault();
                    setHasInput(false);
            }}
            />

            <div className={!hasInput ? 'input-empty' : 'input-value'}>
                {console.log('■hasinputは、',hasInput)}
                <Hits hitComponent={Hit} />
            </div>

        </InstantSearch>
        </>
    )
}

export default Search