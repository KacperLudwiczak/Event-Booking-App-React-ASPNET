# Event Booking

## Project Description
Event Booking is a full-featured web application designed to provide an interactive dashboard for managing and participating in activities and events. Users can browse existing activities, create and manage their own events, follow other users, and sign up for activities they are interested in.

## Features

- **Activity Feed**: View a list of all activities and events created by users.
- **User Authentication**: Sign up and log in to access features.
- **Create & Manage Activities**: Users can create, edit, and delete their own activities.
- **Join Activities**: Users can sign up for activities organized by others.
- **Follow Users**: Stay up-to-date with the activities of users you follow.
- **Profile Management**: Manage your profile, track activities you're organizing, participating in, and your follower list.

## Technologies Used

- **Frontend**: 
  - **React.js**: Modern JavaScript library for building user interfaces.
  - **TypeScript**: Superset of JavaScript, providing type safety.
  - **MobX**: State management library for React to handle application state efficiently.
  
- **Backend**: 
  - **ASP.NET Core**: Cross-platform, high-performance framework for building modern cloud-based web apps.
  
- **Database**: 
  - Uses Entity Framework Core with a relational database to store activity and user information.

## Installation & Setup

1. **Backend (ASP.NET Core)**:
   - Navigate to the backend directory.
   - Run the following command:
     ```bash
     dotnet run
     ```
   - The application will start on the default port (e.g., `https://localhost:5001`).

2. **Frontend (React.js)**:
   - Navigate to the client-app folder.
   - Install dependencies by running:
     ```bash
     cd client
     ```
   - Install the required npm packages:
     ```bash
     npm install
     ```
   - Then tart the React development server:
     ```bash
     npm start
     ```
   - The app will be available at `http://localhost:4200`.
     
### System Requirements

- **Node.js** version 12+ (for React.js)
- **.NET SDK** version 5.0+ (for ASP.NET Core)
- **SQL Server** as the database

### Author
- [Kacper Ludwiczak](https://github.com/KacperLudwiczak) - Software Developer
