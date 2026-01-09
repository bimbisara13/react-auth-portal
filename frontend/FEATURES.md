## FEATURES

- Authentication with JWT (access and refresh token):

  - Uses access tokens for API calls and auto-refreshes with refresh tokens on expiry

- Protected routes:

  - App routing is guarded, requiring authentication to access protected pages
  - Admin routes are further protected by role checks

- Axios-based API requests:

  - All API calls use a centralized axios instance with interceptors for attaching tokens and refreshing them if expired.

- Data fetching:
  - Uses both native fetch and axios to demonstrate API data consumption, e.g., fetching random users

- Role-based access control:

  - Components like Admin page is accessible only to users with specific role

- Axios error handling:

  - Centralized error handler utility provides user-friendly error messages for API responses.

- Debounced searching:

  - Input search UI uses debouncing to optimize filtering and performance when typing.

- Table filtering and searching:

  - Search and filter logic is customizable per table; supports case-insensitive search across data fields

- Pagination:
  - Data lists are paginated on the frontend for scalability and smoother UX
