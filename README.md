# Trackvio — Backend

REST API and real-time server for the Trackvio vehicle tracking platform.

## Tech Stack

- **Runtime:** Node.js + Express
- **Database:** MongoDB (Mongoose)
- **Real-time:** Socket.io
- **Auth:** JWT (HttpOnly cookies)
- **TCP Receiver:** Custom GPS data ingestion from hardware trackers
- **Email:** Nodemailer (Gmail SMTP)
- **Security:** Helmet, express-rate-limit, express-mongo-sanitize, xss-clean, hpp

## Features

- Vehicle tracking with real-time GPS position updates
- Geofence creation and breach detection
- Trip recording and history
- Alert rules and notifications
- Vehicle immobilization control
- User management with role-based access
- Statistics and analytics

## Project Structure

```
├── config/         # Database connection
├── controllers/    # Route handlers
├── jobs/           # Cron jobs (trip cleanup, inactive vehicles)
├── middleware/     # Auth, error handling, file upload
├── models/         # Mongoose schemas
├── routes/         # Express routers
├── services/       # Business logic (geofence, alerts, TCP receiver)
├── utils/          # Helpers (email, logger, socket, error classes)
└── server.js       # Entry point
```

## API Endpoints

| Prefix | Description |
|--------|-------------|
| `/api/v1/auth` | Authentication (login, logout, profile) |
| `/api/v1/vehicles` | Vehicle management |
| `/api/v1/geofences` | Geofence CRUD |
| `/api/v1/users` | User management |
| `/api/v1/trips` | Trip history |
| `/api/v1/alerts` | Alert feed |
| `/api/v1/alert-rules` | Alert rule configuration |
| `/api/v1/immobilizations` | Vehicle immobilization |
| `/api/v1/statistics` | Fleet analytics |

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account

### Installation

```bash
git clone https://github.com/Zakaria12e/vehicle-tracker-system-backend.git
cd vehicle-tracker-system-backend
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
NODE_ENV=development
PORT=5000

MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/

JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
JWT_COOKIE_EXPIRE=7

FRONTEND_URL=http://localhost:5173

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your@gmail.com
SMTP_PASSWORD=your_app_password
FROM_EMAIL=your@gmail.com
FROM_NAME=Trackvio
```

### Run

```bash
# Development
npm run dev

# Production
npm start
```

## Deployment

Deployed on [Railway](https://railway.app). Set all environment variables in the Railway Variables tab. The `FRONTEND_URL` must match your deployed frontend URL for CORS to work.
