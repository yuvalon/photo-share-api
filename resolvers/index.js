const Query = require('./Query')
const Mutation = require('./Mutation')
const User = require('./User')
const Photo = require('./Photo')


const { GraphQLScalarType } = require('graphql')

const resolvers = {
  Query,
  Mutation,
  Photo,
  User,
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'A valid date time value.',
    parseValue: value => new Date(value),
    serialize: value => new Date(value).toISOString(),
    parseLiteral: ast => ast.value
  })
}

module.exports = resolvers