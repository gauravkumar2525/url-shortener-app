* `url-shortener-backend` → Node.js + Express + MongoDB backend
* `url-shortener-frontend` → React frontend
* Root `.gitignore` and README

Here’s a **README.md** that matches your current structure:

---

# URL Shortener App (MERN Stack)

A simple and efficient **MERN stack** URL shortener application.
The backend handles URL shortening and redirection, while the frontend offers a clean UI for creating and managing short links.

---

## 🚀 Features

* Shorten long URLs into compact links
* Redirect users to the original link
* RESTful backend API
* React-based responsive frontend
* MongoDB for persistent storage

---

## 📂 Folder Structure

```
.
├── url-shortener-backend/       # Backend code
│   ├── server.js                # Backend entry point
│   ├── package.json
│   └── package-lock.json
│
├── url-shortener-frontend/      # Frontend code
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/gauravkumar2525/url-shortener-app.git
cd url-shortener-app
```

### 2️⃣ Install Backend Dependencies

```bash
cd url-shortener-backend
npm install
```

### 3️⃣ Install Frontend Dependencies

```bash
cd ../url-shortener-frontend
npm install
```

---

## ▶ Running the Application

### Start Backend

```bash
cd ../url-shortener-backend
node server.js
```

Backend runs at **[http://localhost:5000](http://localhost:5000)**

### Start Frontend

```bash
cd ../url-shortener-frontend
npm start
```

Frontend runs at **[http://localhost:3000](http://localhost:3000)**

---

## ⚙ Environment Variables

In `url-shortener-backend`, create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
BASE_URL=http://localhost:5000
```

---

## 📌 API Endpoints

* **POST** `/api/url/shorten` → Shortens a given URL
* **GET** `/:code` → Redirects to original URL

---

## 📜 License

Licensed under the MIT License.
