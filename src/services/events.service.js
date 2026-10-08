const data = require("../data/events.data");
const createResourceService = require("./resource.service");

module.exports = createResourceService(data, "Event", "EVENT");