// import config from 'config';
import authHeader from 'src/_helpers/auth-header';
import handleResponseService from './handleresponse.service';


function getAll() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/alerts`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then((alerts) => {
      return JSON.parse(alerts);
    },
    (error) => {
      console.log(process.env.API_URL);
    });
}

const alertService = {
  getAll,
};

export default alertService;
