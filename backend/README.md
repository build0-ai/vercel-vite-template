# Backend API

A simple Deno backend API using Oak framework.

## Getting Started

1. Install Deno if you haven't already: https://deno.land/manual/getting_started/installation

2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

3. Run the development server:
   ```bash
   deno task dev
   ```

4. Or run in production mode:
   ```bash
   deno task start
   ```

The API will be available at `http://localhost:8000`

## Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user

## Project Structure

```
backend/
├── main.ts           # Application entry point
├── deno.json         # Deno configuration
├── routes/
│   ├── index.ts      # Main router
│   └── api.ts        # API routes
├── .env.example      # Environment variables template
└── README.md         # This file
```