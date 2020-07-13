export function getPrices(){

    return [1,2,2,2,2,2,2,2];

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/transactions/stats?merchantId=1", {
        method: "GET",
        headers: headers
    }).then(res => res.json())
    .then(function(res){
        return res.prices;
    })
}