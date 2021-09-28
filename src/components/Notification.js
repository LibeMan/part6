
import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  const notification = () => {
    return props.notifications
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {notification()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

const ConnectedNotis = connect(mapStateToProps)(Notification)

export default ConnectedNotis
