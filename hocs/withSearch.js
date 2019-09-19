import { findResultsState } from '../components/instantsearch'
import App from '../components/app'

/**
 *
 * A simple higher order component which wraps search pages intended to rendered server side. 
 * In this example, the route path is taken as an input and sent as a query to Algolia.
 * 
 * For specifics about the configurable parameters:
 * @see https://www.algolia.com/doc/api-reference/search-api-parameters/
 */

export const withSearchAgent = Page => {
	const WithSearchAgent = props => <Page {...props} />

	WithSearchAgent.getInitialProps = async (params) => {
		const path = params.asPath.substring(1)
		const searchState = {
			query: path,
		}
  		const resultsState = await findResultsState(App, { searchState })
		return {
			...(Page.getInitialProps ? await Page.getInitialProps(context): {}),
			resultsState,
			searchState
		}
	}

	return WithSearchAgent
}