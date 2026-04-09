const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const app = express();

// middleware
app.use(cookieParser());

// CSRF protection
const csrfProtection = csrf({ cookie: true });

// route with CSRF
app.get('/', csrfProtection, (req, res) => {
  res.send("Hello DevSecOps 🚀 Secure App");
});

app.listen(3000, () => console.log("Server running"));