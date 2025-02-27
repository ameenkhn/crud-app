🚀 CRUD Application using Next.js, TailwindCSS, and DaisyUI

📌 Project Description
This is a CRUD (Create, Read, Update, Delete) application built with Next.js, TailwindCSS, and DaisyUI. The app interacts with the JSONPlaceholder API to simulate CRUD operations on a remote server. It provides a responsive, modern UI and ensures smooth data management with React Query, React Hook Form, and Zod for state handling and validation.

🚀 Features
✅ Fetch and display data from JSONPlaceholder API
✅ Create new items with React Hook Form & Zod validation
✅ Edit existing items with a pre-filled form
✅ Delete items with a confirmation prompt
✅ Responsive design using TailwindCSS & DaisyUI
✅ Asynchronous state management with React Query
✅ Error handling for API requests

🛠 Tech Stack
Technology	             Description
Next.js	                 React framework for SSR & static sites
TailwindCSS	             Utility-first CSS framework
DaisyUI	                 Pre-styled TailwindCSS components
React Query	             Efficient data fetching & caching
React Hook Form	         Form handling & validation
Zod	                     Schema-based validation library

📂 Folder Structure
/crud-app
 ├── public/             # Static assets
 ├── src/
 │   ├── components/     # Reusable UI components
 │   ├── pages/          # Next.js pages (CRUD operations)
 │   ├── api/            # API interaction files
 │   ├── styles/         # TailwindCSS styles
 │   ├── utils/          # Helper functions
 ├── .env               # Environment variables
 ├── next.config.js     # Next.js configuration
 ├── package.json       # Project dependencies
 ├── README.md          # Project documentation

⚡ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/crud-app.git
cd crud-app
2️⃣ Install Dependencies
npm install
3️⃣ Start the Development Server
npm run dev
This will start the app at http://localhost:3000/.

🔥 CRUD Operations
🟢 Fetch Data (Read) : The application fetches data from JSONPlaceholder API and displays it in a list format.
🟡 Create New Data : A form allows users to submit new items, Input validation is handled using Zod & React Hook Form.
🔵 Update Existing Data : Users can edit items with a pre-filled form.
🔴 Delete Data : Items can be deleted with a confirmation prompt.

🌍 Deployment : The application is deployed on Vercel. You can access the live demo here:
🔗 Live Demo: https://crud-app.vercel.app
🚀 Deploy on Vercel
To deploy your own version, run: npm run build vercel

🚀 Ready to Start? Clone & Run the App Now!
git clone https://github.com/yourusername/crud-app.git
cd crud-app
npm install
npm run dev

🎯 Final Thoughts
This project is designed to enhance your Next.js, TailwindCSS, and DaisyUI skills while working with real-world CRUD operations. Whether you're learning or improving your web development skills, this project serves as a strong foundation for future applications.
