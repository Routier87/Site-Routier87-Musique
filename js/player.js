function logout(){

    localStorage.clear();

    window.location.href = "index.html";
}

/* =========================
   COMMENTAIRES
========================= */

function saveComment(songId){

    let textarea =
    document.getElementById(
        "comment-" + songId
    );

    let text =
    textarea.value.trim();

    if(text === "") return;

    let comments =
    JSON.parse(
        localStorage.getItem(songId)
    ) || [];

    comments.push(text);

    localStorage.setItem(
        songId,
        JSON.stringify(comments)
    );

    textarea.value = "";

    loadComments(songId);
}

function loadComments(songId){

    let container =
    document.getElementById(
        "comments-" + songId
    );

    if(!container) return;

    let comments =
    JSON.parse(
        localStorage.getItem(songId)
    ) || [];

    container.innerHTML = "";

    comments.forEach(comment => {

        container.innerHTML += `
        <div class="comment">
            💬 ${comment}
        </div>
        `;

    });

}

/* =========================
   BOUTONS ADMIN ROUTIER87
========================= */

function addMusic(){

    alert(
        "➕ Fonction Ajouter une musique (à développer)"
    );

}

function manageUsers(){

    alert(
        "👥 Fonction Gestion des utilisateurs (à développer)"
    );

}

function viewStats(){

    alert(
        "📊 Fonction Statistiques (à développer)"
    );

}

/* =========================
   CHARGEMENT PAGE
========================= */

window.onload = () => {

    loadComments("song1");
    loadComments("song2");

};
