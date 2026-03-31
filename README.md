# Task Management API

## 📖 Description
This is a RESTful Task Management API built using Node.js, Express.js, and MongoDB.
The API allows users to create, read, update, and delete tasks. It can be used as the backend
for a task management application.

---

## 🌐 Deployed API
You can use the live API here:

https://task-management-api-bmz2.onrender.com/api/tasks

---
## 🧪 Example API Requests

### Get All Tasks
GET https://task-management-api-bmz2.onrender.com/api/tasks

### Create Task
POST https://task-management-api-bmz2.onrender.com/api/tasks

### Update Task
PATCH https://task-management-api-bmz2.onrender.com/api/tasks/:id

### Delete Task
DELETE https://task-management-api-bmz2.onrender.com/api/tasks/:id

---
## 🚀 Features
- Create a task
- Get all tasks
- Get task by ID
- Update task
- Delete task
- MongoDB database integration
- REST API structure

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

```

task_management/
│
├── controller/
├── models/
├── routes/
│
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── server.js
```

---

## ⚙️ Installation (Run Locally)

### 1. Clone the repository

git clone https://github.com/Pariswami/task_management.git


### 2. Go to project folder

cd task_management


### 3. Install dependencies

npm install


### 4. Create a .env file and add
```
PORT=5000
DB_URL=your_mongodb_connection_string
```

### 5. Start the server

npm start


Server will run on:

http://localhost:5000


---

## ▶️ How to Use the API

Base URL:

http://localhost:5000/api/tasks


Or use deployed API:

https://task-management-api-bmz2.onrender.com/api/tasks


---

## 📡 API Endpoints

| Method | Endpoint | Description |
|-------|---------|-------------|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get task by ID |
| POST | /api/tasks | Create task |
| PATCH | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

---

## 🧪 Example Request (Create Task)

### POST /api/tasks
```json
{
  "title": "Learn Node.js",
  "description": "Build a REST API",
  "status": "pending"
}
```
## 📌 Future Improvements

The following features can be added in future versions of this project:

- Implement user authentication and authorization using JWT
- Add task filtering, sorting, and search functionality
- Implement pagination for large datasets
- Add due dates and task priority levels
- Deploy the API on a cloud platform

👨‍💻 Author
```
Pari Swami
B.Tech Computer Science
Full Stack Developer
```
