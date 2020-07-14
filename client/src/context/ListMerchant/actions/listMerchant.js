export function getMerchants(callback){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/merchants", {
        method: "GET",
        headers: headers
    }).then(res => res.json())
    .then(function(res){
        callback(res);
    })
}

export function verifyMerchant(id){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/merchants/" + id, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
            verify: "true"
        })
    }).then(res => res.json())
    .then(function(res){
    })
}