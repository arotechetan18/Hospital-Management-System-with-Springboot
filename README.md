# Hospital Management System with AI Assistant
 **Full Stack Hospital Management System** developed using **Angular** for the frontend and **Spring Boot** for the backend, integrated with a **local AI assistant using Ollama**.<br>
This project helps manage patient records, doctor details, and appointments efficiently and includes **custom security features using Spring Security**.


---

## 🔹 Features

- **Patient Management:** Add, update, view, and delete patient records.
- **Doctor Management:** Maintain doctor details and schedules.
- **Appointments:** Book, track, and manage appointments easily.
- **AI Assistant:** Ask medical-related questions for educational purposes.
- **Custom Security:** Integrated **spring security** for authentication and authorization.
- **User-friendly UI:** Responsive and clean interface.
- **Secure Data Handling:** Backend APIs handle operations securely.
- **Automation:** Reduces manual work by automating hospital operations.

---

## 🛠️ Technologies Used

- **Frontend:** Angular, HTML, CSS, TypeScript, Bootstrap
- **Backend:** Spring Boot, Java, RESTful APIs
- **Database:** MySQL 
- **AI Integration:** Ollama AI for hospital assistant
- **Security:** spring custom security integration
- **Other Tools:** Git, GitHub

---
## 📁 Project Structure
`````
Hospital-Management-System-with-AI-Assistant
│
├─ Backend/ # Spring Boot backend
│ ├─ src/main/java/... # Java source code
│ ├─ src/main/resources/... # application.properties, configs
│ └─ pom.xml # Maven build file
│
├─ Frontend/ # Angular frontend
│ ├─ src/app/... # Angular components, services
│ ├─ src/assets/... # Images, icons, etc.
│ └─ package.json # NPM dependencies
│
└─ README.md # Project documentation
`````
---
## 🔹 Setup Instructions

###  Clone the Repository

git bash
git clone https://github.com/arotechetan18/Hospital-Management-System-with-AI-Assistant-using-Springboot.git<br>
-cd Hospital-Management-System-with-AI-Assistant-using-Springboot
<br>
- **Backend:** <br>
cd Backend<br>
mvn clean install<br>
mvn spring-boot:Run
- **Frontend:** <br>
cd Frontend/Hospital_UI<br>
npm install<br>ng serve<br>
- **Ollama AI Assistant Setup:** <br>
## 🤖 AI Assistant Setup (Ollama)

This project uses **Ollama AI** for the hospital assistant.<br>
<b>Step 1: Install Ollama:</b>
Download and install Ollama from:
https://ollama.com <br>
<b>Step 2: Pull AI Model:</b> On cmd: ollama pull phi3<br>

---
## 🏗️ System Architecture

Angular Frontend  
⬇️ REST API  
Spring Boot Backend  
⬇️  
MySQL Database  
⬇️  
Ollama AI (Local LLM)

---
## 📦 Environment Requirements

- Java 17 
- Angular CLI
- Maven
- MySQL 
- Ollama (for AI assistant)
- Git

  
  ---
## 📚 Learning Outcomes
- Designed and developed a complete **full stack web application** from scratch
- Full-stack development using Angular & Spring Boot
- Designed backend following **Spring MVC architecture** with well-structured Controllers, Services, and Repositories
- REST API design and integration
- AI integration using local LLM (Ollama)
- Secure backend development with Spring Security
- Real-world hospital workflow understanding
---
## 🔐 Security Overview

- Custom Spring Security configuration
- Role-based access control
- Protected REST APIs
- Secure request handling
---
## 🗄️ Database Design

- Patient Table
- Doctor Table
- Appointment Table
- User Table
---
## ⚠️ AI Disclaimer

The AI assistant is for **educational and informational purposes only**.
It does not provide real medical diagnosis or treatment advice.
Always consult a qualified medical professional.













