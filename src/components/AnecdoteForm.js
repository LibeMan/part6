import React from 'react'
import {createAnec} from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const getId = () => (100000 * Math.random()).toFixed(0)
    const addAnec = async (event)=> {
        event.preventDefault()
        const content = event.target.anecdote.value
        const newId = getId()
        event.target.anecdote.value = ''
        props.createAnec(content, newId)
        props.setNotification(`new anecdote '${content}' added`, 10)
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

const mapDispatchToProps = dispatch => {
  return {
    createAnec: value => {
      dispatch(createAnec(value))
    },
    setNotification: value => {
      dispatch(setNotification(value,10))
      console.log(setNotification(value))
    }
  }
}


export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)