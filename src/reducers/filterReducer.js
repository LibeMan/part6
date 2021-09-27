

const filterReducer = (state = '', action) => {
    switch (action.type){
        case 'FILTER':
            console.log(action.filter)
            return action.filter
            default: return state
    }
  }

export const filterChange = filter => {
    return {
        type: 'FILTER',
        filter,
    }
}


export default filterReducer