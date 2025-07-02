# Project Name: BD Food Flow

## Introduction

This project aims to develop a comprehensive Disaster Relief Donation Platform using React, Redux for state management, RTK Query for efficient data fetching, and React Router DOM for navigation. The platform serves as a vital tool for coordinating and managing the distribution of food and essential supplies to communities in need during disasters, ensuring accessibility to nutritious meals and basic necessities.

## Live Deployment Link: 

## Video Showcasing BD Food Flow:

## Technologies Used

- TypeScript
- React
- Redux
- RTK Query
- React Router DOM
- Framer Motion (for animations)

## Key Features

`1. Responsive Website`

- This website offers a smooth user experience because it is totally responsive and available on a variety of devices.

`2. Dynamic Theme Switching`

- Users can switch between different themes (e.g., light mode, dark mode) based on their preferences. Provides enhanced user experience by offering customization options.

`3. Home / Landing Page / Root Page [Public]`

- Header / Navbar

  `Unauthenticated`

- Brand Logo: A visually appealing logo representing the platform's identity.
- All Supplies: Navigation link to view all supply posts.
- Login Button: Allows users to log in to their accounts.

`Authenticated`

-Brand Logo: Consistent branding element linking back to the home page.

- All Supplies: Access to view all supply posts.
- Dashboard: Access to the user's dashboard for managing supplies.
- Logout Button: Enables users to log out of their accounts.

`4. Banner / Hero Section `

- A visually striking section showcasing key information about the platform's mission and goals related to food distribution and supplies management.

`5. Supply Posts `

- Display 6 supply posts in card format, providing a snapshot of each supply item.
- Each card includes image, title, category, quantity, and view detail button.
- View all button redirects users to the All Supplies Page (/supplies) displaying a comprehensive list of supply posts.

`6. Top six Donor Testimonials `

- Engaging section featuring static data of donor testimonials related to supply contributions.
- Utilizes animations and sliders for enhanced user experience.

`7. Gallery `

- Dynamic Gallery showcasing photos of supply distributions and community outreach efforts.
- Fosters transparency and trust among users.

## All Supplies Page (/supplies) [Public Route]

`8. Grid of Card View of the Supply posts`

- Organized grid layout presenting supply posts in a visually appealing format.
- Each card shows image, title, category, quantity, and view detail button

## Supply Detail Page (/supplies/:id) [Public Route]

`9. Standardized Supply Detail Format`

- Detailed presentation of a supply post adhering to a standardized format.
- Displays image, title, category, quantity, and description.
- Donate Now button initiates the donation process.

## Login / Register Page [Public Routes]

`10. Register Page (/register)`

- User-friendly registration form enabling users to create new accounts with essential information.
- Login Page (/login)
- Secure login interface allowing users to access their accounts by providing valid credentials.

## Dashboard [Private Routes]

` Dashboard Home Page (/dashboard)`

- Dynamic dashboard interface featuring essential elements for managing user supplies and accessing statistical insights.
- PieChart on Supplies Calculations: Visual representation of supply statistics.

`All Supplies Page (Nested) (/dashboard/supplies)`

- A comprehensive view of all supply posts in a table format, displaying key details.
- Action Buttons: Edit, Delete, Button functionalities.
- Add Supply Post Button: Directs users to the Create Supply Post Page.

`Create Supply Post Page (/dashboard/create-supply)`

- Interactive form allowing users to create new supply posts.

`Animations`

- Implementation of 3-4 animations using the Framer Motion library to enhance the visual appeal and interactivity of the platform.

`Donors Leaderboard`

- Displays the top donors who have made significant contributions to the relief efforts.
- Showcases donor names or usernames along with their donation amounts to recognize their generosity.

`Community Gratitude Wall`

- Allows users to post comments of appreciation for the support they've received during difficult times.
- Enables users to express their gratitude by posting comments on the community gratitude wall.

`Digital Volunteer Hub`

- Provides a digital hub where users can discover and sign up for virtual volunteer opportunities.
- Allows users to provide their information and sign up for volunteering, contributing to relief efforts remotely.

`Interactive Testimonials`

- Donors can post testimonials about the donation posts, sharing their experiences and thoughts.
- Enhances transparency and trust by showcasing real donor feedback and experiences.

`Footer`

- Inclusive footer section featuring contact information, social media links, and relevant resources for further engagement and support.

## Setup and Usage

- `Clone the Repository:`

```js
git clone [repository_url]

```

- `Navigate to Project Directory:`

```js
cd [Project Directory]
```

- `Install Dependencies::`

```js
npm install
```

- `Start Development Server:`

```js
npm run dev
```

# Additional Information:

- Ensure that you have Node.js and npm installed on your machine before proceeding with the setup.

## -Please explore the codebase

Food Distribution and Supplies Management System - Detailed Project Overview
