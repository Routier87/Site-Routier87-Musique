const users = [

{
    username: "Samantha",
    password: "Drouet",
    page: "samantha.html"
},

{
    username: "Océane",
    password: "Oceane870",
    page: "oceane.html"
},

{
    username: "Chicco",
    password: "2026",
    page: "chicco.html"
},

{
    username: "Christian",
    password: "2026",
    page: "christian.html"
},

{
    username: "Farm",
    password: "freddy123",
    page: "farm.html"
},

{
    username: "Benjamin",
    password: "2026",
    page: "benjamin.html"
},

{
    username: "Routier87",
    password: "878787",
    page: "routier87.html"
}

];

function login() {

    let username =
        document.getElementById("user").value.trim();

    let password =
        document.getElementById("pass").value.trim();

    let user = users.find(

        u =>
        u.username === username &&
        u.password === password

    );

    if (user) {

        localStorage.setItem(
            "connected",
            "true"
        );

        localStorage.setItem(
            "username",
            user.username
        );

        localStorage.setItem(
            "role",
            user.username === "Routier87"
                ? "admin"
                : "user"
        );

        window.location.href =
            user.page;

    } else {

        alert(
            "Nom d'utilisateur ou mot de passe incorrect."
        );

    }

}
