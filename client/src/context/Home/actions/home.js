export function sendSeller1Basket(price){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            status: "ENCOURS",
            price: price,
            MerchantId: 7
        })
    }).then(res => res.json())
    .then(function(res){
        window.localStorage.setItem(res.id, JSON.stringify({
            price: res.price,
            validation_url: "/validate_paiement/" + res.url_validation,
            cancel_url : "/cancel_paiement/" + res.url_echec
        }))
        window.location = "/paiement/" + res.id;
    })
}

export function sendSeller2Basket(price){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            status: "ENCOURS",
            price: price,
            MerchantId: 7
        })
    }).then(res => res.json())
    .then(function(res){
        window.localStorage.setItem(res.id, JSON.stringify({
            price: res.price,
            validation_url: "/validate_paiement/" + res.url_validation,
            cancel_url : "/cancel_paiement/" + res.url_echec
        }))
        window.location = "/paiement/" + res.id;
    })
}