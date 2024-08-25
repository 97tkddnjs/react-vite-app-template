import { fromJS } from 'immutable'

const initialState = fromJS({

    data : {
        title : '23',
    
        content : '',

    
        user: null

    }
   
  
  });

  /**
   * 
   * @param {*} state 
   * @param {*} action 
   * @returns 
   * 
   * 만들어져야 하는 함수
   * 
   * 1. add Item
   * 2. 조회하기
   * 3. 하나만 조회
   */
   
  
  const questionReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'QUESTION_FORM_REQUEST':
        console.log('reducer  에는 in' ,  state.get('data'))
        return state.get('data');
    
  
      default:
  
        return state;
  
    }
  
  };
  
   
  
  export default questionReducer;