export function changePaiementStatus(status, transacId){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/transactions/" + transacId, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
            status: status,
        })
    }).then(res => res.json())
    .then(function(res){
    })
}

/*export function getMerchantTokenByTransac(transacId, callback){
    fetch("http://localhost:5000/transactions/" + transacId, {
        method: "GET"
    }).then(res => res.json())
    .then(function(res){
        return res.token;
    })
}*/