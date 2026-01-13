# react-auth-portal

A reference implementation showcasing core React fundamentals, including project structure, environment configuration, and client–server setup.

## Getting Started

Follow the steps below to set up and run the project locally.

### 1. Setting environment variables

For both the client and server, create a `.env` file at the root of each directory by copying the provided `.env.example` file.

Make sure this is done in both the `frontend` and `backend` directories.

### 2. Run the server

Navigate to the backend directory, install dependencies, and start the development server:

```
cd backend
npm install
npm run dev
```

### 3. Run the client

In a separate terminal, navigate to the frontend application, install dependencies, and start the client:

```
cd frontend/my-app
npm install
npm run dev
```

### 4. Postman Collection

A Postman collection is available to help you explore and test the API endpoints quickly.

- _Collection File:_ [`react-auth-portal.postman_collection.json`](./backend/react-auth-portal.postman_collection.json)
- _How to Use:_
  1. Open Postman.
  2. Click on **Import** in the top-left corner.
  3. Select the `react-auth-portal.postman_collection.json` file.
  4. All endpoints will be imported, ready for testing.

This collection includes all the authentication endpoints, sample requests, and example responses.

### 5. Login Credentials

Use the following sample credentials to log in and test the authentication flow:

Admin User:

- Username: `bimbisara`
- Password: `admin@123`

User:

- Username: `john`
- Password: `user@123`

Simulating a `500` Internal Server Error:

- Username: `trigger500`
- Password: Any non-empty value

### 6. Troubleshooting Login Issues

If you encounter issues logging in, check the following:

- Make sure the backend cors origin in `app.js` matches the port your frontend is running on.

```js
origin: 'http://localhost:5173' // Update if your frontend runs on a different port
```

<br />

⚠️ These credentials are hardcoded and intended for development and demonstration purposes only.
