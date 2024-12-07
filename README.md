Sports Equipment Website
Live Site CLIENT URL: **edgePlay-gear.surge.sh**
Live Site SERVER URL: **[edgePlay-gear.surge.sh](https://latest-sports-equipment-zone-1lb9e1ada-ahamed-noyon-s-projects.vercel.app/)**
Description
This is a feature-rich sports equipment website where users can browse, add, manage, and update sports equipment. It is built using React, Tailwind CSS, DaisyUI, and Firebase for authentication. The website includes both public and private routes with role-based functionality for an enhanced user experience.

Features
User Authentication:

Firebase authentication with email/password login and Google OAuth.
Displays user information (photo and name) in the navbar when logged in.
"Login" and "Register" options are shown only for unauthenticated users.
Private Routes:

"Add Equipment," "My Equipment List," and "View Details" are accessible only after logging in.
Dynamic Navbar:

Includes Home, All Sports Equipment, Add Equipment, My Equipment List, Login, and Register options.
User photo, name (on hover), and logout button are displayed for authenticated users.
Equipment Management:

Add, update, and delete sports equipment with user-specific visibility in "My Equipment List."
Update page allows modifications with pre-filled values (excluding read-only fields).
Interactive UI:

Dark/Light theme toggle on the homepage.
Sort functionality by price on the "All Sports Equipment" page.
Responsive design with meaningful content placement.
Modern Animations:

Integrated packages like Lottie React and React Awesome Reveal for engaging animations.
Enhanced Feedback:

Toast or Sweet Alert notifications for errors, successful operations, and confirmations.
Loading States:

Displays a spinner while loading data for a smoother user experience.
Pages

1. Home Page
   Navbar.
   Banner/Slider with at least three meaningful slides.
   Product section showing six cards fetched from MongoDB using the limit operator.
   Sports category section.
   Footer with website name, copyright info, contact details, and social media links.
2. Add Equipment Page (Private Route)
   A form to add equipment with fields for image, name, category, description, price, rating, customization, processing time, stock status, user email (read-only), and user name (read-only).
   Displays a success message after successful addition.
3. All Sports Equipment Page
   Displays all equipment in a table format with name, category, price, etc.
   "View Details" button redirects to a detailed view.
   Includes sort functionality for price (ascending/descending).
4. View Details Page (Private Route)
   Displays detailed information about a product in a visually appealing card design.
5. My Equipment List Page (Private Route)
   Shows all equipment added by the logged-in user in card format.
   Includes Update and Delete buttons for each item.
   Delete button opens a confirmation modal before deletion.
6. Update Equipment Page (Private Route)
   Similar to the Add Equipment page with pre-filled fields for updating equipment.
   Displays a success message upon successful update.
7. Login Page
   Login using email and password.
   Additional authentication via Google OAuth.
   Displays toast or Sweet Alert for incorrect credentials.
8. Register Page
   Includes fields for name, email, photo URL, password, and password confirmation.
   Password validation: At least 6 characters, with both uppercase and lowercase letters.
   Shows a success message upon successful registration.
9. 404 Page
   Custom 404 page for non-existent routes.
10. Loading Spinner
    A loading spinner appears during data fetching operations.
    Responsive Design
    The website is fully responsive and adapts to all screen sizes, ensuring optimal usability and aesthetic appeal on desktops, tablets, and mobile devices.

Packages Used
Lottie React - For animated illustrations.
React Awesome Reveal - For smooth reveal animations.
React Tooltip - For enhanced tooltips on hover.
Installation and Setup
Clone the repository:

bash
Copy code
git clone\***\*\*\*\***
Navigate to the project directory:

bash
Copy code
cd sports-equipment-website
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Ensure the following environment variables are set in a .env file:

REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
Deploy to your hosting platform of choice.

Contact
For any inquiries or support, reach out via:

Email: support@**\*\***.com
Phone: +1-**\***-890
Social Media: Facebook, Twitter, Instagram
Thank you for using the Sports Equipment Website! Let us know if you have any feedback or suggestions.
