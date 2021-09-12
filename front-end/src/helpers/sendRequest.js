export function sendRequest(url, method, body = null) {

    if (method === "GET" || method === "DELETE") {

        let options = {
            method,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            credentials: "include",
        };

        return fetch(url, options)
            .then((res) => {
                return res.json();
            })
            .catch((err) => err)

    } else {

        let options = {
            method,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: body !== null ? JSON.stringify(body) : null, // si body null on fait pas JSON.stringify
            credentials: "include",
        };

        return fetch(url, options)
            .then((res) => {
                return res.json();
            })
            .catch((err) => err)

    }

}