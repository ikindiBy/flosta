import { SHOW_ALL } from '../constants';

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
        console.log('======>',action);
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter