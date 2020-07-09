export function sendSeller1Basket(price){
    fetch("http://localhost:8889/transactions", {
        method: "POST",
        body: JSON.stringify({
            status: "ENCOURS",
            price: price,
            MerchantId: 1
        })
    }).then(res => res.json())
    .then(function(res){
        window.location = "/paiement/dzeafzefzae";
    })
    .catch(function(){
        window.localStorage.setItem("dzeafzefzae", JSON.stringify({
            price: 12,
            validation_url: "/validate_paiement/validationurl",
            cancel_url : "/cancel_paiement/cancelurl"
        }))
        window.location = "/paiement/dzeafzefzae";
    })
}

export function sendSeller2Basket(price){
    fetch("http://localhost:8889/transactions", {
        method: "POST",
        body: JSON.stringify({
            status: "ENCOURS",
            price: price,
            MerchantId: 1
        })
    }).then(res => res.json())
    .then(function(res){
        window.location = "/paiement/dzeafzefzae";
    })
    .catch(function(){
        window.localStorage.setItem("dzeafzefzae", JSON.stringify({
            price: 12,
            validation_url: "/validate_paiement/validationurl",
            cancel_url : "/cancel_paiement/cancelurl"
        }))
        window.location = "/paiement/dzeafzefzae";
    })
}