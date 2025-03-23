# PDF to Table Assignment

This project extracts data from a PDF file and displays it in a table on the frontend. The backend is built using **Node.js** with **pdf-parse** for PDF extraction, and the **fs** and **path** modules are used to handle file operations. The extracted data is sent to the frontend for display.

## Features
- Extract table data from a PDF file using **pdf-parse**.
- Use **fs** and **path** modules to handle file paths and read PDF files.
- Display extracted data dynamically on the frontend.

## Prerequisites
Ensure you have the following installed on your system:
- Node.js (v18.x or later)
- npm (v9.x or later)
- Git

## Instructions to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/kudrat07/pdf-to-table-assignment.git
```

### 2. Open the Project in VS Code
```bash
cd pdf-to-table-assignment
code .
```

### 3. Set Up the Backend (Server)
```bash
cd server
npm install
```

Start the backend server:
```bash
npm run dev
# Or
npm start
```

### 4. Set Up the Frontend (Client)
```bash
cd client
npm install
```

Start the frontend server:
```bash
npm run dev
```

## Usage
1. Ensure the backend is running before starting the frontend.

## Project Structure
```
pdf-to-table-assignment/
├── client/      # Frontend (React.js)
└── server/      # Backend (Node.js with Express)
```

## Technologies Used
- **Node.js**: Backend runtime environment
- **Express**: Web framework for Node.js
- **pdf-parse**: PDF data extraction
- **fs & path modules**: File handling
- **React.js**: Frontend framework


