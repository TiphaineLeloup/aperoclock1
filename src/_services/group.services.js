// import config from 'config';
import authHeader from 'src/_helpers/auth-header';
import handleResponseService from './handleresponse.service';


function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/events`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(groups => JSON.parse(groups),
      (error) => {
        console.log(process.env.API_URL);
      });
}

const groupService = {
  getAll,
};

export default groupService;
