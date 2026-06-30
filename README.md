# 🚀 Research Assistant

An **AI-powered Research Assistant** built with **Java** and **Spring Boot** that integrates with **Google Gemini AI** to generate research summaries and answer user queries.

The application exposes REST APIs that can be consumed by a Chrome Extension, web application, or any frontend client.

---

## ✨ Features

- AI-powered research using Google Gemini
- RESTful API built with Spring Boot
- Accepts natural language research queries
- Generates concise and structured research summaries
- Integration with Google Gemini API using Spring WebClient
- Clean layered architecture (Controller → Service)

---

## 🛠️ Tech Stack

- Java 17
- Spring Boot
- Spring Web
- Spring WebClient
- Maven
- Google Gemini API
- REST APIs

---

## 📂 Project Structure

```text
ai-research-assistant/
│
├── backend/
│   ├── src/
│   └── pom.xml
│   └── ...
│
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   ├── background.js
│   ├── content.js
│   └── icons/
│   └── ...
│
├── README.md
└── .gitignore
```

---

## 📋 Prerequisites

Before running the application, ensure you have:

- Java 17 or later
- Maven
- Google Gemini API Key

---

## ⚙️ Configuration

Add your Gemini API key to `application.properties`.

```properties
gemini.api.key=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your actual API key.

---

## ▶️ Running the Application

Clone the repository

```bash
git clone https://github.com/princechauhan27/research-assistant.git
```

Navigate to the project directory

```bash
cd research-assistant
```

Run the application

**Linux/macOS**

```bash
./mvnw spring-boot:run
```

**Windows**

```bash
mvnw.cmd spring-boot:run
```

The application will start at:

```
http://localhost:8080
```

---

## 📌 API Documentation

### Generate Research

**POST** `/research`

### Sample Request

```json
{
   "content":"Virat Kohli[b] (born 5 November 1988) is an Indian international cricketer and the former all-format captain of the Indian national cricket team. He is a right-handed batter and occasional right-arm medium-pace bowler. Considered one of the greatest batsmen in limited overs cricket, he has been acclaimed for his batting skills and records. Kohli has the most centuries in ODIs and the second-most centuries in international cricket with 85 tons across all formats.He has won World Cup, 2013 Champions Trophy, 2024 T20 World Cup, and 2025 Champions Trophy. He plays for Royal Challengers Bengaluru in the Indian Premier League and for Delhi in domestic cricket. In 2013, Kohli was ranked number one in the ODI batting rankings. In 2015, he achieved the same in T20I. Kohli was named the Wisden Leading Cricketer in the World for three consecutive years.",
    "operation":"summarize"
}
```

### Sample Response

```json
{
  "response": "Virat Kohli is an International Cricket Player who plays for India across all Formats of the game. He is regarded as one of the best to ever play the game and has won numerous accolades.."
}
```

---

## 🚀 Future Improvements

- Conversation history
- Authentication and Authorization
- Research citations and references
- PDF export
- Database integration
- React frontend
- Multiple AI model support

---

## 👨‍💻 Author

**Prince Chauhan**

---

## 📄 License

This project is intended for educational and learning purposes.
