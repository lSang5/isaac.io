window.onload = function() {
    var videoPath = localStorage.getItem("videoPath");
    document.getElementById("video-container").innerHTML=`
    <video id="video-player" class="video-player" controls>
    <source src="${videoPath}">
    Parece que tu navegador no permite visualizar el vídeo.
    </video>`
    
}

document.getElementById("lesson-end-button").addEventListener("click", (event) => {
    window.location.href = "index.html"
})

document.getElementById("lesson-name").innerHTML = localStorage.getItem("lessonName")