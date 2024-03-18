# Sequelize Many-to-Many, One-to-Many Association Example - Node.js & MySQL

This project demonstrates how to implement many-to-many and one-to-many associations in a Node.js application using Sequelize ORM with MySQL database.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- MySQL database

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/tuanhungdev1/Sequelize-One-to-Many-and-Many-to-Many-Association-Node.js-MySQL.git
```

2. Navigate into the project directory:

```bash
cd nodejs-sequelize-associations-example
```

3. Install dependencies:

```bash
npm install
```

4. Set up your MySQL database and update the database configuration in `config/config.json` file.

5. Run database migrations to create necessary tables:

```bash
npx sequelize-cli db:migrate
```

## Usage

1. Start the server:

```bash
npm start
```

2. Open your preferred API testing tool such as Postman or use a web browser.

3. You can now make HTTP requests to the API endpoints to perform CRUD operations on the resources (e.g., users, posts, tags, etc.) stored in the MySQL database.

4. For example, you can create a new user (`POST /api/users`), retrieve all users (`GET /api/users`), create a new post (`POST /api/posts`), add tags to a post (`POST /api/posts/:postId/tags`), retrieve all posts with their associated tags (`GET /api/posts`), etc.

## Customization

- You can customize the associations and models by modifying the files in the `models` directory according to your specific requirements.
- Additionally, you can change the port number and other configurations by modifying the appropriate files in the project.

## Credits

This project is inspired by various tutorials and documentation from the following sources:

- [Sequelize](https://sequelize.org/)
- [Express.js](https://expressjs.com/)

Thank you!
