export function getPrices(callback){
    let headers = new Headers();
    let merchantId = window.localStorage.getItem("merchantId");
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/transactions/stats?merchantId=" + merchantId, {
        method: "GET",
        headers: headers
    }).then(res => res.json())
    .then(function(res){
        callback(res.prices);
    })
}

export function getTransacPerDate(callback){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/transactions/stats/date", {
        method: "GET",
        headers: headers
    }).then(res => res.json())
    .then(function(res){
        callback(res);
    }).catch(function(res){
        console.log(res);
    })
}