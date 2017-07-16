import React, { Component } from 'react';
import { compose } from 'redux';

import {
  graphql
} from 'react-relay';
import { queryRenderer, refetchContainer } from 'relay-compose';

const Feeds = (props) => (console.log(props),
  <div>
    Feeds:
    <div>
      {props.viewer && props.viewer.feed.edges.map(e => (
        <div key={e.node.id}>{e.node.id}</div>
      ))}
    </div>
    <button onClick={() => props.relay.refetch((vars) => ({ first: vars.first + 5 }), null)}> More + 5</button>
  </div>
);

export default compose(
  queryRenderer(graphql`
    query App_Query {
      viewer {
        ...App_feed
      }
    }
  `),
  refetchContainer(
    {
      viewer: graphql.experimental`
          fragment App_feed on Viewer
          @argumentDefinitions(
            first: {type: Int, defaultValue: 10}
          ) {
            feed(first: $first) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `,
      },
      graphql.experimental`
        query AppRefetch_Query($first: Int) {
          viewer {
            ...App_feed @arguments(first: $first)
          }
        }
      `
  )
)(Feeds);