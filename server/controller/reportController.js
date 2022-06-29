const reportService = require('../service/reportService');

exports.createReport =  async(req, res) => {
  const { title, content, section } = req.body;
  const data = await reportService.createReport({ title, content, section });
  return res.status(200).json(data);
};