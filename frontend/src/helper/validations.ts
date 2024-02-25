
export const isValidEmail=(email:string)=> {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
    return emailPattern.test(email);
  }

 export const validatePassword=(password:string)=> {
    if (password.length < 6 || password.length > 15) {
        return false;
      }
    
      if (!/[a-z]/.test(password)) {
        return false;
      }
    
      if (!/[A-Z]/.test(password)) {
        return false;
      }
    
      if (!/[@$!%*?&#]/.test(password)) {
        return false;
      }
    
      if (!/\d/.test(password)) {
        return false;
      }
    
      return true;
  }