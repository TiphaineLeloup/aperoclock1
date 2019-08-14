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
    .then(events => JSON.parse(events),
      (error) => {
        console.log(process.env.API_URL);
      });
}

function editEvent() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/events/edit`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(events => JSON.parse(events),
      (error) => {
        console.log(process.env.API_URL);
      });
}

function createEvent(eventname, description) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventname, description }),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/events/create`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then((events) => {
      return JSON.parse(events);
    }, 
      (error) => {
        console.log(process.env.API_URL);
      });
}

function deleteEvent() {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/events/delete`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(events => JSON.parse(events),
      (error) => {
        console.log(process.env.API_URL);
      });
}

function infoEvent() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
  };
  const { handleResponse } = handleResponseService;
  return fetch(`${process.env.API_URL}/user/events/infos`, requestOptions)
    // eslint-disable-next-line no-use-before-define
    .then(handleResponse)
    .then(events => JSON.parse(events),
      (error) => {
        console.log(process.env.API_URL);
      });
}

const eventService = {
  getAll,
  editEvent,
  createEvent,
  deleteEvent,
  infoEvent,
};

export default eventService;
