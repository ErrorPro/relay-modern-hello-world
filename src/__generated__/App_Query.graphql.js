/**
 * @flow
 * @relayHash 709f7e75147c9a661a71c2ebd0166d0b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type App_QueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query App_Query {
  viewer {
    ...App_feed
  }
}

fragment App_feed on Viewer {
  feed(first: 10) {
    edges {
      node {
        id
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "App_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "args": null,
        "concreteType": "Viewer",
        "name": "__viewer_viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "App_feed",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "App_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "App_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              }
            ],
            "concreteType": "FeedConnection",
            "name": "feed",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "FeedEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Entry",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "feed{\"first\":10}"
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "args": null,
        "handle": "viewer",
        "name": "viewer",
        "key": "",
        "filters": null
      }
    ]
  },
  "text": "query App_Query {\n  viewer {\n    ...App_feed\n  }\n}\n\nfragment App_feed on Viewer {\n  feed(first: 10) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
