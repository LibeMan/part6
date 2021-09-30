
const simpleNotes = [
    ''
]

var timeout = null

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



export const setNotification = (message, time, count) => {

  const timeWindow = time *230


  return async dispatch => {
    //HIDE
    function hide () {
      dispatch({type:'HIDE'})
    }
    //SHOW
    function show () {
      dispatch({
        type:'NOTIFICATION',
        text:message
      })
    }

    if (count === 0){
      show()
      timeout = setTimeout(()=> {
        hide()
      }, timeWindow)
    } else {
      clearTimeout(timeout)
      show()
      timeout = setTimeout(() => {
        hide()
      }, timeWindow)
    }
  }
}





export default notificationReducer