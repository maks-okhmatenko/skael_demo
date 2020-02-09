import request from './http';

export const getProjectsList = () =>
  request({
    url: '/projects',
    method: 'GET',
  });

export const getProjectInfo = projectId =>
  request({

  });
