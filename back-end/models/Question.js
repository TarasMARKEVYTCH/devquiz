// const mysql = require("mysql");
const pool = require("./config.js"); //config for connection in DataBase

exports.getQuestionByCategorie = (id) => {
    return new Promise((resolve, reject) => {

        pool.query(
            `SELECT 
            q.id,
            q.description, 
            q.url_image, 
            q.textAnswer1, 
            q.textAnswer2, 
            q.textAnswer3, 
            q.textAnswer4, 
            cq.categorie_name 
            FROM questions q 
            LEFT JOIN categories_question cq ON q.categorie_id=cq.id 
            WHERE cq.id=${pool.escape(id)}`,
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            }
        );

    });
};

exports.oneQuestionById = (id) => {
    return new Promise((resolve, reject) => {

        pool.query(
            `SELECT * FROM questions q 
            LEFT JOIN categories_question cq ON q.categorie_id=cq.id 
            WHERE q.id=${pool.escape(id)}`,
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            }
        );

    });
};