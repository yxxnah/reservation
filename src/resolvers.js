const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => {
      return context.prisma.bookeds()        
    },                                   
  },
  Mutation: {                             
    post: (root, args, context) => {       
      return context.prisma.createBooked({  
        userId: args.userId,                    
        roomId: args.roomId,
        started: args.started,
        ended: args.ended  
      })
    },
  },  
}

export default resolvers