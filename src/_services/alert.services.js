// import config from 'config';
import authHeader from 'src/_helpers/auth-header';
import handleResponseService from './handleresponse.service';


function alertList() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/alerts/list`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(alerts => JSON.parse(alerts),
      (error) => {
        console.log(process.env.API_URL);
      });
}

function alertEdit() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/alerts/edit`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(alerts => JSON.parse(alerts),
      (error) => {
        console.log(process.env.API_URL);
      });
}

const alertService = {
  alertList,
  alertEdit,
};

export default alertService;
