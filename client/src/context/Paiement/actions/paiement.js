export function changePaiementStatus(status, transacId, token){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + token);
    fetch("http://localhost:5000/secure/transactions/" + transacId, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
            status: status,
        })
    }).then(res => res.json())
    .then(function(res){
    })
}

export function getMerchantTokenByTransac(transacId){
    fetch("http://localhost:5000/transactions/" + transacId, {
        method: "GET"
    }).then(res => res.json())
    .then(function(res){
        return res.token;
    })
}