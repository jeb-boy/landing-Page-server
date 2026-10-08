# ADR 001: Backend Framework

## Decision

Use Express.js with Node.js for the Landing Page REST API.

## Reasons

- Express.js is easy for students to learn.
- It is lightweight and does not add unnecessary complexity.
- It has good support for building REST APIs.
- It has a large community and many learning resources.
- Swagger UI and OpenAPI can be integrated easily.
- It is suitable for developing an API with mock data before adding a database.

## Alternatives Considered

### Node.js HTTP module

The built-in HTTP module can create a server, but Express.js makes routing and middleware much easier.

### Other Node.js frameworks

Other frameworks can also build REST APIs, but Express.js is simpler for this college project and matches the team's JavaScript requirement.

## Consequences

The project will have a simple and understandable structure. Express.js will handle HTTP requests, while the routes, services, and data layers will remain separated.
