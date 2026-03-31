# Task Management API

A RESTful API for managing tasks built using Node.js, Express.js, and MongoDB. This API allows users to create, read, update, and delete tasks efficiently. It follows REST principles and uses MongoDB for data storage.

---

## 🚀 Features

- Create new tasks  
- Get all tasks  
- Get a single task by ID  
- Update task details  
- Delete tasks  
- MongoDB database integration  
- Environment variables using dotenv  
- Error handling and validation  
- RESTful API structure  

---

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Tools:** Postman, Git, GitHub  

---

## 📂 Project Structure

```
task-management-api/
│
├── models/
├── routes/
├── controllers/
├── config/
├── .env
├── server.js
├── package.json
└── README.md
```
---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/your-username/task-management-api.git


### 2. Navigate to project folder

cd task-management-api


### 3. Install dependencies

npm install


### 4. Create a .env file and add

PORT=5000
DB_URL=your_mongodb_connection_string


### 5. Run the server

npm start


Server will run on:

http://localhost:5000


---

## 📡 API Endpoints

| Method | Endpoint | Description |
|-------|---------|-------------|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get single task |
| POST | /api/tasks | Create new task |
| PATCH | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

---
## 🧪 Example Request (POST /api/tasks)

```json
{
  "title": "Complete project",
  "description": "Finish task management API",
  "status": "pending"
}
```


---

## 📌 Future Improvements

- User Authentication (JWT)
- Task filtering and search
- Pagination
- Role-based access
- Deployment

---

## 👨‍💻 Author

Pari Swami  
B.Tech Computer Science  
Full Stack Developer  

---

## 📜 License

This project is licensed under the MIT License.
