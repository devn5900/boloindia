import { queryType } from "./types";

export const config = {
    headers: {
      'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc1VzZXIiOnRydWUsImlzQWRtaW4iOmZhbHNlLCJfaWQiOiI2NDZlNThhMDg4MWJkMGM2MGFlNTdhY2EiLCJ1c2VyTmFtZSI6ImF5dXNoIiwidXNlckltZyI6Imh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RxY2xhMGtiay9pbWFnZS91cGxvYWQvdjE2ODYxNTM4NjUvdXNlcnMvSU1HXzIwMjMwMTMxXzE5MzUzODJmZGNiMzk4LWYzMDctNDQzZC05ZjY3LTgxMDVjMzBjZWIwMC5qcGciLCJpYXQiOjE2OTEyMTQzNzYsImV4cCI6MTY5MTMwMDc3Nn0.q1etuCAWtXcZCExvB92RchJHE9RP4N8hx7i2rEinZt4'}`,
      'Content-Type': 'application/json'
    }
  };


  export const rebuildQuery=(name:string,query:queryType)=>{
  
    if(name=='q'){
      delete query.q;
    }

    return query;
  }