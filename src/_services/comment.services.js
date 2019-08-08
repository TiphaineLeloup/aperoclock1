// import config from 'config';
import authHeader from 'src/_helpers/auth-header';
import handleResponseService from './handleresponse.service';


function getAll() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/comments`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(comments => JSON.parse(comments),
      (error) => {
        console.log(process.env.API_URL);
      });
}

const commentService = {
  getAll,
};

export default commentService;
