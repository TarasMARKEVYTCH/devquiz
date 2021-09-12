  
const express = require("express");
const router = express.Router();

const resultCtrl = require("../controllers/result");

// http://localhost:3000/api/result/categorie/:id/
router.post("/categorie/:id", resultCtrl.createResult);

module.exports = router;