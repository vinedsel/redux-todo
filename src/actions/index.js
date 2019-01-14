export const addTodo = () => (
    {
        type: 'ADD_TODO'
    }
)

export const todoTextChanged = (text) => (
    {
        type: 'TODO_TEXT_CHANGED',
        text
    }
)
