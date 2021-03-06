module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateBooked {
  count: Int!
}

type AggregateRoom {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Booked {
  id: ID!
  createdAt: DateTime!
  userId: String!
  roomId: String!
  started: String!
  ended: String!
}

type BookedConnection {
  pageInfo: PageInfo!
  edges: [BookedEdge]!
  aggregate: AggregateBooked!
}

input BookedCreateInput {
  id: ID
  userId: String!
  roomId: String!
  started: String!
  ended: String!
}

type BookedEdge {
  node: Booked!
  cursor: String!
}

enum BookedOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  userId_ASC
  userId_DESC
  roomId_ASC
  roomId_DESC
  started_ASC
  started_DESC
  ended_ASC
  ended_DESC
}

type BookedPreviousValues {
  id: ID!
  createdAt: DateTime!
  userId: String!
  roomId: String!
  started: String!
  ended: String!
}

type BookedSubscriptionPayload {
  mutation: MutationType!
  node: Booked
  updatedFields: [String!]
  previousValues: BookedPreviousValues
}

input BookedSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookedWhereInput
  AND: [BookedSubscriptionWhereInput!]
  OR: [BookedSubscriptionWhereInput!]
  NOT: [BookedSubscriptionWhereInput!]
}

input BookedUpdateInput {
  userId: String
  roomId: String
  started: String
  ended: String
}

input BookedUpdateManyMutationInput {
  userId: String
  roomId: String
  started: String
  ended: String
}

input BookedWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  userId: String
  userId_not: String
  userId_in: [String!]
  userId_not_in: [String!]
  userId_lt: String
  userId_lte: String
  userId_gt: String
  userId_gte: String
  userId_contains: String
  userId_not_contains: String
  userId_starts_with: String
  userId_not_starts_with: String
  userId_ends_with: String
  userId_not_ends_with: String
  roomId: String
  roomId_not: String
  roomId_in: [String!]
  roomId_not_in: [String!]
  roomId_lt: String
  roomId_lte: String
  roomId_gt: String
  roomId_gte: String
  roomId_contains: String
  roomId_not_contains: String
  roomId_starts_with: String
  roomId_not_starts_with: String
  roomId_ends_with: String
  roomId_not_ends_with: String
  started: String
  started_not: String
  started_in: [String!]
  started_not_in: [String!]
  started_lt: String
  started_lte: String
  started_gt: String
  started_gte: String
  started_contains: String
  started_not_contains: String
  started_starts_with: String
  started_not_starts_with: String
  started_ends_with: String
  started_not_ends_with: String
  ended: String
  ended_not: String
  ended_in: [String!]
  ended_not_in: [String!]
  ended_lt: String
  ended_lte: String
  ended_gt: String
  ended_gte: String
  ended_contains: String
  ended_not_contains: String
  ended_starts_with: String
  ended_not_starts_with: String
  ended_ends_with: String
  ended_not_ends_with: String
  AND: [BookedWhereInput!]
  OR: [BookedWhereInput!]
  NOT: [BookedWhereInput!]
}

input BookedWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createBooked(data: BookedCreateInput!): Booked!
  updateBooked(data: BookedUpdateInput!, where: BookedWhereUniqueInput!): Booked
  updateManyBookeds(data: BookedUpdateManyMutationInput!, where: BookedWhereInput): BatchPayload!
  upsertBooked(where: BookedWhereUniqueInput!, create: BookedCreateInput!, update: BookedUpdateInput!): Booked!
  deleteBooked(where: BookedWhereUniqueInput!): Booked
  deleteManyBookeds(where: BookedWhereInput): BatchPayload!
  createRoom(data: RoomCreateInput!): Room!
  updateRoom(data: RoomUpdateInput!, where: RoomWhereUniqueInput!): Room
  updateManyRooms(data: RoomUpdateManyMutationInput!, where: RoomWhereInput): BatchPayload!
  upsertRoom(where: RoomWhereUniqueInput!, create: RoomCreateInput!, update: RoomUpdateInput!): Room!
  deleteRoom(where: RoomWhereUniqueInput!): Room
  deleteManyRooms(where: RoomWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

enum Occupancy {
  FOUR
  SIX
  EIGHT
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  booked(where: BookedWhereUniqueInput!): Booked
  bookeds(where: BookedWhereInput, orderBy: BookedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booked]!
  bookedsConnection(where: BookedWhereInput, orderBy: BookedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookedConnection!
  room(where: RoomWhereUniqueInput!): Room
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room]!
  roomsConnection(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoomConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Room {
  id: ID!
  createdAt: DateTime!
  name: String!
  size: Occupancy!
}

type RoomConnection {
  pageInfo: PageInfo!
  edges: [RoomEdge]!
  aggregate: AggregateRoom!
}

input RoomCreateInput {
  id: ID
  name: String!
  size: Occupancy!
}

type RoomEdge {
  node: Room!
  cursor: String!
}

enum RoomOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  size_ASC
  size_DESC
}

type RoomPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  size: Occupancy!
}

type RoomSubscriptionPayload {
  mutation: MutationType!
  node: Room
  updatedFields: [String!]
  previousValues: RoomPreviousValues
}

input RoomSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoomWhereInput
  AND: [RoomSubscriptionWhereInput!]
  OR: [RoomSubscriptionWhereInput!]
  NOT: [RoomSubscriptionWhereInput!]
}

input RoomUpdateInput {
  name: String
  size: Occupancy
}

input RoomUpdateManyMutationInput {
  name: String
  size: Occupancy
}

input RoomWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  size: Occupancy
  size_not: Occupancy
  size_in: [Occupancy!]
  size_not_in: [Occupancy!]
  AND: [RoomWhereInput!]
  OR: [RoomWhereInput!]
  NOT: [RoomWhereInput!]
}

input RoomWhereUniqueInput {
  id: ID
}

type Subscription {
  booked(where: BookedSubscriptionWhereInput): BookedSubscriptionPayload
  room(where: RoomSubscriptionWhereInput): RoomSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  name: String!
  team: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  team: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  team_ASC
  team_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  team: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  team: String
}

input UserUpdateManyMutationInput {
  name: String
  team: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  team: String
  team_not: String
  team_in: [String!]
  team_not_in: [String!]
  team_lt: String
  team_lte: String
  team_gt: String
  team_gte: String
  team_contains: String
  team_not_contains: String
  team_starts_with: String
  team_not_starts_with: String
  team_ends_with: String
  team_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    