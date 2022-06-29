const models = require('../models');
const reportModel = models.report;

exports.createReport = async({ title, content, section }) => {
  try {
    const newReport = {
      title,
      content,
      section
    }
    const data = await reportModel.create(newReport);
    return data;
  }
  catch(e) {
    return e;
  }
};