# Spotify Clone (MERN Stack)

## 🎵 Overview
This is a full-stack Spotify clone built using the **MERN (MongoDB, Express.js, React, Node.js) stack**. It replicates key Spotify features, including user authentication, music playback, playlist management, and real-time updates.

## 🚀 Features
- **User Authentication** (Sign up, login, JWT-based authentication)
- **Music Streaming** (Play/Pause, Seek, Volume control)
- **Playlist Management** (Create, update, delete playlists)
- **Responsive Design** (Mobile-friendly UI)

## 🛠️ Tech Stack
- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shubhampanchal108/Spotify-Fullstack.git
cd spotify-fullstack
```

### 2️⃣ Install Dependencies
#### Install server dependencies
```bash
cd server
npm install
```
#### Install client dependencies
```bash
cd ../client
npm install
```
#### Install Admin dependencies
```bash
cd ../Admin
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the `server/` directory and add:
```
CLOUDINARY_NAME = "Your cloud name"
CLOUDINARY_API_KEY = "your api key"
CLOUDINARY_SECRET_KEY = "your secret" 
MONGODB_URI = ""
JWT_SECRET = ""
ADMIN = "admin"
PASSWORD = "your password for admin login"

```

### 4️⃣ Run the Application
#### Start the backend server
```bash
cd server
npm start
```
#### Start the frontend
```bash
cd ../client
npm start
```

The app will be running on `http://localhost:5173/`.

## 📌 Future Enhancements
- Implement a recommendation system
- Add real-time chat & social features
- Improve caching for faster performance

## 🏆 Contributions
Feel free to fork this repo, submit issues, or make a pull request!

## 📜 License
This project is licensed under the MIT License.

---
### 💡 Made with ❤️ by [Shubham](https://github.com/Shubhampanchal108)

