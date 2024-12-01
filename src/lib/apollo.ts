import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

export const client = new ApolloClient({
    uri: 'http://localhost:4000/api/graphql',
    cache: new InMemoryCache({
        typePolicies: {
            Publication: {
                merge: true,
            },
            Post: {
                merge: true,
            },
        },
    })
})
