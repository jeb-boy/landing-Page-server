const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

const announcementsRoutes = require("./routes/announcements.routes");
const newsRoutes = require("./routes/news.routes");
const eventsRoutes = require("./routes/events.routes");
const collegeRoutes = require("./routes/college.routes");
const featuredRoutes = require("./routes/featured.routes");
const { notFoundHandler, errorHandler } = require("./middleware/error.middleware");

const app = express();
const PORT = process.env.PORT || 3000;

const openapiDocument = YAML.load(path.join(__dirname, "..", "openapi.yaml"));

app.use(express.json());

app.get("/api/v1/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/v1/announcements", announcementsRoutes);
app.use("/api/v1/news", newsRoutes);
app.use("/api/v1/events", eventsRoutes);
app.use("/api/v1/college", collegeRoutes);
app.use("/api/v1/featured", featuredRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiDocument));

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Landing Page API running at http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/docs`);
});