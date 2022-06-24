const sectionService = require('../service/sectionService');

exports.createSection =  async(req, res) => {
  const { name } = req.body;
  const data = await sectionService.createSection(name);
  return res.status(200).json(data);
};