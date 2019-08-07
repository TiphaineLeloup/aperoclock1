import userService from './user.services';

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    const { logout } = userService;
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

const handleResponseService = {
  handleResponse,
};

export default handleResponseService;
