import { fetchAxios } from "../../lib/axios";

export async function addToCart(product) {
  const data = await fetchAxios(
    `
    mutation ($input: AddToCartInput!) {
        addToCart(input: $input) {
          cartItem {
            key
            product {
              id
              databaseId
              name
              description
              type
              onSale
              slug
              averageRating
              reviewCount
              image {
                id
                sourceUrl
                altText
              }
              galleryImages {
                nodes {
                  id
                  sourceUrl
                  altText
                }
              }
            }
            variation {
              id
              databaseId
              name
              description
              type
              onSale
              price
              regularPrice
              salePrice
              image {
                id
                sourceUrl
                altText
              }
              attributes {
                nodes {
                  id
                  attributeId
                  name
                  value
                }
              }
            }
            quantity
            total
            subtotal
            subtotalTax
          }
        }
      }
    `,
    { variables: { input: product } }
  );

  return data?.addToCart;
}
