#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

// Display Name in Fancy Banner
console.log(
  chalk.cyan(
    boxen(
      figlet.textSync("Shreshth", { horizontalLayout: "fitted" }),
      {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "green",
      }
    )
  )
);

// Styling helpers
const heading = chalk.bold.blue;
const label = chalk.green;
const info = chalk.white;
const newline = "\n";

const resume = `

${heading("Name:")}         ${info("Shreshth Vishwakarma")}
${heading("Phone:")}        ${info("(+91) 8871955324")}
${heading("Email:")}        ${info("shreshth100vishwa@gmail.com")}
${heading("GitHub:")}       ${info("https://github.com/shreshth-v")}
${heading("LinkedIn:")}     ${info("https://linkedin.com/in/shreshth21")}

${heading("Professional Summary:")}
  ${info("Full Stack Developer with 1+ year of experience building scalable web applications using the MERN stack.")}
  ${info("Proven track record in data-intensive healthcare platforms and real-time systems.")}

${heading("Technical Skills:")}
  ${label("- Languages:")}         JavaScript
  ${label("- Frontend:")}          React.js, Redux Toolkit, HTML5, CSS3, Tailwind CSS
  ${label("- Backend:")}           Node.js, Express.js, RESTful APIs
  ${label("- Database:")}          MongoDB, Mongoose
  ${label("- Tools:")}             Git, GitHub
  ${label("- Cloud Services:")}    MongoDB Atlas, Vercel, Render

${heading("Experience:")}
  ${chalk.underline("Argusoft (Jul 2023 – Jul 2024)")} | Programmer Analyst (Full Stack Developer) | Gandhinagar, India
  - Built a system in MEDplat’s eKavach to detect and resolve duplicate patient records with 70–80% similarity.
  - Scanned 100K records/run from a 200M+ record database.
  - Implemented drag-and-drop UI for FHS to merge/update member and service data.
  - Resolved 1.7M+ duplicate entries, improving data integrity and performance.
  - Developed Sewa Rural dashboard to monitor 50K+ NCD patients by recovery status.
  - Used Chart.js and react-simple-maps for interactive data visualization.
  - Enabled dynamic filters by disease, recovery, and location.
  - ${label("Tech Stack:")} React.js, Redux Toolkit, Node.js, Express.js, MongoDB, react-beautiful-dnd, react-simple-maps, Chart.js

${heading("Project:")}
  ${chalk.underline("NexaChat | AI-Powered Real-Time Chat App")}
  - Built real-time chat app using MERN + WebSocket (Socket.io).
  - Features: JWT Auth, 1-on-1 & group chats, admin controls, AI responses.
  - Media sharing via Cloudinary (images/files).
  - ${label("Deployed:")} Vercel (Frontend), Render (Backend), MongoDB Atlas
  - ${label("Tech Stack:")} React.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, Socket.io, JWT

${heading("Education:")}
  B.Tech in Electrical and Electronics Engineering (2019 – 2023)
  Sagar Institute of Research & Technology, Bhopal (M.P.)

`;

console.log(resume);
