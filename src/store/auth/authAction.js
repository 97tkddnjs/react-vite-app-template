export const loginRequest = (username, password) => ({
    type: 'LOGIN_REQUEST',
    payload: { username, password }
  });
  export const logoutRequest = () => ({
    type: 'LOGOUT_REQUEST'
  });
  
   
  
  export const loginSuccess = (user) => ({
  
    type: 'LOGIN_SUCCESS',
  
    payload: user
  
  });
  
   
  
  export const logoutSuccess = () => ({
  
    type: 'LOGOUT_SUCCESS'
  
  });