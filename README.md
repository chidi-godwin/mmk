# mmk

### Prerequisite
1. The depends on the Node Package Manager (NPM). You will need to download and install Node from [https://nodejs.com/en/download](https://nodejs.org/en/download/). This will allow you to be able to run `npm` commands.
2. Environment variables will need to be set. These environment variables include database connection details that should not be hard-coded into the application code. These environmental variables can be set in a .env file. Check the env.example for the list of environmental variables

### 1. Database
Create a PostgreSQL database locally. The database is used to store the application's metadata.

* We will need to use password authentication for this project. This means that a username and password is needed to authenticate and access the database.
* The port number will need to be set as `5432`. This is the typical port that is used by PostgreSQL so it is usually set to this port by default.

Once your database is set up, create your DATABASE_URL using this URI format `postgres://user:password@localhost:5432/databaseName`

### 2. Install

* To download all the package dependencies, run the command from the directory `project directory`:
    ```bash
    npm install .
    ```
* To run the application locally, run:
    ```bash
    npm run dev
    ```
* You can visit `http://localhost:3000/` in your web browser to verify that the application is running. You should see an empty JSON payload. Feel free to play around with Postman to test the API's `https://documenter.getpostman.com/view/12384721/UVsEVUZx`.
