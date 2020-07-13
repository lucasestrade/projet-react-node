export function getParametersInfo() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    // mettre id
    fetch("http://localhost:5000/merchants/1", {
        method: "GET",
        headers: headers
    }).then(res => res.json())
        .then(function (res) {
            return res
        })
}

export function getCredential() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + window.localStorage.getItem('jwt'));
    //TODO mettre l'url pour récupéré des info 
    fetch("http://localhost:5000/credentials/1", {
        method: "GET",
        headers: headers
    }).then(res => res.json())
        .then(function (res) {
            return res
        })
}