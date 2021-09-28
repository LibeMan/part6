
const simpleNotes = [
    ''
]

const notificationReducer = (state = simpleNotes, action) => {
    switch (action.type) {
      case 'NOTIFICATION':
        const newNoti = (action.text)
        return newNoti
      
      case 'HIDE':
        const hideNoti = ""
        return hideNoti
    }
   
    return state
  }

export const setNotification = (message, time) => {

  const timeWindow = time *230

  return async dispatch => {
    dispatch({
      type: 'NOTIFICATION',
      text: message
    })
    setTimeout(() => {
      dispatch({type: 'HIDE'})
    }, timeWindow)
  }
}


export default notificationReducer