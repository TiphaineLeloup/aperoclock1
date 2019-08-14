// import config from 'config';
import authHeader from 'src/_helpers/auth-header';
import handleResponseService from './handleresponse.service';


function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/groups`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then((groups) => {
      return JSON.parse(groups);
    },
      (error) => {
        console.log(process.env.API_URL);
      });
}

function editGroup() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/groups/edit`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(events => JSON.parse(events),
      (error) => {
        console.log(process.env.API_URL);
      });
}

function createGroup() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/groups/create`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(events => JSON.parse(events),
      (error) => {
        console.log(process.env.API_URL);
      });
}

function deleteGroup() {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/groups/delete`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(events => JSON.parse(events),
      (error) => {
        console.log(process.env.API_URL);
      });
}

function getDetails(idGroup) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/group/infos/${idGroup}`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then((details) => {
      localStorage.setItem('details', JSON.stringify(details));
      return JSON.parse(details);
    },
      (error) => {
        console.log(process.env.API_URL);
      });
}

const groupService = {
  getAll,
  editGroup,
  createGroup,
  deleteGroup,
  getDetails,
};

export default groupService;
