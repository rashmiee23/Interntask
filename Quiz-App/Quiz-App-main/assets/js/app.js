const quiz = [
    {
        question: "What is React.js?",
        option1: "Open-source JavaScript back-end library",
        option2: "Free and open-source JavaScript front-end library",
        option3: "Free and open-source JavaScript front-end library",
        option4: "None of the mentioned",
        correct: " Free and open-source JavaScript front-end library",
        correctoption: "option2"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        option1: "<CSS>",
        option2: "<text/style>",
        option3: "<style>",
        option4: "<script>",
        correct: "<style>",
        correctoption: "option3"
    },
    {
        question: "Who created React.js?        ",
        option1: "Jordan Walke ",
        option2: "Jordan Mike",
        option3: "Tim Lee",
        option4: "Jordan Lee",
        correct: "Jordan Walke",
        correctoption: "option1"
    },
    {
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        option1: "p {font-weight:bold}",
        option2: "p {text-size:bold}",
        option3: "<p style='text-size:bold'>",
        option4: "<p style='font-size:bold'>",
        correct: "p {font-weight:bold}",
        correctoption: "option1"
    }
    
]

let counter = 0
let score = 4
let progress = 25

const correct = new Audio("assets/audio/correct.mp3")
const wrong = new Audio("assets/audio/wrong.mp3")
const welldone = new Audio("assets/audio/welldone.mp3")

const checkAnswer = e => {

    if(quiz[counter].correct == document.getElementById(e).innerText){
        document.getElementById(e).style.backgroundColor = "#38761d"
        document.getElementById(e).style.color = "white"
        correct.play()
        document.getElementById("option1").style.pointerEvents = "none"
        document.getElementById("option2").style.pointerEvents = "none"
        document.getElementById("option3").style.pointerEvents = "none"
        document.getElementById("option4").style.pointerEvents = "none"
    }
    else{
        document.getElementById(e).style.backgroundColor = "#c73636"
        document.getElementById(e).style.color = "white"
        document.getElementById(quiz[counter].correctoption).style.backgroundColor = "#38761d"
        document.getElementById(quiz[counter].correctoption).style.color = "white"
        wrong.play()
        document.getElementById("option1").style.pointerEvents = "none"
        document.getElementById("option2").style.pointerEvents = "none"
        document.getElementById("option3").style.pointerEvents = "none"
        document.getElementById("option4").style.pointerEvents = "none"

        score--
    }

    document.getElementById("next").style.pointerEvents = "auto"
    document.getElementById("done").style.pointerEvents = "auto"
}

function changeQuestion(){

    document.getElementById("next").style.pointerEvents = "none"
    document.getElementById("done").style.pointerEvents = "none"

    counter++
    progress += 25

    if(counter == 3){
        document.getElementById("next").style.display = "none"
        document.getElementById("done").style.display = "block"
    }

    document.getElementById("myBar").style.width = progress + "%"
    document.getElementById("myBar").innerText = (counter + 1) + "/4"

    document.getElementById("option1").style.backgroundColor = "white"
    document.getElementById("option2").style.backgroundColor = "white"
    document.getElementById("option3").style.backgroundColor = "white"
    document.getElementById("option4").style.backgroundColor = "white"

    document.getElementById("option1").style.color = "black"
    document.getElementById("option2").style.color = "black"
    document.getElementById("option3").style.color = "black"
    document.getElementById("option4").style.color = "black"

    document.getElementById("option1").style.pointerEvents = "auto"
    document.getElementById("option2").style.pointerEvents = "auto"
    document.getElementById("option3").style.pointerEvents = "auto"
    document.getElementById("option4").style.pointerEvents = "auto"

    document.getElementById('question').innerText = quiz[counter].question
    document.getElementById('answer1').innerText = quiz[counter].option1
    document.getElementById('answer2').innerText = quiz[counter].option2
    document.getElementById('answer3').innerText = quiz[counter].option3
    document.getElementById('answer4').innerText = quiz[counter].option4
}

function onPageLoad(){

    document.getElementById("next").style.pointerEvents = "none"
    document.getElementById("done").style.pointerEvents = "none"

    document.getElementById('question').innerText = quiz[counter].question
    document.getElementById('answer1').innerText = quiz[counter].option1
    document.getElementById('answer2').innerText = quiz[counter].option2
    document.getElementById('answer3').innerText = quiz[counter].option3
    document.getElementById('answer4').innerText = quiz[counter].option4

    document.getElementById("myBar").innerText = "1/4"
}

function quizDone(){

    welldone.play()
    
    document.getElementById("done").style.display = "none"
    document.getElementById("top").style.marginLeft = "200px"
    document.getElementById("question").innerText = "Results"
    document.getElementById("results").style.display = "block"
    document.getElementById("option1").style.display = "none"
    document.getElementById("option2").style.display = "none"
    document.getElementById("option3").style.display = "none"
    document.getElementById("option4").style.display = "none"

    document.getElementById("myProgress").style.display = "none"

    const percentage = (score/4) * 100

    document.getElementById("score").innerText = score
    document.getElementById("percentage").innerText = percentage 
}