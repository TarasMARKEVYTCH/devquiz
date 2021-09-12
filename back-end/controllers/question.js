const Question = require("../models/Question");

exports.oneQuestionByCategorie = (req, res, next) => {

    Question.getQuestionByCategorie(parseInt(req.params.id, 10))
        .then((object) => {
            function getRandom(min, max) {
                return Math.round(Math.random() * (max - min) + min);
            }

            let i = getRandom(0, 1)

            console.log(i)

            res.status(200).json(object[i])
        })
        .catch((err) => res.status(500).json(err));

    // console.log(typeof parseInt(req.params.id, 10))

    // res.status(200).json({mesg: "gello"})

    // console.log("hi")

};


exports.verficationQuestion = (req, res, next) => {

    console.log(req.body)

    Question.oneQuestionById(parseInt(req.params.id, 10))
        .then((object) => {

            console.log(object[0])

            if (
                req.body.var1 == object[0].answer1 &&
                req.body.var2 == object[0].answer2 &&
                req.body.var3 == object[0].answer3 &&
                req.body.var4 == object[0].answer4
            ) {
                res.status(200).json({ point: 1 })
            } else {
                res.status(200).json({ point: 0 })
            }
        })
        .catch((err) => res.status(500).json(err));

};
