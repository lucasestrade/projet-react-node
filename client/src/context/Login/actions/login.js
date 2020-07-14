export function login(email, password){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/login_check", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(res => res.json())
    .then(function(res){
        console.log(res);
        window.localStorage.setItem('jwt', res.token);
    })
}