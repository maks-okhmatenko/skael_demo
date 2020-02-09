import request from './http';

export const getProjectsList = () =>
  request({
    url: '/projects',
    method: 'GET',
  });

// Example of another request
// export const getProjectInfo = projectId => request({ });
