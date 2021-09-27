import React from 'react'
import {createAnec} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch} from 'react-redux'

const AnecdoteList = (anecdote) => {
  const dispatch = useDispatch()

  //Vote
  const vote = (id) => {
      console.log('vote', id)
      dispatch({
        type: 'VOTE',
        id: id
      })
  }

  //Filter anecdotes
  const anecdotes = useSelector(({filter, anecdotes}) => {
    if ( filter === '' ) {
        return anecdotes
      }
    return filter  !== '' 
        ? anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
        : anecdotes
  })

  //Sort
  const sort=(anecdotes) => {
    anecdotes.sort(function (a, b) {
      return b.votes - a.votes
    })
  }

  return (
    <div>
      {sort(anecdotes)}
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}  
    </div>
  )
}

export default AnecdoteList