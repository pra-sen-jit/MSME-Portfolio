# Catalogue MSME - Backend & Frontend System

A full-stack application for managing MSME product catalogs with user authentication and image upload capabilities.

## 🚀 Prerequisites

- Node.js v16+
- npm v8+
- MySQL Server 8.0+
- MySQL Workbench

## 🔧 Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/D-roy-2003/Catalogue_MSME.git
cd Catalogue_MSME
```

### Install Dependencies
```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

### Environment Configuration
```bash
##Backend (create .env in /backend)
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME="mydatabase"
JWT_KEY=your_random_secret_key
CORS_ORIGIN=http://localhost:5173
SENDGRID_API_KEY=your_sendgrid_key
EMAIL_FROM=your_verified_email@domain.com

##Frontend (create .env in /frontend)
VITE_BACKEND_URL=http://localhost:3000
VITE_EMAIL_KEY=""

```

###File Storage Setup
```bash
mkdir backend/uploads
```


#🖥️ Deployment
```bash
# 1.Start backend server:
cd backend
npm run dev
```

###In a new terminal, start frontend:
```bash
cd frontend
npm run dev
```

###🌐 Access Application
```bash
Frontend: http://localhost:5173
Backend API: http://localhost:3000
```

#
**Replace all placeholder values (your_mysql_password, your_sendgrid_key, etc.) with your actual credentials**

## 📚 Documentation
[API Documentation](http://localhost:3000/api-docs) (Available after starting backend server)

## ⚠️ Troubleshooting
- If MySQL connection fails:
  - Verify service is running
  - Check credentials in .env
  - Ensure MySQL user has proper privileges
- Clear npm cache and reinstall dependencies if installation fails
