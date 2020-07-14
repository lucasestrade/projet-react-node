export function getParametersInfo() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    // mettre id
    fetch("http://localhost:5000/merchants/1", {
        method: "GET",
        headers: headers
    }).then(res => res.json())
        .then(function (res) {
            return res
        })
}

export function getCredential() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    //TODO mettre l'url pour récupéré des info 
    fetch("http://localhost:5000/credentials/1", {
        method: "GET",
        headers: headers
    }).then(res => res.json())
        .then(function (res) {
            return res
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
    fetch("http://localhost:5000/merchants", {
        method: "POST",
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