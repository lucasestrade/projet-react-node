export function submit(datas){
    let name = datas.name;
    let firstname = datas.firstname;
    let email = datas.email;
    let password = datas.password;

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5000/users", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            name: name,
            firstname: firstname,
            email: email,
            password: password,
            role: "MERCHANT"
        })
    }).then(res => res.json())
    .then(function(res){
    })
}