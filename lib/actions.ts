import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV !== "production";

const client = new GraphQLClient('apiurl')

const makeGraphQLRequest = (query: string, variables = {}) => {
    try {
        //return client.request(query, variables)
    }
    catch (error) {
        throw error;
    }
}