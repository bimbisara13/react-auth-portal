## FEATURES

- Authentication with JWT:

  - Uses access tokens for API calls and auto-refreshes with refresh tokens on expiry

- RBAC and Protected routes:

  - Admin routes are accessible only to users with specific role

- Axios-based API requests:

  - All API calls use a centralized axios instance with interceptors for attaching tokens and refreshing them if expired

- Data fetching:

  - Uses axios to demonstrate API data consumption

- Axios error handling:

  - Centralized error handler utility provides user-friendly error messages for API responses

- Debounced searching:

  - Input search UI uses debouncing to optimize filtering and performance when typing; supports case-insensitive

- Pagination:

  - Data lists are paginated on the frontend for scalability and smoother UX
