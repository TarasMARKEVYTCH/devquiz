  
const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/question");

// http://localhost:3000/api/question/categorie/:id/
router.get("/categorie/:id", postCtrl.oneQuestionByCategorie);
// http://localhost:3000/api/question/:id/
router.post("/:id", postCtrl.verficationQuestion)

module.exports = router;