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
    const { data } = await apiClient.get(`/report/list/${section}`);
    return data;
  }
  catch(e) {
    console.log(e);
  }
}

export const updateReport = async( reportId, content ) => {
  try {
    const body = { reportId, title: content.blocks[0].data.text, content };
    const data = await apiClient.post('/report/update', body);
    return data;
  }
  catch(e) {
    console.log(e);
  }
}