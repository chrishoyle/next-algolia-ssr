import React from 'react'
import {
  Hits,
  Configure,
  Pagination,
} from 'react-instantsearch-dom'
import { InstantSearch } from './instantsearch'

const HitComponent = ({ hit }) => (
  <div className="hit">
    <div className="hit-picture">
      <img src={`${hit.image}`} />
    </div>
    <div className="hit-content">
      <h3>{hit.name}</h3>
    </div>
  </div>
)

export default (props) => (
  <InstantSearch
    appId="latency"
    apiKey="6be0576ff61c053d5f9a3225e2a90f76"
    indexName="instant_search"
    refresh={true}
  >
    <Configure {...props.searchState} />
    {console.log('searchState',props.searchState)}
    <content>
      <results>
        <Hits hitComponent={HitComponent} />
      </results>
    </content>
  </InstantSearch>    
)



