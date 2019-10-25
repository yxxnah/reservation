const resolvers = {
  Query: {
    // 이번주 예약 목록
    bookingList: (root, args, context) => {
      // 이번주 날짜 계산
      Date.prototype.getWeek = function(start)
      {
          start = start || 0;
          var today = new Date(this.setHours(0, 0, 0, 0));
          var day = today.getDay() - start;
          var date = today.getDate() - day;
       
          var StartDate = new Date(today.setDate(date + 1));
          var EndDate = new Date(today.setDate(date + 7));
          return [StartDate, EndDate];
      }
      var Dates = new Date().getWeek();

      return context.prisma.bookeds(
        {
          where: {
            started_gt: Dates[0].toLocaleDateString(),
            ended_lt: Dates[1].toLocaleDateString()
          }
        }
      )        
    },
    // 주어진 시간으로 예약 가능한(빈) 회의실 목록
    available: (root, args, context) => {
      return context.prisma.bookeds(
        {
          where: {
            started_not_in: args.started
          }
        }
      )        
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