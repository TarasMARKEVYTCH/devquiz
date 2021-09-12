const pool = require("./config.js"); //config for connection in DataBase

exports.pushResultInDB = (result, categories) => {
    return new Promise((resolve, reject) => {

        pool.query(
            `INSERT INTO results(user_id, categorie_id, score)
            VALUES (1, ${pool.escape(categories)}, ${pool.escape(result)});`,
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