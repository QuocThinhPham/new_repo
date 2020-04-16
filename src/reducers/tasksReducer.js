import * as taskConstants from './../constants/tasks';

const initialState = {
   tasks: [],
};

const tasksReducer = (state = initialState, action) => {
   switch (action.type) {
      case taskConstants.FETCH_TASKS:
         return {
            ...state,
            tasks: [],
         };
      case taskConstants.FETCH_TASKS_SUCCESS:
         const { data } = action.payload;
         return {
            ...state,
            tasks: data,
         };
      case taskConstants.FETCH_TASKS_FAILED:
         const { error } = action.payload;
         console.log(error);
         return {
            ...state,
         };
      default:
         return { ...state };
   }
};

export default tasksReducer;
