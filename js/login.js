function login(){

    const user =
        document.getElementById("user").value;

    const pass =
        document.getElementById("pass").value;

    if(user === "demo" && pass === "1234"){

        localStorage.setItem(
            "connected",
            "true"
        );

        window.location.href =
            "dashboard.html";

    }else{

        alert(
            "Identifiant ou mot de passe incorrect"
        );

    }
}
