import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import algoliasearch from 'algoliasearch/lite';
import { 
  InstantSearch, 
  SearchBox, 
  Hits,
  Highlight,
  Stats,
  Pagination,
  Snippet
 } from 'react-instantsearch-dom';
import './Search.css'

const searchClient = algoliasearch(
   'TOM42XWGQM', '8cef13065b4e171f5a016c2d90581c10'
);


const Hit = ({ hit }) => ( 
    <div className="card">
        <div className="card-contents">
            <Highlight attribute="title" hit={hit} className="card-title" />
            <Link to={hit.id} >
                <span className="link-to">記事本文へ</span>
            </Link>
            <Snippet tagName="mark" hit={hit} attribute="body" />
            {/*<div className="card-rating">Rating: {hit.rating}</div>*/}
            <div className="card-genre"> <span>{hit.category}</span></div>
        </div>
    </div>    
);

const Content = () => (
    <main>
        <div className="information">
            <Stats/>
        </div>
        <Hits hitComponent={Hit} />
        <div className="pagination"> <Pagination/> </div>
    </main>
);

// InstantSearchのコンフィグとレンダリング
const Search = () => {
    const [flag, setFlag] = React.useState(false)

    return (
        <>
        <InstantSearch 
            searchClient={searchClient}
            indexName="bij-site"
        >

        <header className="header">
            
            <SearchBox
                className="search-bar"
                translations={{ placeholder: 'サイト内検索' }}
                onSubmit={(event) => {
                    event.preventDefault();
                    setFlag(true);
                }}
                onReset={(event) => {
                    event.preventDefault();
                    setFlag(false);
                }}
                onKeyUp={(event) => {
                    event.preventDefault();
                    setFlag(false);
                }}
            />
        </header>

            <div className={!flag ? 'input-empty' : 'input-value'}>
                <Content/>
            </div>

        </InstantSearch>
        </>
    )
}

export default Search
