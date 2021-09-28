import React from 'react'
import {createAnec} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch} from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

  //Vote
  const vote = (id, anecdote) => {
      const newObj = anecdote
      props.voteAnecdote(id,newObj)
      props.setNotification(`you voted '${anecdote.content}'`, 10)
  }

  //Sort
  const sort=() => {
    props.anecdotes.sort(function (a, b) {
      return b.votes - a.votes
    })
  }

  return (
    <div>
      {sort(props.anecdotes)}
      {props.anecdotes.map(anecdote =>
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


//Filter anecdotes
const mapStateToProps = (state) => {
  if ( state.filter === '' ) {
      return {anecdotes: state.anecdotes}
  }
  return {
      anecdotes: state.filter  !== '' 
          ? state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1)
          : state.anecdotes
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)

export default ConnectedAnecdotes
