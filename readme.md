# Todo App Backend

This is the **backend for the Todo App**, providing authentication and todo collection management.  

It exposes REST APIs that can be consumed by the frontend deployed at [https://todo.gittogether.co.in](https://todo.gittogether.co.in).  

The backend API is available in production at: [https://api.gittogether.co.in](https://api.gittogether.co.in)  

Interactive API documentation is available via **Swagger** at:

- Local: [http://localhost:4000/api-docs](http://localhost:4000/api-docs)  
- Production: [https://api.gittogether.co.in/api-docs](https://api.gittogether.co.in/api-docs)

---

## 🛠 Tech Stack

- **Node.js** - Server runtime  
- **Express.js** - Web framework  
- **MongoDB** - Database  
- **Mongoose** - MongoDB ODM  
- **JWT Authentication** - User authentication  
- **Cookie-parser** - Cookie handling  
- **CORS** - Cross-origin requests  
- **PM2** - Process management in production  
- **Nginx** - Reverse proxy in production  
- **Swagger** - API documentation  

---

## 📦 Local Installation

### 1. Clone the repository
```bash
git clone <your-backend-repo-url>
cd <repo-folder>
npm install

Create a .env file in the root directory with the following:

PORT=4000
NODE_ENV=dev
DB_URI=<you-mongo-string>task-todo
JWT_SECRET=soor4ya
JWT_EXPIRES_IN=5d
SERVER_URL=gittogether.co.in

For development (with auto-restart using nodemon):

npm run dev

For production:

npm start

The server will start on:

http://localhost:4000
