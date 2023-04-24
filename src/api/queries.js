import gql from 'graphql-tag'

const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
      name
      image
      status
      type
      gender
      origin {
        name
      }
      episode {
        episode
      }
      created
      }
    }
  }
`

const LOCATIONS_QUERY = gql`
  query Locations {
    locations {
      results {
        name
        type
        dimension
        residents {
          id
          name
        }
      }
    }
  }
`

export { CHARACTERS_QUERY, LOCATIONS_QUERY }
