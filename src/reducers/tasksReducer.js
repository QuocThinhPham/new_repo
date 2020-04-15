const initialState = [
   {
      name: 'John',
      age: 12,
   },
   {
      name: 'David',
      age: 20,
   },
   {
      name: 'Adam',
      age: 18,
   },
];

const tasksReducer = (state = initialState, action) => {
   switch (action.type) {
      default:
         return [...state];
   }
};

export default tasksReducer;
