const reportService = require('../service/reportService');

exports.createReport =  async(req, res) => {
  const { content } = req.body;
  const data = await reportService.createReport(content);
  return res.status(200).json(data);
};