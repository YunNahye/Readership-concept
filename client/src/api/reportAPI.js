import apiClient from './apiClient';

export const createReport = async( content, section ) => {
  try {
    const body = { title: content.blocks[0].data.text, content, section };
    const data = await apiClient.post('/report', body);
    return data;
  }
  catch(e) {
    console.log(e);
  }
};

export const getReportListBySection = async( section ) => {
  try {
    const data = await apiClient.get(`/report/${section}`);
    return data;
  }
  catch(e) {
    console.log(e);
  }
}