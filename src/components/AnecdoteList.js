import React, { useState } from 'react'
import {createAnec} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch} from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

var timer

const AnecdoteList = (props) => {
  const [count, setCount] = useState(0)
  const [yoTime, setTime] = useState(null)

  //Vote
  const vote = (id, anecdote) => {
      //let yoTime = null
      const newObj = anecdote
      props.voteAnecdote(id,newObj)

      if (count === 0) {
        clearTimeout(timer)
        setCount(1)
        props.setNotification(`you voted '${anecdote.content}'`, 10, count)
        timer = setTimeout(()=> {
          setCount(0)
        },5000)
        
      } else{
        clearTimeout(timer)
        props.setNotification(`you voted '${anecdote.content}'`, 10, count)
        setCount(1)
        timer = setTimeout(()=> {
          setCount(0)
        },5000)
      }
      
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
