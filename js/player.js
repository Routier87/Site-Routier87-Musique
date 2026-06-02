function logout(){

    localStorage.clear();

    window.location.href="index.html";
}

function saveComment(songId){

    let textarea =
    document.getElementById(
        "comment-"+songId
    );

    let text =
    textarea.value.trim();

    if(text==="") return;

    let comments =
    JSON.parse(
        localStorage.getItem(songId)
    ) || [];

    comments.push(text);

    localStorage.setItem(
        songId,
        JSON.stringify(comments)
    );

    textarea.value="";

    loadComments(songId);
}

function loadComments(songId){

    let container =
    document.getElementById(
        "comments-"+songId
    );

    let comments =
    JSON.parse(
        localStorage.getItem(songId)
    ) || [];

    container.innerHTML="";

    comments.forEach(comment=>{

        container.innerHTML += `
        <div class="comment">
            💬 ${comment}
        </div>
        `;

    });

}

window.onload = ()=>{

    loadComments("song1");
    loadComments("song2");

};
