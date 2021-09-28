import React from 'react'
import {createAnec} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch} from 'react-redux'
import anecdoteService from '../services/anecdotes'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const getId = () => (100000 * Math.random()).toFixed(0)
    const addAnec = async (event)=> {
        event.preventDefault()
        const content = event.target.anecdote.value
        const newId = getId()
        event.target.anecdote.value = ''
        dispatch(createAnec(content, newId))
        dispatch(setNotification(`new anecdote '${content}' added`, 10))
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