const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const faq = [
  {
    question: "refund",
    answer: "Refunds are available within 30 days with proof of purchase."
  },
  {
    question: "shipping",
    answer: "Shipping usually takes 3–5 business days."
  },
  {
    question: "support",
    answer: "You can contact support at support@example.com."
  }
];

app.post("/api/chat", (req, res) => {

  const message = req.body.message.toLowerCase();

  let reply = "Sorry, I couldn't find an answer. Please contact support.";

  for (let item of faq) {
    if (message.includes(item.question)) {
      reply = item.answer;
      break;
    }
  }

  res.json({ reply });

});

app.listen(5000, () => {
  console.log("Chatbot backend running on port 5000");
});