if(
    localStorage.getItem("connected")
    !== "true"
){
    window.location.href =
        "index.html";
}

function logout(){

    localStorage.removeItem(
        "connected"
    );

    window.location.href =
        "index.html";
}
