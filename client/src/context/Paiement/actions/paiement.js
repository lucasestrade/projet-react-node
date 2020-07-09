export function changePaiementStatus(status, transacId){
    fetch("http://localhost:8889/transactions/" + transacId, {
        method: "PUT",
        body: JSON.stringify({
            status: status,
        })
    }).then(res => res.json())
    .then(function(res){
    })
}