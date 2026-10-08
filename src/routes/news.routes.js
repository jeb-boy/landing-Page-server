const createResourceRouter = require("./resource.routes");
const service = require("../services/news.service");

module.exports = createResourceRouter(service, [
  "title",
  "content",
  "date",
  "category"
]);