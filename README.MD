# E-commerce API

This is a RESTful API for an E-commerce platform. It manages users, products, reviews, and orders. The backend is built using Node.js, Express.js, and MongoDB.

## Features

- **User Management**: User registration, authentication, and profile management.
- **Product Management**: Create, update, delete, and retrieve products.
- **Review System**: Users can leave reviews on products.
- **Order Management**: Users can place orders, which are linked to products and users.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **JWT**: JSON Web Tokens for user authentication.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/elshora97/E-Commerce-API.git
    cd E-Commerce-API
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

    The API will be running on `http://localhost:5000`.
