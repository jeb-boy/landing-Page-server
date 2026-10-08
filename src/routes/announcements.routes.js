const createResourceRouter = require("./resource.routes");
const service = require("../services/announcements.service");

module.exports = createResourceRouter(service, [
  "title",
  "content",
  "date",
  "status"
]);