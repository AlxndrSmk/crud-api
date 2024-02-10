# Simple CRUD API with In-Memory Database in Node.js
<!-- DESCRIPTION -->
This project implements a simple CRUD API for managing users using Node.js, TypeScript, and an in-memory database.

<!-- GETTING STARTED -->
# Getting Started

This is an example of how you can run a project locally. Follow these simple steps as an example.

### Installation

1. Clone the repo
```
git clone https://github.com/AlxndrSmk/crud-api.git
```
2. Switch to the ```dev``` branch
  ```
git checkout dev
```
3. Install NPM packages
```
npm install
```

<!-- USAGE EXAMPLES -->
## Usage


To start the server

```
npm run start
```

You can use project in developer mode

```
npm run dev
```

or in production mode

```
npm run prod
```


<b>After launching the application, launch Postman.</b>

Response - an array of all users,
Method - GET
Address - http://localhost:3000/api/users

```
GET
http://localhost:3000/api/users
```
Response - one specific use,
Method - GET
Address - http://localhost:3000/api/users/{userId}

```
GET
http://localhost:3000/api/users/62243af0-8a31-48f3-a2a8-144ca347783a
```
Response - add a new user,
Method - POST
Address - http://localhost:3000/api/users

```
POST
http://localhost:3000/api/users

{
  "username": "Jane Doe",
  "age": 28,
  "hobbies": ["Coding", "Music"]
}
```

Response - change the user's data,
Method - PUT
Address - http://localhost:3000/api/users/{userId}

```
PUT
http://localhost:3000/api/users/62243af0-8a31-48f3-a2a8-144ca347783a

{
  "username": "John Doe",
  "age": 13,
  "hobbies": ["Swimming"]
}
```
Response - delete a user,
Method - DELETE
Address - http://localhost:3000/api/users/{userId}

```
DELETE
http://localhost:3000/api/users/62243af0-8a31-48f3-a2a8-144ca347783a
```

To run the tests

```
npm run test
```


