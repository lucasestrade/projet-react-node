export function getHistoryList(callback) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    // TODO récupérer id du vendeur
    fetch("http://localhost:5000/transactions?MerchantId=" + window.localStorage.getItem('merchantId'), {
        method: "GET",
        headers: headers
    }).then(res => res.json())
        .then(function (res) {
            callback(res);
        })
}


export function sendRefund(price, id) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    // TODO récupérer id du vendeur
    fetch("http://localhost:5000/transactions/" + id, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
            "status": "REFUND",
            "price": price
        })
    }).then(res => res.json())
        .then(function (res) {
        })
}
