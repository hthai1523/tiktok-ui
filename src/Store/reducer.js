import { SET_TODO_INPUT } from './constants'

const initState = {
    todos: [],
    todoInput: '',
}

function reducer(state, action) {
    switch(action.type) {
        case 'set': {
            return {
                ...state,
                todoInput: action.payload
            }
        }

        case 'add': {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }

        case 'delete': {
            const newState = [...state.todos] 
            newState.splice(action.payload, 1)

            return {
                ...state,
                todos: newState
            }
        }

        default: {
            return new Error(`Invalid action ${action.type}`)
        }
    }
}

export {initState}
export default reducer