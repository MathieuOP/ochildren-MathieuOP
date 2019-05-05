import axios from 'axios';
import { 
  DATA_HOME_PAGE
} from './reducer';
// import {} from './reducer';

const ajaxMiddleware = store => next => (action) => {
  switch (action.type) {
    case DATA_HOME_PAGE:

      axios.get(`http://localhost/Ochildren-Back/public/api/worlds`, {
      })
        .then((response) => {
          console.log(response);

          store.dispatch(next({
            ...action,
            data: response.data,
          }));
        })
        .catch((error) => {
          // console.log(error);
          
        });
      break;
    default:
      return next(action);
  }
}

export default ajaxMiddleware;
