import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient ({

    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rp8cms1egg01wb7wnoec6x/master',
    cache: new InMemoryCache()
})