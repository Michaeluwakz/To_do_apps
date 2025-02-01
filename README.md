# My To-Do List

## Overview
This project is a **To-Do List Web Application** that allows users to add, track, and manage tasks efficiently. Users can create an account, log in, and log out using Firebase authentication. Tasks are categorized into **Not Done** and **Done** sections for easy tracking.

## Features
- **User Authentication**: Sign up, log in, and log out functionality using Firebase Authentication.
- **Task Management**:
  - Add new tasks with name and deadline.
  - View tasks in "Not Done" and "Done" sections.
  - Mark tasks as completed or delete them.
- **Responsive Design**: Works on all screen sizes, including mobile.
- **Firebase Integration**:
  - Uses Firebase Realtime Database for storing tasks.
  - Secure user authentication with Firebase Auth.

## Technologies Used
- **Frontend**:
  - HTML
  - CSS
  - JavaScript
- **Backend & Database**:
  - Firebase Authentication
  - Firebase Realtime Database

## Installation & Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/your-repo/to-do-list.git
   cd to-do-list
   ```
2. Install dependencies (if any):
   ```bash
   npm install
   ```
3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable **Authentication** (Email & Password sign-in method).
   - Set up **Realtime Database** and configure rules.
   - Copy the Firebase configuration object into `firebase-config.js`.
4. Open `index.html` in a browser.

## File Structure
```
project-root/
│── index.html        # Main HTML page
│── css/
│   └── styles.css    # Stylesheet for the app
│── js/
│   └── app.js        # Main JavaScript file for functionality
│── firebase/
│   └── firebase-config.js  # Firebase configuration
│── README.md         # Project documentation
```

## Usage
1. **Sign up** using an email and password.
2. **Log in** to access the to-do list.
3. **Add tasks** with a name and deadline.
4. **Mark tasks as done** when completed.
5. **Log out** securely when finished.

## Future Improvements
- Add **edit task** functionality.
- Implement **due date reminders**.
- Enhance UI with animations.

## License
This project is licensed under the MIT License.

---
Happy Coding! 🚀

