import React from 'react'
import {createAnec} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch} from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (anecdote) => {
  const dispatch = useDispatch()

  //Vote
  const vote = (id, anecdote) => {
      const newObj = anecdote
      dispatch(voteAnecdote(id,newObj))
      dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
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
            <button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
          </div>
        </div>
      )}  
    </div>
  )
}

export default AnecdoteList