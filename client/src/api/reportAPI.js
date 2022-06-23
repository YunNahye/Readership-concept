import apiClient from './apiClient';

export const createReport = async( content ) => {
  try {
    const body = { content };
    const data = await apiClient.post('/report', body);
    return data;
  }
  catch(e) {
    console.log(e);
  }
};