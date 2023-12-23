# Openhouse.AI coding exercise

## Technologies Used

This project is built with following techstack:

- Framework: React
- Language: TypeScript
- Module Bundler: Vite
- CSS Framework: Tailwind CSS
- UI Library: Shadcn UI
- Data Caching, Fetching, Server Sync, and State Management: Tanstack Query
- API Client: Axios
- Client Routing: React Router Dom
- Icon Library: Lucide Icons

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (I used v18.19.0 - see `.nvmrc` file)
- npm (Node Package Manager)

## Running the Project

Follow these steps to get the project up and running on your local machine:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/AmiJP/openhouseAi-coding-exercise.git
   ```

2. Navigate to the project root directory:

   ```bash
   cd openhouseAi-coding-exercise
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. To run the project locally, use the following command:

   ```bash
    npm run dev
   ```

5. (optional) For a development environment with `ReactQueryDevTool`, you can run:

   ```bash
    NODE_ENV=development npm run dev
   ```

   This will start the development server, and you can access the application at http://localhost:3000 in your web browser.

## Follow Up Question:

If given more time, how would you improve the quality of your application? Would you
implement anything differently?

- If given more time, I would focus on several aspects to enhance the quality and user experience of the application:

### Sorting, Filtering, Pagination/Infinite Scrolling:

- I would implement features like sorting by different, filtering, and pagination or infinite scrolling for the community list would significantly improve the user's ability to navigate and find relevant information efficiently.

### Data Validation:

- I would add robust validation for each data response from the API is crucial to ensure that the application receives the expected data format. This step is vital for preventing unexpected errors and improving the overall reliability of the system.

### Error Handling:

- Enhancing the error handling mechanism is pivotal for providing a seamless user experience. I would implement an error boundary to catch and gracefully handle errors, including different types such as 404 errors, internal server errors, and handling scenarios when the user loses internet connection. Additionally, creating a fallback screen would ensure a smoother transition during unexpected situations.

### Community Details Page:

- Designing a dedicated community details page, where homes from the community can be listed with more detailed information, would offer users a richer experience. This could include additional features like price, area, type or any other relevant information.

In terms of best practices, I would adhere to the following principles:

### Modular Code Structure:

- I improve more on the codebase to follows a modular structure for better maintainability and scalability.

### Code Comments and Documentation:

- I would improve code comments and documentation to enhance code readability and assist future developers in understanding the functionality.

### Testing:

- I would implement a comprehensive testing strategy, including unit tests, integration tests, and end-to-end tests, to catch potential issues early in the development process. I would added unit tests for apis calls, hooks, component.

### Accessibility:

- I would pay attention to accessibility standards (WCAG) to ensure the application is usable by a wide range of users, including those with disabilities and also user can easily navigate and access by mouse, keyboard and screen reader.

### Performance Optimization:

- I would conduct performance audits and optimize critical parts of the application to ensure a smooth and responsive user experience.

By addressing these areas, I aim to create a more robust and user-friendly application, reflecting a commitment to both user satisfaction and code quality.
