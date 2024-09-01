# Simon Game Project

This project is a simple implementation of the classic Simon game using Node.js, Express.js, and PostgreSQL. It showcases fundamental skills in backend development, database integration, and basic authentication.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Introduction

The Simon Game project is a backend-driven application that simulates the Simon memory game. Players must remember and repeat a sequence of colors and sounds that increase in length with each round. The application supports user authentication, allowing players to save and retrieve their high scores.

## Features

- User authentication (login and sign-up)
- Stores and retrieves user high scores
- Simple game logic for simulating the Simon game
- Responsive design with static files served via Express.js
- PostgreSQL database integration

## Technologies Used

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for Node.js
- **PostgreSQL**: Relational database management system
- **EJS**: Embedded JavaScript templating for rendering views
- **dotenv**: For managing environment variables

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node package manager)
- **PostgreSQL** (version 12 or higher)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/routh-vishal/The-Simon-Game.git
   cd The-Simon-Game
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory by copying the `.env.example` file:
     ```bash
     cp .env.example .env
     ```
   - Fill in the `.env` file with your database credentials and other configurations.

## Database Setup

1. **Create a PostgreSQL database**:
   ```bash
   createdb -U your_username simon_game
   ```

2. **Import the database schema**:
   - Use the provided `schema.sql` file to set up the database tables:
     ```bash
     psql -U your_username -d simon_game -f schema.sql
     ```

## Running the Application

1. **Start the server**:
   ```bash
   node index.js
   ```

2. **Access the application**:
   - Open your web browser and go to `http://localhost:3000` (or the port specified in your `.env` file).

## Project Structure

```plaintext
├── public/             # Static files (CSS, JS, images)
├── views/              # EJS templates
├── .env.example        # Example environment variables
├── .gitignore          # Ignoring unnecessary files (like node_modules, .env)
├── schema.sql          # SQL file for database setup
├── index.js            # Main server file
├── package.json        # Node.js dependencies and scripts
└── README.md           # Instructions and project overview
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. Make sure to include clear commit messages and follow the existing code style.


This `README.md` provides a comprehensive overview of your project, making it easy for others to understand, set up, and run. It also highlights the skills you’ve showcased in this project, which is important for your resume.