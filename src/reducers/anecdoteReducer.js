

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


export const createAnec = (data) => {
  return {
    type: 'NEW_ANEC',
    data,
  }
}

export const initializedAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANEC',
    data: anecdotes,
  }
}

export default anecdotereducer