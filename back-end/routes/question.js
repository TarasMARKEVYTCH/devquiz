  
const express = require("express");
const router = express.Router();

const questionCtrl = require("../controllers/question");

// http://localhost:3000/api/question/categorie/:id/
router.get("/categorie/:id", questionCtrl.oneQuestionByCategorie);
// http://localhost:3000/api/question/:id/
router.post("/:id", questionCtrl.verficationQuestion)

module.exports = router;