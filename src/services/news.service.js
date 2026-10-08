const data = require("../data/news.data");
const createResourceService = require("./resource.service");

module.exports = createResourceService(data, "News", "NEWS");