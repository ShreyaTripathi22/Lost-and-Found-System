# Lost & Found Tracking System

A modern, full-stack web application designed to help users report, browse, and recover lost and found items through a smart, crowdsourced platform. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, the system allows users to post reports, view items, and get notified when similar items are matched—streamlining the entire recovery process.

---

##  Features

-  **Post & Search Lost/Found Items**  
  Users can report lost or found items with location, date, and image.

- **Email Notification System**  
  Auto-alerts are sent when matching lost/found items are detected.

- **Secure Authentication**  
  Users can register and log in securely using hashed credentials.

- **Image Upload**  
  Found items can be submitted with photos via Multer for better identification.

- **Smart Matching Logic**  
  If an item is reported lost, and a similar found item is posted within 3 days in the same location, an email alert is triggered.

- **Claim Request Feature**  
  Lost item owners can send a claim request to the person who posted a matching found item.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose ODM)  
- **File Upload**: Multer  
- **Email Service**: Nodemailer (Gmail SMTP)  
- **Environment Variables**: dotenv

---

##  Setup Instructions

### Prerequisites:
- Node.js
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup:

```bash
cd backend
npm install
```

### Create a .env file in the server/ directory:

```bash
MONGODB_URI=your_mongo_db_connection
EMAIL_USER=your_gmail_email
EMAIL_PASS=your_app_password
```

### Run the backend server:

```bash
node server.js
```

### Frontend Setup:

```bash
npm install
npm run dev
```
