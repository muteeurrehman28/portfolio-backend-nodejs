# Portfolio Website (MERN Stack)

A full-stack portfolio website with a Node.js/Express backend and React frontend.

## Project Structure

The project is organized into two main directories:

### Backend

- Node.js and Express server
- MongoDB models for Education, Skills, Projects, and Experience
- RESTful API endpoints
- Environment configuration with dotenv

### Frontend

- React with Material UI
- Responsive layout
- Pages for Home, Education, Experience, Skills, and Projects
- API services to connect with backend
- Fallback data for when backend is unavailable

## Technologies Used

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv

### Frontend
- React
- Material UI
- React Router
- Axios
- Vite

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. The application will be available at http://localhost:3000

## Features

- Responsive design
- Dynamic data loading from backend API
- Graceful error handling
- Fallback data when backend isn't available
- Professional, modern UI

## API Endpoints

### Education
- `GET /api/education` - Get all education records
- `GET /api/education/:id` - Get a specific education record
- `POST /api/education` - Create a new education record
- `PUT /api/education/:id` - Update an education record
- `DELETE /api/education/:id` - Delete an education record

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get a specific skill
- `POST /api/skills` - Create a new skill
- `PUT /api/skills/:id` - Update a skill
- `DELETE /api/skills/:id` - Delete a skill

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a specific project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Work Experience
- `GET /api/experience` - Get all work experiences
- `GET /api/experience/:id` - Get a specific work experience
- `POST /api/experience` - Create a new work experience
- `PUT /api/experience/:id` - Update a work experience
- `DELETE /api/experience/:id` - Delete a work experience

## Frontend Integration

To integrate with a React frontend:
1. Set the API base URL in your frontend's `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```
2. Use Axios or Fetch to make HTTP requests to the API endpoints.

## Contributing

1. Create feature branches from the main branch
2. Make changes and test locally
3. Commit with descriptive messages
4. Create Pull Requests to merge changes into main

## Author

- **Mutee Ur Rehman** - [muteeurrehman28](https://github.com/muteeurrehman28) 