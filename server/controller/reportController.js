const reportService = require('../service/reportService');

exports.createReport =  async(req, res) => {
  const { title, content, section } = req.body;
  const data = await reportService.createReport({ title, content, section });
  return res.status(200).json(data);
};

exports.getReportListBySection = async(req, res) => {
  const { section } = req.params;
  const data = await reportService.getReportListBySection(section);
  return res.status(200).json(data);
};

exports.updateReport = async(req, res) => {
  const { reportId, title, content } = req.body;
  const data = await reportService.updateReport(reportId, title, content);
  return res.status(200).json(data);
}