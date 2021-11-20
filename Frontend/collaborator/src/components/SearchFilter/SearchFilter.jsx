import React from 'react'
import  { useState, useEffect, Fragment } from 'react';
import states from './States';
const data = "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters"
console.log(data)
export default function SearchFilter() {
    console.log('render');
  const [search, setSearch] = useState('');
  const [filteredStates, setFilteredStates] = useState(states);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = states.filter(state => {
        return state.name.toLowerCase().includes(search.toLowerCase());
      });

      setFilteredStates(filter);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

    return (
        <>
          <Fragment>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {filteredStates &&
          filteredStates.map(state => {
            return <li key={state.abbreviation}>{state.name}</li>;
          })}
      </ul>
    </Fragment>  
        </>
    )
}
