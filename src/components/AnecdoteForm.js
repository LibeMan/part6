import React from 'react'
import {createAnec} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch} from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const getId = () => (100000 * Math.random()).toFixed(0)
    const addAnec = async (event)=> {
        event.preventDefault()
        const content = event.target.anecdote.value
        const newId = getId()
        event.target.anecdote.value = ''
        const newAnec = await anecdoteService.createNew(content, newId)
        dispatch(createAnec(newAnec))
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