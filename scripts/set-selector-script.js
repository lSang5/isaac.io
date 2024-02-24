const setsData = [
    {
        "id": "set-1-multipl",
        "name": "¿Sabes multiplicar?",
        "special": 0,
        "lessonNumber": 3,
        "lessons": [
            {
                "id": "set-1-1",
                "name": "Introducción",
                "duration": 0,
                "type": "text",
                "data": "resources/course-data/text-data/lesson1-1"
            },
            {
                "id": "set-1-2",
                "name": "Aula de Clases",
                "duration": 0,
                "type": "video",
                "data": "resources/course-data/video/example.mp4"
            },
            {
                "id": "set-1-3",
                "name": "La Paga",
                "duration": 0,
                "type": "text",
                "data": "resources/course-data/text-data/lesson1-3"
            },
        ]
    },
    {
        "id": "set-2-media",
        "name": "En Medio",
        "special": 0,
        "lessonNumber": 3,
        "lessons": [
            {
                "id": "set-2-1",
                "name": "Introducción",
                "duration": 0,
                "type": "text",
                "data": "resources/course-data/lesson2-1"
            },
            {
                "id": "set-2-2",
                "name": "Nota Media",
                "duration": 0,
                "type": "text",
                "data": "resources/course-data/lesson2-2"
            },
            {
                "id": "set-2-3",
                "name": "Alturas",
                "duration": 0,
                "type": "text",
                "data": "resources/course-data/lesson2-3"
            }
        ]
    },
    {
        "id": "set-3-hist",
        "name": "¡Extra!: historia curiosa",
        "special": 1,
        "lessonNumber": 0,
        "lessons": [
            {
                "id": "lesson-1",
                "name": "Lección 1",
                "duration": 0,
                "type": "video",
                "data": "resources/course-data/videos/example-2.mp4"
            },
        ]
    },
    {
        "id": "set-4-areas",
        "name": "Recto y Cuadrado",
        "special": 0,
        "lessonNumber": 0,
        "lessons": [
            {
                "id": "lesson-1",
                "name": "Lección 1",
                "duration": 0,
                "type": "video",
                "data": "resources/course-data/videos/example-2.mp4"
            },
        ]
    },
    {
        "id": "set-5-curvas",
        "name": "¡Que vienen curvas!",
        "special": 0,
        "lessonNumber": 0,
        "lessons": [
            {
                "id": "lesson-1",
                "name": "Lección 1",
                "duration": 0,
                "type": "video",
                "data": "resources/course-data/videos/example-2.mp4"
            },
        ]
    },
    {
        "id": "set-6-fisica",
        "name": "¡Extra!: física asombrosa",
        "special": 1,
        "lessonNumber": 0,
        "lessons": [
            {
                "id": "lesson-1",
                "name": "Lección 1",
                "duration": 0,
                "type": "video",
                "data": "resources/course-data/videos/example-2.mp4"
            },
        ]
    },
    {
        "id": "set-7-velocidad",
        "name": "Velocidad y rapidez",
        "special": 0,
        "lessonNumber": 0,
        "lessons": [
            {
                "id": "lesson-1",
                "name": "Lección 1",
                "duration": 0,
                "type": "video",
                "data": "resources/course-data/videos/example-2.mp4"
            },
        ]
    },
    {
        "id": "set-8-velocidad-circ",
        "name": "Como gato encerrado",
        "special": 0,
        "lessonNumber": 0,
        "lessons": [
            {
                "id": "lesson-1",
                "name": "Lección 1",
                "duration": 0,
                "type": "video",
                "data": "resources/course-data/videos/example-2.mp4"
            },
        ]
    },
    {
        "id": "set-9-videojuegos",
        "name": "¡Extra!: matemáticas y videojuegos",
        "special": 1,
        "lessonNumber": 0,
        "lessons": [
            {
                "id": "lesson-1",
                "name": "Lección 1",
                "duration": 0,
                "type": "video",
                "data": "resources/course-data/videos/example-2.mp4"
            },
        ]
    },

]

setsData.forEach((element, index) => {
    //Add the course.
    const generatedHTMLCourse = `
    <div class="set-container" id="set-container-${element.id}">
        <div class="set-data" id="set-data-${element.id}">
            <p class="nombreset-label" id="nombreset-label-${element.id}">${element.name}</p>
            <p class="numlecciones-label" id="numlecciones-label${element.id}">${element.lessonNumber} lecciones</p>
        </div>
        <div class="lessons-container" id="lessons-container-${element.id}">
    </div>
    `
    document.getElementById("set-list").innerHTML += generatedHTMLCourse

    if (element.special === 1) {
        document.getElementById(`set-container-${element.id}`).classList.add("set-special")
    }

    //Add the lessons to the course.
    setTimeout(() => {
        document.getElementById(`set-container-${element.id}`).addEventListener("mouseenter", function(event){
            element.lessons.forEach((lessonElement, lessonIndex) => {
                document.getElementById(`lessons-container-${element.id}`).innerHTML += `<div class="lesson-container" id="lesson-container-${lessonElement.id}">
                <p class = "namelesson-label" id="namelesson-label-${lessonElement.id}">${lessonElement.name}</p>
                <p class = "durlesson-label" id="durlesson-label-${lessonElement.id}">Duracción Estimada: ${lessonElement.duration} minutos</p>
                </div>`
                if (element.special === 1) {
                    document.getElementById(`lesson-container-${lessonElement.id}`).classList.add("lesson-special")
                }
                setTimeout(() => {
                    document.getElementById(`lesson-container-${lessonElement.id}`).addEventListener("click", (event) => {
                        if (lessonElement.type === "video")
                        {
                            window.localStorage.setItem("videoPath", lessonElement.data)
                            localStorage.setItem("lessonName", lessonElement.name)
                            window.location.href = "lesson-video-page.html"
                        }

                        if (lessonElement.type === "text")
                        {
                            window.localStorage.setItem("textPath", lessonElement.data)
                            localStorage.setItem("lessonName", lessonElement.name)
                            window.location.href = "lesson-text-page.html"
                        }
                    })
                }, 0)
                setTimeout(() => {
                    document.getElementById(`lesson-container-${lessonElement.id}`).classList.add("generated")
                }, 100)
            })
            //Add transition at start.
        })
        document.getElementById(`set-container-${element.id}`).addEventListener("mouseleave", function(event){
            document.getElementById(`lessons-container-${element.id}`).innerHTML = ""
        })
    }, 0)

})

