React Routing & Firebase Authentication
Student Name: Nabila Tanjiha
Student ID: C243501

Project Description
This project is a React web application developed for the React Routing
and Firebase Authentication assignment. It allows users to register with
an email and password, log in to their accounts, and access protected
pages. React Router DOM is used for page navigation, and Firebase
Authentication is used to manage user authentication.
Technologies Used
- React.js
- Vite
- React Router DOM
- Firebase Authentication
- JavaScript
- HTML
- CSS
Features
- Home Page
- User Registration
- User Login
- Dashboard Page
- Profile Page
- Navigation Bar
- Email and Password Authentication
- Logout Functionality
- Protected Routes
- Authentication State Persistence
Pages and Routes
  Page        Route          Access
  Home        /            Public
Login       /login       Public
Register    /register    Public
Dashboard   /dashboard   Protected
Profile     /profile     Protected
Authentication System
Firebase Authentication is used to manage user accounts.
- New users can register using an email address and password.
- Registered users can log in to the application.
- Logged-in users can log out.
- The authentication state is monitored using onAuthStateChanged().
Protected Routes
The Dashboard and Profile pages are accessible only to authenticated
users. If a user who is not logged in tries to access either page, they
are redirected to the Login page.
React Concepts Used
- BrowserRouter
- Routes and Route
- Link
- useNavigate
- Navigate
- ProtectedRoute
- useState
- useEffect
- useContext
- Conditional Rendering
GitHub Repository
Repository Link:
https://github.com/tanjiha27/React-Firebase-Assignment
Conclusion
Through this assignment, I learned how to use React Router DOM for page
navigation and Firebase Authentication for user registration and login.
I also practised creating protected routes, managing authentication
state, and implementing logout functionality in a React application.
