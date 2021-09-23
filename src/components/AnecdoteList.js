import React from 'react'
import {createAnec} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch} from 'react-redux'

const AnecdoteList = (anecdote) => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  //Vote
  const vote = (id) => {
      console.log('vote', id)
      dispatch({
        type: 'VOTE',
        id: id
      })
  }

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