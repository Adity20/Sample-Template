<h1 align="center">GraphQL API with Fine-Grained Access Control</h1>

<p align="center">
  <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/Daytona-00A8E8?style=for-the-badge">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
</p>

---

## Description

This project demonstrates how to create a **GraphQL API** with fine-grained access control on your database using **Node.js**, **Express.js**, **Apollo Server**, and **MongoDB**. The project integrates **Daytona** for streamlined development environment management, making it easier to handle environment-specific configurations and secrets.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Demo](#demo)
- [License](#license)

---

## Features

- **GraphQL API**: A robust API with query, mutation, and subscription support.
- **Access Control**: Fine-grained access controls implemented at the resolver level to ensure secure data operations.
- **Environment Management**: Powered by Daytona to handle development, staging, and production configurations seamlessly.
- **MongoDB Integration**: Utilized as the database to store and retrieve data efficiently.

---

## Getting Started

### Open Using Daytona

1. **Install Daytona**: Follow the [Daytona installation guide](https://www.daytona.io/docs/installation/installation/).

2. **Create the Workspace**:
   ```bash
   daytona create https://github.com/Adity20/Sample-Template
   ```

### Add Forwarded Port

In your Text Editor/IDE, add 4000 as the forwarded port.

### Start the Application

Navigate to the project root and run the following commands:

```bash
daytona use development
```

Start the server:

```bash
node src/server.js
```

## Technologies

This project is built using the following technologies:

- **Node.js**: JavaScript runtime for the server-side application.
- **Apollo Server**: GraphQL server for creating schemas and resolvers.
- **Express.js**: Lightweight backend framework for integrating middleware and routing.
- **MongoDB**: NoSQL database for data persistence.
- **Daytona**: Development environment manager for seamless configuration and secrets management.
- **Dotenv**: Environment variable management for fallback configurations.

## Demo

Here’s a video walkthrough of the application:

[Watch the video](https://github.com/Adity20/Sample-Template/blob/main/WhatsApp%20Video%202024-12-17%20at%2000.05.09_2c554090.mp4)


## Project Structure

```plaintext
graphql-api-project/
├── src/
│   ├── schema/
│   │   ├── typeDefs.js        # GraphQL schema definitions
│   │   ├── resolvers.js       # Resolver logic
│   ├── utils/
│   │   ├── auth.js            # Middleware for authentication
│   ├── server.js              # Entry point for the server
│   ├── daytona.json           # Daytona configuration
├── package.json               # Project dependencies
├── .env                       # Environment variables (Daytona-enabled)
├── README.md                  # Documentation
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.


