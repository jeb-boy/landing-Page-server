# College Management System - Landing Page API

Backend REST API for the Landing Page module of the College Management System.

## Technology

- Node.js
- Express.js
- JavaScript
- REST API
- OpenAPI 3.0.3
- Swagger UI
- Mock data only
- No database

## Project Structure

```text
server/
├── src/
│   ├── routes/
│   ├── services/
│   ├── data/
│   ├── middleware/
│   └── app.js
├── docs/
│   └── decisions/
│       └── 001-backend-framework.md
├── openapi.yaml
├── package.json
└── README.md
```

## Installation

Open a terminal inside the `server` folder:

```bash
npm install
```

## Run the API

Development mode:

```bash
npm run dev
```

Normal mode:

```bash
npm start
```

The API runs at:

```text
http://localhost:3000
```

Swagger UI:

```text
http://localhost:3000/docs
```

## Main Endpoints

```text
GET    /api/v1/health

GET    /api/v1/announcements
GET    /api/v1/announcements/{id}
POST   /api/v1/announcements
PUT    /api/v1/announcements/{id}
DELETE /api/v1/announcements/{id}

GET    /api/v1/news
GET    /api/v1/news/{id}
POST   /api/v1/news
PUT    /api/v1/news/{id}
DELETE /api/v1/news/{id}

GET    /api/v1/events
GET    /api/v1/events/{id}
POST   /api/v1/events
PUT    /api/v1/events/{id}
DELETE /api/v1/events/{id}

GET    /api/v1/college
GET    /api/v1/featured
```

## Testing

### Health

```bash
curl http://localhost:3000/api/v1/health
```

Expected:

```json
{
  "status": "ok"
}
```

### Announcements

```bash
curl http://localhost:3000/api/v1/announcements
curl http://localhost:3000/api/v1/announcements/ANN-001
```

### News

```bash
curl http://localhost:3000/api/v1/news
```

### Events

```bash
curl http://localhost:3000/api/v1/events
```

### College

```bash
curl http://localhost:3000/api/v1/college
```

### Featured

```bash
curl http://localhost:3000/api/v1/featured
```

## POST Example

```bash
curl -X POST http://localhost:3000/api/v1/announcements ^
  -H "Content-Type: application/json" ^
  -d "{"title":"New Announcement","content":"This is a test announcement.","date":"Oct 08, 2026","status":"Published"}"
```

For PowerShell, use one line if the multiline command is inconvenient.

## PUT Example

```bash
curl -X PUT http://localhost:3000/api/v1/announcements/ANN-001 ^
  -H "Content-Type: application/json" ^
  -d "{"title":"Updated Enrollment Notice","content":"Enrollment information has been updated.","date":"Oct 08, 2026","status":"Published"}"
```

## DELETE Example

```bash
curl -X DELETE http://localhost:3000/api/v1/announcements/ANN-002
```

A successful DELETE returns HTTP 204 with no response body.

## Error Testing

Unknown ID:

```text
GET /api/v1/announcements/ANN-999
```

This returns HTTP 404 using Problem Details JSON.

Missing required field:

```text
POST /api/v1/announcements
```

with an empty or missing `title` returns HTTP 400.

## OpenAPI Validation

Install the Redocly CLI:

```bash
npm install --save-dev @redocly/cli
```

Then run:

```bash
npx @redocly/cli lint openapi.yaml
```

The command should finish without lint errors.

## Swagger

Open:

```text
http://localhost:3000/docs
```

Select an endpoint, click **Try it out**, enter values if needed, and click **Execute**.

## Important Mock Data Note

The API does not use a database. POST, PUT, and DELETE only change the data while the Node.js server is running. Restarting the server restores the original mock data.

## Architecture

```text
Client
  ↓
Route
  ↓
Service
  ↓
Mock Data
```

Validation and error handling are handled by middleware.
