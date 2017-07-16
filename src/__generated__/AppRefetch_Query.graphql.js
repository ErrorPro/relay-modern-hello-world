/**
 * @flow
 * @relayHash 5cfe4e489725a89bb1ed1abf81d0255c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppRefetch_QueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query AppRefetch_Query(
  $first: Int
) {
  viewer {
    ...App_feed_3ASum4
  }
}

fragment App_feed_3ASum4 on Viewer {
  feed(first: $first) {
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
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRefetch_Query",
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
            "args": [
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "first",
                "type": null
              }
            ]
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
  "name": "AppRefetch_Query",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AppRefetch_Query",
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
                "kind": "Variable",
                "name": "first",
                "variableName": "first",
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
            "storageKey": null
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
  "text": "query AppRefetch_Query(\n  $first: Int\n) {\n  viewer {\n    ...App_feed_3ASum4\n  }\n}\n\nfragment App_feed_3ASum4 on Viewer {\n  feed(first: $first) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
