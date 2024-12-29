Blogging API

A simple blogging API built with Node.js and Express, allowing users to manage blog posts. This project serves as a beginner-to-intermediate practice project for building RESTful APIs.

---

## Features

- Create, read, update, and delete (CRUD) blog posts.
- JSON-based data storage using `posts.json`.
- RESTful design principles.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine (v16+ recommended).
- Basic knowledge of JavaScript and REST APIs.

---

## Installation

1. Clone the repository: https://github.com/corbey08/blogging-api

2. Install dependencies:

npm install

3. Start the server:

npm start

4. By default, the server runs on http://localhost:3000.

---

Usage Examples

1. Get All Posts

curl -X GET http://localhost:3000/posts

2. Create a New Post

curl -X POST http://localhost:3000/posts \
-H "Content-Type: application/json" \
-d '{"title": "My First Post", "body": "This is the body of the post."}'

---

JSON Data Structure

Example of a blog post stored in data/posts.json:

[
  {
    "id": 1,
    "title": "My First Blog Post",
    "body": "This is the content of my first post."
  },
  {
    "id": 2,
    "title": "Another Post",
    "body": "Here's some more content."
  }
]

---

Licence

This project is open source and available under the MIT Licence.