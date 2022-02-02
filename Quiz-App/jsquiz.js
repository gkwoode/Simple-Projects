
var questions = [{
    question: "A computer assisted method for the recording and analyzing of existing or hypothetical systems is",
    choices: ["Data transmission", "Data flow", "Data capture", "Data processing"],
    correctAnswer: 1
}, {
    question: "The brain of any computer system is",
    choices: ["ALU", "Memory", "CPU", "Control Unit"],
    correctAnswer: 2
}, {
    question: "Which of the following computer language is used for artificial intelligence?",
    choices: ["FORTRAN", "PROLONG", "C","COBOL"],
    correctAnswer: 1
}, {
    question: "Which part interprets program instructions and initiate control operations.",
    choices: ["Input", "Storage Unit", "Logic Unit", "Control Unit"],
    correctAnswer: 3
}, {
    question: "The binary system uses powers of",
    choices: ["2", "10", "8", "16"],
    correctAnswer: 0
}, {
    question: "A computer program that converts assembly language to machine language is",
    choices: ["Compiler", "Interpreter", "Assembler", "Comparator"],
    correctAnswer: 2	
	
}, {
    question: "Any type of storage that is used for holding information between steps in its processing is",
    choices: ["CPU", "Primary storage", "Intermediate storage", "Internal storage"],
    correctAnswer: 2	
}, {
    question: "The section of the CPU that selects, interprets and sees to the execution of program instructions",
    choices: ["Memory", "Register unit", "Control unit", "ALU"],
    correctAnswer: 2
}, {
    question: "The symbols used in an assembly language are",
    choices: ["Codes", "Mnemonics", "Assembler", "All the above"],
    correctAnswer: 1

}, {
    question: "	Which device of computer operation dispenses with the use of the keyboard?",
    choices: ["Joystick", "Light pen", "Mouse", "Touch"],
    correctAnswer: 2

}, {
    question: "Any storage device added to a computer beyond the immediately usable main storage is known as",
    choices: ["Floppy disk", "Hard disk", "Backing store", "Punched card"],
    correctAnswer: 2

	}, {
    question: "Which output device is used for translating information from a computer into pictorial form on paper.",
    choices: ["Plotter", "Mouse", "Touch panel", "Card punch"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}