

  
# Calo Jobs Frontend Application

This frontend application was built to complement the Calo Jobs backend microservices. It provides a user-friendly interface to create jobs and view their statuses or results. The frontend was implemented using **React.js**, with API requests handled through the backend API Gateway. The jobs simulate fetching random images from Unsplash's food category, and the frontend displays the status or results of each job.

## Table of Contents

- [Quick Start](#quick-start)
- [Project Overview](#project-overview)
- [Design Considerations for Resilience](#design-considerations-for-resilience)
- [Future Improvements](#future-improvements)
- [Challenges and Time Taken](#challenges-and-time-taken)

## Quick Start
1. Clone the repository:

    ```bash
    git clone https://github.com/imahmed18/calo-test-fe.git
    cd <repository-directory>
    ```


### Docker Installation
### Prerequisites

- Ensure **Docker** and **Docker Compose** are installed on your machine.
### Steps to Start with Docker
1. Build the docker image:

    ```bash
    docker build -t calo-fe-image .
    ```
 2. Run the docker container:

    ```bash
    docker run -p 3000:3000 calo-fe-image
    ```
    This will start the application in a Docker container and expose it on port `3000` of your localhost.
  2. Access the application:
  Open your browser and navigate to:

	    ```bash
	    http://localhost:3000
	    ``` 
   

    
### Manual Installation
### Prerequisites

- Ensure **Node.js** and **npm** (or **yarn**) are installed on your machine.


1. Install dependencies:

    ```bash
    npm install
    ```

    or with yarn:

    ```bash
    yarn install
    ```

2. Start the development server:

    ```bash
    npm start
    ```

    or with yarn:

    ```bash
    yarn start
    ```

3. The application will start running at:

    ```
    http://localhost:3000
    ```
   
 ##  Project Overview

This project is a **React-based** frontend application designed to offer a highly interactive and dynamic user experience. The application is structured around modern web development best practices, leveraging the power of **React** for building UI components, **Redux Toolkit** for efficient and simplified state management, and **Thunk** middleware for handling asynchronous actions such as API requests.

The application serves as the frontend of a larger system, interacting with backend APIs to perform operations like data fetching, and job management. It is designed to be highly modular, making it easy to scale and maintain as the codebase grows. Here's an overview of the key technologies and features:

## Key Features

### 1. **Modular Component Structure**
   The application follows a **component-based architecture**, which means the UI is divided into reusable components that handle individual pieces of the user interface. This ensures that the code remains organized, modular, and easier to manage.

### 2. **State Management with Redux Toolkit**
   For managing **application-wide state** and implementing **unidirectional data flow**, the project uses **Redux Toolkit**, which simplifies the process of creating slices, actions, and reducers. It makes the state management more predictable, maintainable, and efficient. State is centralized, which allows different parts of the application to access and update shared data in a consistent way.

### 3. **Redux Thunk for Asynchronous Actions**
   **Thunk** middleware is integrated into the Redux store to handle asynchronous logic, such as fetching data from APIs or performing complex asynchronous workflows. Thunk allows for better control over the side effects, enabling smooth, responsive interactions within the application.

### 4. **Routing with React Router**
   **React Router** is used to manage navigation and client-side routing in the application. The routes are defined in a central location (`src/routes/`), making it easy to configure paths for different pages and ensure seamless navigation throughout the application.

### 5. **PropType Validation**
   **PropTypes** are used throughout the project to ensure that components receive the correct data types for their props. This reduces the likelihood of runtime errors by validating the data being passed to components.

### 6. **Middleware and Utilities**
   The project includes custom middleware and utility functions that handle complex logic and repetitive tasks. These are centralized in the `src/utils/` directory, ensuring that utility functions and middleware are reusable and easy to maintain.

### 7. **Layout Components for Consistency**
   Layout components, located in the `src/layouts/` folder, provide a consistent structure for the pages of the application. These layouts handle the overall page structure, such as headers, footers, and sidebar navigation, ensuring a cohesive user experience across different pages.

## Structure and Scalability

The application is designed with scalability in mind, featuring a **modular file structure** that separates concerns by grouping related files and components. Each module (e.g., **redux slices**, **API services**, **components**, **pages**) is placed in its own directory, ensuring that the code is maintainable and can easily accommodate new features or changes in the future.

The **Redux store** is configured to handle slices of the global state in an efficient manner, and the use of **Thunk** middleware ensures that all asynchronous actions (such as API requests) are handled in a clean, predictable way. This approach makes it easier to debug and optimize the application's performance as it scales.

On the presentation side, **Tailwind CSS** and **Flowbite** enables quick adjustments to the UI with minimal overhead, ensuring that the design remains flexible and easy to extend.

### 1. Folder Structure

### `src/api/`

Contains the API integration logic for interacting with the backend. **`api-end-points.js`** defines the API endpoints, and **`common.js`** includes configuration of http library.

### `src/components/`

Houses reusable **React** components used throughout the app. Components here are meant to be shared across different pages or features.

### `src/layouts/`

Contains layout components like headers, footers, and general structure. **`Layout.js`** is the main layout component used to wrap page components, maintaining consistent design across the app.

### `src/pages/`

This folder contains different **React** components for each page of the application, such as job creation or job list pages.

### `src/propTypes/`

Custom **PropType** definitions to enforce the expected data types for component props. This helps ensure component integrity and catch errors during development.

### `src/redux/`

This is the **Redux** setup directory. **Redux Toolkit** and **Thunk** are used for state management and side effects.

-   **`jobs/`**: Contains Redux slices (actions and reducers) for handling the state related to jobs, such as fetching job statuses or creating new jobs.
-   **`rootReducers.js`**: Combines all reducers into a single root reducer.
-   **`store.js`**: Configures the Redux store with **Thunk** middleware for handling asynchronous actions.

### `src/routes/`

Contains **React Router** setup for navigation between different pages.

-   **`index.jsx`**: Defines the routes for the application, mapping paths to page components.
-   **`paths.js`**: Centralized path constants used for navigation, making it easy to update route paths.

### `src/utils/`

Utility functions, constants, and middleware. This folder helps keep the code DRY (Don't Repeat Yourself) by storing reusable logic in one place.

-   **`middlewares/`**: Custom middleware functions for handling additional logic in Redux.
-   **`const.js`**: Stores constant values used across the app.
-   **`helpers.js`**: Common utility functions to simplify logic in other parts of the app.

### `App.js`

The main **React** component that wraps all the child components. This is where **Redux Provider** and **Router** are integrated, allowing state and navigation to work together.

### `store.js`

The Redux store is configured here using **Redux Toolkit** and includes **Thunk** for handling asynchronous logic such as API requests.

### `tailwind.config.js`

The configuration file for **Tailwind CSS**, a utility-first CSS framework. It defines custom styles and themes used in the application.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, focusing on component-driven development.
- **Redux Toolkit**: A powerful toolset for efficient state management and better developer experience with Redux.
- **Redux Thunk**: Middleware for handling asynchronous logic, such as API calls, within Redux.
- **React Router**: A library for managing client-side routing in React applications.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid and efficient UI development.
- **Flowbite**: open-source UI component library built on top of Tailwind CSS with React components for quick UI development.
- **PropTypes**: A runtime type checking mechanism for ensuring the correctness of props passed to React components.
---
## Design Considerations for Resilience

In order to handle potential network instability and unpredictable job execution times, the frontend application was designed with two specific approaches:

### 1. Handling Unstable Internet Connections

To ensure that jobs can still be posted when the internet connection is unstable or temporarily unavailable, the following approach was implemented:

-   **Offline Job Posting**: When a user attempts to post a job while offline, the job is saved locally in the browser's `localStorage`. Once the application detects that the user is back online, it automatically sends the pending jobs to the backend.
    
-   **Retry Mechanism**: If a job cannot be sent to the backend due to a network error, it is retained in local storage, and an attempt to resend it will be made the next time the application goes online. This makes the application resilient to temporary network issues, ensuring no jobs are lost during downtime.
    

This mechanism is handled using Redux's `createAsyncThunk` for dispatching jobs and browser event listeners for detecting when the user comes back online.

**Code Implementation**:

-   Jobs are saved to `localStorage` when offline.
-   A retry system is in place to resend jobs when the connection is restored.
-   The event listener for the `online` event triggers the function to resend jobs automatically.

This ensures seamless user experience and reliable job submission, even in the face of connectivity issues.

### 2. Handling Variable Job Execution Times

Jobs in this application simulate fetching random images from Unsplash, which can take anywhere from 5 seconds to 5 minutes. To accommodate this variability, a polling mechanism was implemented:

-   **Polling for Job Status Updates**: The frontend regularly polls the backend every 5 seconds to check the status of each job. This ensures that the user interface remains up-to-date with the most recent job statuses without requiring manual refreshes or relying on the backend to push updates.

This approach ensures that the application remains responsive and can display job status updates to the user in near real-time, regardless of how long a job takes to complete.

**Code Implementation**:

-   A polling mechanism is set up using `setInterval` in the `useEffect` hook, fetching the latest job statuses from the backend every 5 seconds.
-   The interval is cleared when the component unmounts to avoid memory leaks or redundant requests.

These two design considerations—offline job handling and job status polling—make the frontend resilient and capable of handling real-world issues like network instability and unpredictable job execution times.

---

## Future Improvements
- **Implementation of Server-Sent Events (SSE)**: Instead of using a polling mechanism to check job statuses, implementing Server-Sent Events (SSE) would create a more efficient one-way communication channel from the server to the client for receiving job updates. SSE allows the server to push updates to the client in real time, eliminating the need for repeated requests. This approach reduces latency, lowers server load, and conserves bandwidth by maintaining a single persistent connection. Clients can automatically receive updates as soon as they occur, improving responsiveness and user experience. Additionally, SSE includes built-in reconnection capabilities, ensuring that clients stay updated even in the event of network interruptions.
---
## Challenges and Time Taken
During the development of the frontend application, no significant challenges were faced. The setup and integration processes proceeded smoothly, allowing for an efficient workflow.

In terms of time investment, it took approximately **5 hours** to set up the project and establish end-to-end API integration. Additionally, **1 hour** was spent documenting the code flow and approach in the README file to ensure clarity and ease of understanding for technical review of code.
