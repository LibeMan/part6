import anecdoteService from '../services/anecdotes'

/*
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

//const initialState = anecdotes.map(anecdotes) */

const anecdotereducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANEC':
      return [...state, action.data]
    case 'INIT_ANEC':
      return action.data
    case 'VOTE':
    const id = action.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1 
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote 
      )
  }
  return state
}

export const createAnec = (content, id) => {
  return async dispatch => {
    const newAnec = await anecdoteService.createNew(content, id)
    dispatch({
      type: 'NEW_ANEC',
      data: newAnec,
    })
  }
}

export const initializedAnecdotes = () => {
  return async dispatch => {
    const anecs = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANEC',
      data: anecs,
    })
  }
}

export const voteAnecdote = (id, anecdote) => {
  return async dispatch => {
    const updatedAnec = await anecdoteService.update(id, anecdote)
    dispatch({
      type: 'VOTE',
      id: id,
      data: updatedAnec
    })
  }
}

export default anecdotereducer