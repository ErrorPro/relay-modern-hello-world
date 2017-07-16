const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime');

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  return fetch('https://7j7j9vjnj.lp.gql.zone/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, // Add authentication and other headers here
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then(async (response) => {
    const res = await response.json();
    console.log(res)

    return res
  });
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  network,
  store,
});
