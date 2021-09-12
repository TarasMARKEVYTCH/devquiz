const Question = require("../models/Result");

exports.createResult = (req, res, next) => {

    Question.pushResultInDB(req.body.result, parseInt(req.params.id, 10))
        .then(() => {
            res.status(200).json({ 
                message: "Result insert: OK",
                status: true 
            })
        })
        .catch((err) => res.status(500).json(err));

    // console.log(typeof parseInt(req.params.id, 10))

    // res.status(200).json({mesg: "gello"})

    // console.log("hi")

};