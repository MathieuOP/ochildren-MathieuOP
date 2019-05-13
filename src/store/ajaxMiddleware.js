import axios from 'axios';
import { DATA_HOME_PAGE, CATEGORIES_QUIZZS, QUIZZS_BY_ID } from './reducer';

const ajaxMiddleware = store => next => action => {
  switch (action.type) {
    case DATA_HOME_PAGE: // Requete qui récupère les données nécessaire pour la page home
      return axios
        .get('http://92.243.9.67/plateforme-educative-api/public/api/worlds')
        .then(response => {
          next({
            ...action,
            data: response.data
          });
        });

    case CATEGORIES_QUIZZS: // Requete qui récupère les catégories pour les quizzs
      return axios
        .get(
          'http://92.243.9.67/plateforme-educative-api/public/api/categories'
        )
        .then(response => {
          next({
            ...action,
            data: response.data
          });
        });

    case QUIZZS_BY_ID:
      return axios
        .get(
          `http://92.243.9.67/plateforme-educative-api/public/api/categories/${
            action.id
          }/quizzs/`
        )
        .then(response => {
          next({
            ...action,
            data: response.data
          });
        });

    default:
      return next(action);
  }
};

export default ajaxMiddleware;
