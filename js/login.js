const users = [
    {
        username: "Samantha",
        password: "2026"
    },
    {
        username: "Océane",
        password: "2026"
    },
    {
        username: "Chicco",
        password: "2026"
    },
    {
        username: "Christian",
        password: "2026"
    },
    {
        username: "Routier87",
        password: "878787",
        role: "admin"
    }
];

function login() {

    const username = document
        .getElementById("user")
        .value
        .trim();

    const password = document
        .getElementById("pass")
        .value
        .trim();

    const user = users.find(
        u =>
        u.username === username &&
        u.password === password
    );

    if (!user) {
        alert("Identifiant ou mot de passe incorrect");
        return;
    }

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
        user.role || "user"
    );

    window.location.href =
        "dashboard.html";
}
