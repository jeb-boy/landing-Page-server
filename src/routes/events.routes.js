const createResourceRouter = require("./resource.routes");
const service = require("../services/events.service");

module.exports = createResourceRouter(service, [
  "title",
  "date",
  "time",
  "location",
  "description"
]);