export function getHistoryList() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    // TODO récupérer id du vendeur
    fetch("http://localhost:5000/transactions/1", {
        method: "GET",
        headers: headers
    }).then(res => res.json())
        .then(function (res) {
            return res
        })
}


export function sendRefund(price, idMerchand) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    // TODO récupérer id du vendeur
    fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            "status": "REFUND",
            "price": price,
            "MerchantId" : idMerchand
        })
    }).then(res => res.json())
        .then(function (res) {
        })
}
