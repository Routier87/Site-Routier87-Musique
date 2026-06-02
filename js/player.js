function logout(){
    localStorage.clear();
    window.location.href="index.html";
}

/* =========================
   UTILISATEUR CONNECTÉ
========================= */

const currentUser =
    localStorage.getItem("username") || "guest";

/* =========================
   LIKES / DISLIKES / FAVORIS
========================= */

function toggleLike(songId){

    let data = getSongData(songId);

    data.like = !data.like;
    data.dislike = false;

    saveSongData(songId, data);
    updateUI(songId);
}

function toggleDislike(songId){

    let data = getSongData(songId);

    data.dislike = !data.dislike;
    data.like = false;

    saveSongData(songId, data);
    updateUI(songId);
}

function toggleFavorite(songId){

    let data = getSongData(songId);

    data.favorite = !data.favorite;

    saveSongData(songId, data);
    updateUI(songId);
}

/* =========================
   COMMENTAIRES
========================= */

function saveComment(songId){

    let textarea =
        document.getElementById("comment-" + songId);

    let text = textarea.value.trim();

    if(text === "") return;

    let data = getSongData(songId);

    data.comments.push({
        user: currentUser,
        text: text
    });

    saveSongData(songId, data);

    textarea.value = "";

    loadComments(songId);
}

function loadComments(songId){

    let container =
        document.getElementById("comments-" + songId);

    let data = getSongData(songId);

    container.innerHTML = "";

    data.comments.forEach(c => {

        container.innerHTML += `
        <div class="comment">
            <b>${c.user}</b> 💬 ${c.text}
        </div>
        `;
    });
}

/* =========================
   STOCKAGE LOCAL
========================= */

function getSongData(songId){

    let data = JSON.parse(
        localStorage.getItem(songId)
    );

    if(!data){

        data = {
            like:false,
            dislike:false,
            favorite:false,
            comments:[]
        };

    }

    return data;
}

function saveSongData(songId, data){

    localStorage.setItem(
        songId,
        JSON.stringify(data)
    );
}

/* =========================
   UPDATE UI (icônes)
========================= */

function updateUI(songId){

    let data = getSongData(songId);

    let likeBtn = document.getElementById("like-" + songId);
    let dislikeBtn = document.getElementById("dislike-" + songId);
    let favBtn = document.getElementById("fav-" + songId);

    if(likeBtn)
        likeBtn.style.color = data.like ? "green" : "white";

    if(dislikeBtn)
        dislikeBtn.style.color = data.dislike ? "red" : "white";

    if(favBtn)
        favBtn.style.color = data.favorite ? "gold" : "white";
}

/* =========================
   INIT PAGE
========================= */

window.onload = () => {

    ["song1", "song2"].forEach(songId => {

        loadComments(songId);
        updateUI(songId);

    });

};
