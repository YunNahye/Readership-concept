const models = require('../models');
const reportModel = models.report;

exports.createReport = async( content ) => {
  try {
    const newReport = {
      content
    }
    const data = await reportModel.create(newReport);
    return data;
  }
  catch(e) {
    return e;
  }
};