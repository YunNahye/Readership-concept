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
      order: [['sectionId', 'DESC']]
    });
    data = data.map((obj) => {return [obj['name'], obj['sectionId']]});
    return data;
  }
  catch(e) {
    return e;
  }
};

exports.deleteSection = async( name ) => {
  try {
    const data = await sectionModel.destroy({
      where: {
        name: name
      }
    })
    return data;
  }
  catch(e) {
    return e;
  }
};