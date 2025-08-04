

## 📌 User Authentication System with Security Logging (Internship Project)

This project is part of a 3-week cybersecurity internship focusing on secure web development, vulnerability assessment, and logging best practices. It implements a basic user authentication system with secure password hashing, input validation, JWT tokens, and security logging using Winston.

---

## 📅 Internship Breakdown

### ✅ Week 1 – Security Assessment of Vulnerable App

* Explored OWASP Juice Shop and a mock vulnerable app.
* Performed vulnerability scanning using **OWASP ZAP** and manual tests.
* Identified common web vulnerabilities (XSS, SQLi).
* Documented security flaws and areas for improvement.

### ✅ Week 2 – Building a Secure Authentication App

* Created a simple **Node.js + Express** app with:

  * Input validation using `validator`
  * Password hashing with `bcrypt`
  * JWT token authentication via `jsonwebtoken`
  * Security headers using `helmet`
* Designed `/register` and `/login` routes.
* Prevented bad input, duplicate users, and weak authentication.

### ✅ Week 3 – Logging & Monitoring

* Integrated **Winston logger** for:

  * Login and registration attempts
  * Warning logs for suspicious inputs
  * Error handling logs
* Created a `security.log` file to monitor system activity.
* Tested the app using `curl` and validated log output.

---

## 🧠 Features

* 📧 Email validation (e.g., prevents `bad@.email`)
* 🔐 Password hashing with `bcrypt`
* 🎫 JWT token for login sessions
* 🧱 Security headers via `helmet`
* 📜 Logging with Winston (console + file logs)

---

## 🚀 How to Run

1. **Clone the repo**:

```bash
git clone https://github.com/YOUR_USERNAME/internshipDHC.git
cd internshipDHC
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start the server**:

```bash
node app.js
```

4. **Test registration with `curl`**:

```bash
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{"email":"test@example.com", "password":"secure123"}'
```

5. **Check security logs**:

```bash
cat security.log
```

---

## 📂 Files

| File           | Description                        |
| -------------- | ---------------------------------- |
| `app.js`       | Main application code              |
| `security.log` | Log file created by Winston logger |
| `README.md`    | Project documentation              |

---

## 🔒 Tools & Libraries

* Node.js
* Express
* bcrypt
* validator
* jsonwebtoken
* helmet
* winston

---

## 👤 Author

**Laiba Arif**
Cybersecurity Intern | August 2025




