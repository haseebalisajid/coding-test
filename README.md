# Coding Test

This test is designed as to measure the following traits of the applicant:
- Drive
- Speed
- Knowledge
- Communication

**Technologies:**
- TypeScript
- React
- Redux
- Tailwind

**Rules:**
- Maximum duration of 3 hours
- Record your screen while writing code *(obsproject.com or any other tool)*

## Installation

1. Run `yarn` to install the dependencies in `package.json`
2. Run `yarn start` to host the website on http://localhost:3000.
3. Run `yarn server` to host the API on http://localhost:8080.
4. Use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) on all files you edited before sending in your code test

## Tasks

1. **Authenticate**

   Use the Fetch API to make a `POST` request to `http://localhost:8080/authenticate` to receive a cookie

   - Add a page where a user can fill in an email and password
   - Add a new HTTP requests to the `useAPI` hook
   - The `POST` body should be JSON containing `email` and `password`

2. **Load data**

   Use the Fetch API to make a `GET` request to `http://localhost:8080/transactions?page=0` to receive data

   - Add a new HTTP requests to the `useAPI` hook
   - Add a `Route` and create a `NavLink` to it
   - When the user arrives on this page:
     - Reset page to 0
     - Remove previously loaded data
     - Send the request
   - Add a "More" button that loads in another page and **adds** the transactions to the table
   - Use spread operator inside of the `addTransactions` Redux reducer

3. **Display data**

   - Put all transactions available in the Redux store in a table
   - Use `Object.values(...).map(...)` inside of your JSX
   - Apply acceptable styling using Tailwind

4. **Submit**

   Submit the link to your public repository fork to luuk@thedigitalrenaissance.io. Next step is to have an interview in which we will look at your recording together and discuss your software.
