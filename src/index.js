import { GraphQLServer } from "graphql-yoga"
const { prisma } = require('./generated/prisma-client')
import resolvers from "./resolvers"

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: resolvers,
  context: { prisma }
})

server.start(() => console.log(`Server Running!`))
