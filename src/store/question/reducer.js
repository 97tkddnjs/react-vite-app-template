import { fromJS } from 'immutable'

const initialState = fromJS({

    data : {
        title : '',
    
        content : '',

        writer: ''

    },

    datasources : [] 
    
  
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
      case 'SET_DATA':
        return state.setIn(action.payload.path, action.payload.data);
      case 'RESET_CREATE_DATA':
        console.log('reset  에는 in' ,  initialState.get('data'))
        return state.set('data', initialState.get('data'))
      case 'CREATE_QUESTION_REQUEST':
        console.log('create  에는 in' , action.payload.get('title') ,state.get('datasources') )
        return  state //state.set('datasources',  state.get('datasources').push(action.payload))
      case 'GET_QUESTION_LIST_REQUEST':
        console.log('get  에는 in' , action.payload)
        return state
      case 'GET_QUESTION_LIST_SUCCESS':
        console.log('GET_QUESTION_LIST_SUCCESS in reducer', action.payload);
        return state.set('datasources', action.payload);
      default:
        return state;
  
    }
  
  };
  
   
  
  export default questionReducer;