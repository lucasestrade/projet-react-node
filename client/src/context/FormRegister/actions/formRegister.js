export function submit(datas, callback){
    let name = datas.name;
    let firstname = datas.firstname;
    let email = datas.email;
    let password = datas.password;
    let contact = datas.contact;
    let confirmation = datas.url_validation;
    let annulation = datas.url_echec;
    let refund = datas.repayment_currency;

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/merchants", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            name: name,
            firstname: firstname,
            email: email,
            password: password,
            contact: contact,
            url_validation: confirmation,
            url_echec: annulation,
            repayment_currency: refund,
            role: "MERCHANT"
        })
    }).then(res => res.json())
    .then(function(res){
        callback(name);
    })
}

export function postCredentials(name){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/merchants?name=" + name, {
        method: "GET",
        headers: headers,
    }).then(res => res.json())
    .then(function(res){
            fetch("http://localhost:5000/credentials", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                "client_token": "test_client_token",
                "client_secret": "test_client_secret",
                "MerchantId": res[0].id
            })
        }).then(res => res.json())
        .then(function(res){
        })
    })
}