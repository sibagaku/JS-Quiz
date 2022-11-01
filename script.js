const quiz = [
    {
        question: "ゲーム市場、最も売れたゲームは？",
        answers: [
            "スーファミ",
            "プレステ", 
            "スイッチ", 
            "DS"
        ] ,
        correct: "DS"
    }, {
        question: "ゲーム市場、最も売れたゲームは？",
        answers: [
            "スーファミ",
            "プレステ", 
            "a", 
            "DS"
        ] ,
        correct: "DS"
    }, {
        question: "ゲーム市場、最も売れたゲームは？",
        answers: [
            "スーファミ",
            "プレステ", 
            "b", 
            "DS"
        ] ,
        correct: "DS"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        alert("正解！");
        score++;
    } else {
        alert("不正解！");
    }
    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
    }
};

let handle = 0;

while (handle < buttonLength) {
    $button[handle].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handle++;
}