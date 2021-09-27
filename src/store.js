import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdotereducer, {initializedAnecdotes} from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteService from './services/anecdotes'

const reducer = combineReducers({
    anecdotes: anecdotereducer,
    notifications: notificationReducer,
    filter: filterReducer
  })

const store = createStore(
  reducer,
  composeWithDevTools()
)

anecdoteService.getAll().then(anecdotes =>
  anecdotes.forEach(anecdote => {
    store.dispatch({type: 'NEW_ANEC', data: anecdote})
  })
)

export default store