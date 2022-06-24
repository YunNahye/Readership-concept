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

export const getSectionList = async() => {
  try {
    const { data } = await apiClient.get('/section');
    return data;
  }
  catch(e) {
    console.log(e);
  }
}