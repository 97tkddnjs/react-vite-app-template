export const createQuestion = (question) => ({
    type: 'CREATE_QUESTION_REQUEST',
    payload: question
  });
  
  export const setData = (path ,data) => ({
    type: 'SET_DATA',
    
    payload : { path, data}  
  })

  export const resetCreateData = ()=>({
    type: 'RESET_CREATE_DATA'
  })
  
  export const getQuestionList = () => ({
  
    type: 'GET_QUESTION_LIST_REQUEST'
  
  });