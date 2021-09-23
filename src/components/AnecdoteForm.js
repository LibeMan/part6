import React from 'react'
import {createAnec} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch} from 'react-redux'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnec = (event)=> {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnec(content))
      }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm