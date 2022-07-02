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

exports.getReportListBySection = async( section ) => {
  try {
    if (section === 'null') {
      console.log('null조회');
      const data = await reportModel.findAll({
        where: {
          sectionId: null
        }
      });
      return data;
    }
    const data = await reportModel.findAll({
      where: {
        sectionId: section
      }
    });
    return data;
  }
  catch(e) {
    return e;
  }
};