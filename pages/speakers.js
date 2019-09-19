import React, { useState } from 'react'
import App from '../components/app'
import PageLayout from '../components/PageLayout'
import { withSearchAgent } from '../hocs/withSearch'

const SpeakerPage = ({resultsState, searchState}) => {
  const [search, setSearchState] = useState(searchState)
  return (
    <PageLayout>
      <h1>Speakers</h1>
        <App 
          resultsState={resultsState}
          searchState={search} 
          onSearchStateChange={setSearchState} />
    </PageLayout>
  )
}

export default withSearchAgent(SpeakerPage)