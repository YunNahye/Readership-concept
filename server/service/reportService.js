const models = require('../models');
const reportModel = models.report;

exports.createReport = async({ title, content, section }) => {
  try {
    const today = new Date();
    const newReport = {
      title,
      content,
      sectionId: section,
      date: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
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

exports.updateReport = async( reportId, title, content ) => {
  try {
    console.log(reportId);
    const today = new Date();
    const data = await reportModel.update({ title, content, date: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` },
      {
        where: {
          reportId
        }
      }  
    );
    return data;
  }
  catch(e) {
    return e;
  }
}