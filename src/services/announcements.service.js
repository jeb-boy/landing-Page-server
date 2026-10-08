const data = require("../data/announcements.data");
const createResourceService = require("./resource.service");

module.exports = createResourceService(data, "Announcement", "ANN");