const users = [

{
    username:"Samantha",
    password:"2026",
    page:"samantha.html"
},

{
    username:"Océane",
    password:"2026",
    page:"oceane.html"
},

{
    username:"Chicco",
    password:"2026",
    page:"chicco.html"
},

{
    username:"Christian",
    password:"2026",
    page:"christian.html"
},

{
    username:"Routier87",
    password:"878787",
    page:"routier87.html"
}

];

function login(){

    let username =
    document.getElementById("user").value;

    let password =
    document.getElementById("pass").value;

    let user =
    users.find(

        u =>
        u.username === username &&
        u.password === password

    );

    if(user){

        localStorage.setItem(
            "connected",
            "true"
        );

        localStorage.setItem(
            "username",
            user.username
        );

        window.location.href =
            user.page;

    }

    else{

        alert(
            "Nom d'utilisateur ou mot de passe incorrect."
        );

    }

}
