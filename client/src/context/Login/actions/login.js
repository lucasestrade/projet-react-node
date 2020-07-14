export function login(email, password, admin){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let url;
    admin ? url = "http://localhost:5000/login_check" : url = "http://localhost:5000/login_merchant_check";
    fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(res => res.json())
    .then(function(res){
        if(res.isConnected){
            window.localStorage.setItem('jwt', res.token);
            if(admin){
                window.localStorage.setItem('adminId', res.id);
                window.localStorage.setItem('isAdmin', true);
            }else{
                window.localStorage.setItem('merchantId', res.id)
                window.localStorage.setItem('isAdmin', false);
            }
            window.location = "/dashboard";
        }
    })
}