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

exports.getSectionList = async() => {
  try {
    let data = await sectionModel.findAll({
      attributes: ['name'],
      order: [['sectionId', 'DESC']]
    });
    data = data.map((obj) => {return obj['name']});
    return data;
  }
  catch(e) {
    return e;
  }
};