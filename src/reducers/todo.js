const initialState = {
  items: [
    {
      id: 1,
      todo: 'clean bathroom'
    }
  ],
  addTodoText: "",
  selectedTodo: null,
  editTodoText: ""
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const existingIds = state.items.map(todo => todo.id);
      const largestExistingId = Math.max(...existingIds);
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: largestExistingId + 1,
            todo: state.addTodoText
          }
        ],
        addTodoText: ""
      };
    case 'TODO_TEXT_CHANGED':
      return {
        ...state,
        addTodoText: action.text
      }

    default:
      return state;
  }
}

export default todoReducer;
