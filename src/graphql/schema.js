const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const queries = require('./queries')
const mutations = require('./mutations')

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'This type holds all my queries, thanks type bro',
    fields: queries
})

// Define mutation Type
const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    fields: mutations
})

// add mutation to exports
module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})
