// import config from 'config';
import authHeader from 'src/_helpers/auth-header';
import handleResponseService from './handleresponse.service';


function getAll() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/event/comments`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(comments => JSON.parse(comments),
      (error) => {
        console.log(process.env.API_URL);
      });
}

function createComment() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/comments/create`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(comments => JSON.parse(comments),
      (error) => {
        console.log(process.env.API_URL);
      });
}

function editComment() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/comments/edit`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(comments => JSON.parse(comments),
      (error) => {
        console.log(process.env.API_URL);
      });
}

function deleteComment() {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/comments/delete`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(comments => JSON.parse(comments),
      (error) => {
        console.log(process.env.API_URL);
      });
}

const commentService = {
  getAll,
  createComment,
  editComment,
  deleteComment,
};

export default commentService;
