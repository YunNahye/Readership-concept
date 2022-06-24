const models = require('../models');
const sectionModel = models.section;

exports.createSection = async( name ) => {
  try {
    const newSection = {
      name
    }
    const data = await sectionModel.create(newSection);
    return data;
  }
  catch(e) {
    return e;
  }
};