import apiClient from './apiClient';

export const createSection = async( name ) => {
  try {
    const body = { name };
    const data = await apiClient.post('/section', body);
    return data;
  }
  catch(e) {
    console.log(e);
  }
};