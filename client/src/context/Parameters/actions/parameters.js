export function getParametersInfo(callback) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    // mettre id
    fetch("http://localhost:5000/merchants/" + window.localStorage.getItem('merchantId'), {
        method: "GET",
        headers: headers
    }).then(res => res.json())
        .then(function (res) {
            callback(res);
        })
}

export function getCredential(callback) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    //TODO mettre l'url pour récupéré des info 
    fetch("http://localhost:5000/credentials/" + window.localStorage.getItem('merchantId'), {
        method: "GET",
        headers: headers
    }).then(res => res.json())
        .then(function (res) {
            callback(res);
        })
}

export function sendParameters(
    name,
    firstname,
    confirmation,
    annulation,
    kbis,
    email,
    contact,
    refund
) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    fetch("http://localhost:5000/merchants/" + window.localStorage.getItem("merchantId"), {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
            name: name,
            firstname: firstname,
            url_validation: confirmation,
            url_echec: annulation,
            kbis: kbis,
            email: email,
            contact: contact,
            repayment_currency: refund,
            verify: true
        })
    }).then(res => res.json())
        .then(function (res) {
        })
}

export function sendCredentials(
    public_key,
    secret_key
) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    fetch("http://localhost:5000/credentials/" + window.localStorage.getItem("merchantId"), {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
            client_token: public_key,
            client_secret: secret_key
        })
    }).then(res => res.json())
        .then(function (res) {
        })
}