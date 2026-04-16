# 👤 User CRUD REST API

A simple REST API built with **Node.js**, **Express**, and **Mongoose** that performs full Create, Read, Update, and Delete operations on a User resource backed by MongoDB.

---

## 🚀 Features

- Full CRUD + PATCH support for a User resource
- Input validation via Mongoose schema
- Meaningful HTTP status codes and error messages
- Clean separation of concerns — routes, controllers, and models
- Environment variable support with `dotenv`

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Web framework |
| Mongoose | MongoDB object modeling |
| MongoDB | Database |
| dotenv | Environment variable management |
| Nodemon | Auto-restart during development |

---

## 📁 Project Structure

```
user-api/
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   └── userController.js   # Route logic
├── models/
│   └── User.js             # Mongoose schema
├── routes/
│   └── userRoutes.js       # API endpoints
├── .env                    # Environment variables (not committed)
├── .env.example            # Environment variable template
├── .gitignore
├── package.json
└── server.js               # App entry point
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally **or** a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) connection string

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/user-api.git
cd user-api
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root directory:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/userapi
```

**4. Start the development server**
```bash
npm run dev
```

You should see:
```
Server running on port 5000
MongoDB Connected: localhost
```

---

## 📡 API Endpoints

Base URL: `http://localhost:5000/api/users`

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/users` | Create a new user |
| `GET` | `/api/users` | Get all users |
| `GET` | `/api/users/:id` | Get a single user by ID |
| `PUT` | `/api/users/:id` | Replace a user (full update) |
| `PATCH` | `/api/users/:id` | Update specific fields only |
| `DELETE` | `/api/users/:id` | Delete a user |

---

## 📦 Request & Response Examples

### Create a User — `POST /api/users`

**Request Body:**
```json
{
  "name": "Ada Mensah",
  "email": "ada@email.com",
  "age": 25
}
```

**Response `201`:**
```json
{
  "success": true,
  "data": {
    "_id": "664abc123...",
    "name": "Ada Mensah",
    "email": "ada@email.com",
    "age": 25,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### Get All Users — `GET /api/users`

**Response `200`:**
```json
{
  "success": true,
  "count": 1,
  "data": [...]
}
```

---

### Update Specific Field — `PATCH /api/users/:id`

**Request Body:**
```json
{
  "age": 30
}
```

**Response `200`:**
```json
{
  "success": true,
  "data": {
    "_id": "664abc123...",
    "name": "Ada Mensah",
    "email": "ada@email.com",
    "age": 30
  }
}
```

---

### Delete a User — `DELETE /api/users/:id`

**Response `200`:**
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

---

## ✅ User Schema & Validation

| Field | Type | Required | Validation |
|---|---|---|---|
| `name` | String | ✅ Yes | Cannot be empty |
| `email` | String | ✅ Yes | Must be valid email format, unique |
| `age` | Number | ❌ No | Cannot be negative |

Validation errors return a `400 Bad Request` with a descriptive message.

---

## 📊 HTTP Status Codes Used

| Code | Meaning |
|---|---|
| `200` | Success — GET, PUT, PATCH, DELETE |
| `201` | Created — POST |
| `400` | Bad Request — validation error |
| `404` | Not Found — user ID doesn't exist |
| `500` | Internal Server Error |

---

## 🧪 Testing

Endpoints were tested using [Postman](https://www.postman.com/).

To run a quick validation test, send a `POST` request without the required `name` field — you should receive:
```json
{
  "success": false,
  "message": "User validation failed: name: Name is required"
}
```

---

## 📌 Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port the server runs on (default: 5000) |
| `MONGO_URI` | MongoDB connection string |

See `.env.example` for a template.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Prince Ephraim Quarshie

Built as a backend learning assignment covering REST API design, Express routing, Mongoose ODM, and API testing with Postman.
