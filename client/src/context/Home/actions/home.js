export function sendSeller1Basket(price){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            status: "ENCOURS",
            price: price,
            MerchantId: 1
        })
    }).then(res => res.json())
    .then(function(res){
        window.localStorage.setItem("dzeafzefzae", JSON.stringify({
            price: 12,
            validation_url: "/validate_paiement/validationurl",
            cancel_url : "/cancel_paiement/cancelurl"
        }))
        window.location = "/paiement/dzeafzefzae";
    })
    /*.catch(function(){
        window.localStorage.setItem("dzeafzefzae", JSON.stringify({
            price: 12,
            validation_url: "/validate_paiement/validationurl",
            cancel_url : "/cancel_paiement/cancelurl"
        }))
        window.location = "/paiement/dzeafzefzae";
    })*/
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
            MerchantId: 1
        })
    }).then(res => res.json())
    .then(function(res){
        window.localStorage.setItem("dzeafzefzae", JSON.stringify({
            price: 12,
            validation_url: "/validate_paiement/validationurl",
            cancel_url : "/cancel_paiement/cancelurl"
        }))
        window.location = "/paiement/dzeafzefzae";
    })
    /*.catch(function(){
        window.localStorage.setItem("dzeafzefzae", JSON.stringify({
            price: 12,
            validation_url: "/validate_paiement/validationurl",
            cancel_url : "/cancel_paiement/cancelurl"
        }))
        window.location = "/paiement/dzeafzefzae";
    })*/
}