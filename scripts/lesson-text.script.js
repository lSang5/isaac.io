document.getElementById("lesson-end-button").addEventListener("click", (event) => {
    window.location.href = "index.html"
})

document.getElementById("lesson-name").innerHTML = localStorage.getItem("lessonName")

fetch(localStorage.getItem("textPath"))
        .then(response => response.text())
        .then(data => {
            const linesArray = data.split(/\r?\n/)
            document.getElementById("lesson-text").innerHTML = linesArray[0]
        })



//List with the lesson's texts.
localStorage.setItem("curIndex", "0")
document.getElementById("text-lesson-player-button-next").addEventListener("click",(event) => {
    const textFile = localStorage.getItem("textPath")
    fetch(textFile)
        .then(response => response.text())
        .then(data => {
            const linesArray = data.split(/\r?\n/)
            const curIndex = parseInt(localStorage.getItem("curIndex"))
            const newText = linesArray[moveList(linesArray,1,curIndex)]
            document.getElementById("lesson-text").innerHTML = newText
            localStorage.setItem("curIndex", moveList(linesArray,1,curIndex).toString())
        })

})

document.getElementById("text-lesson-player-button-previous").addEventListener("click",(event) => {
    const textFile = localStorage.getItem("textPath")
    fetch(textFile)
        .then(response => response.text())
        .then(data => {
            const linesArray = data.split(/\r?\n/)
            const curIndex = parseInt(localStorage.getItem("curIndex"))
            const newIndex = moveList(linesArray,0,curIndex)
            const newText = linesArray[newIndex]
            document.getElementById("lesson-text").innerHTML = newText
            localStorage.setItem("curIndex", newIndex.toString())
    
        })

})

function moveList(list, direction, curIndex) {
    if (direction === 1) {
        if (curIndex + 1 < list.length) {
            return curIndex + 1
        }else {
            return curIndex
        }
    }else if (direction === 0) {
        if (curIndex > 0) {
            return curIndex - 1
        }else {
            return curIndex
        }
    }
}