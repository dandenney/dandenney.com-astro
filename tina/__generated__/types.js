export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const BlipPartsFragmentDoc = gql`
    fragment BlipParts on Blip {
  __typename
  title
  pubDate
  tags
  body
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  pubDate
  tags
  summary
  socialImageFilename
  cloudinaryThumb
  thumb
  thumbAlt
  body
}
    `;
export const ReviewPartsFragmentDoc = gql`
    fragment ReviewParts on Review {
  __typename
  title
  pubDate
  tags
  description
  address
  city
  state
  country
  coordinates
  infoUrl
  heroImageAlt
  heroImage
  heroImageAttribution
  heroImageUrl
  body
}
    `;
export const BlipDocument = gql`
    query blip($relativePath: String!) {
  blip(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BlipParts
  }
}
    ${BlipPartsFragmentDoc}`;
export const BlipConnectionDocument = gql`
    query blipConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BlipFilter) {
  blipConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BlipParts
      }
    }
  }
}
    ${BlipPartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const ReviewDocument = gql`
    query review($relativePath: String!) {
  review(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ReviewParts
  }
}
    ${ReviewPartsFragmentDoc}`;
export const ReviewConnectionDocument = gql`
    query reviewConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ReviewFilter) {
  reviewConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ReviewParts
      }
    }
  }
}
    ${ReviewPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    blip(variables, options) {
      return requester(BlipDocument, variables, options);
    },
    blipConnection(variables, options) {
      return requester(BlipConnectionDocument, variables, options);
    },
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    },
    review(variables, options) {
      return requester(ReviewDocument, variables, options);
    },
    reviewConnection(variables, options) {
      return requester(ReviewConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
