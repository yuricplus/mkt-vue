export const PRODUCTS_QUERY = ({ term, after }) => {
  return {
    query: `
      query searchProducts(
        $term: String!,
        $first: Int!,
        $after: String,
      ) {
        search(products: {
          term: $term
        }) {
          products(first: $first, after: $after) {
            total
            edges {
              cursor
              node {
                id
                path
                photo {
                  image_public_id
                }
                title {
                  name
                }
                brand {
                  displayable_name
                }
                price {
                  original
                  current
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      term,
      first: 15,
      after
    }
  };
};
