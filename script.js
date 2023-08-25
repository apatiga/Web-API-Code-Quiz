// When user clicks the start button, then a timer starts and user is presented with a question

    // Declare global variables 
    var startBtn = document.getElementById("startBtn");
    var time = 75;
    var time_remaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var answerChoiceD = document.getElementById("answerChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";
    // Set score = 0 at the start of the game 
    var score = 0;
    // question index
    let i = 0;
    var questionsArray = [
        {
            question: "Question: Commonly used data types DO NOT include",
            imageSrc: "",
            answerChoice: ["A) <strings>", "B) <booleans>", "C) <alerts>", "D) <numbers>"],
            correctAnswer: 2
        }, 
        {
            question: "Question: The condition in an if/ else statement is encloised with __?",
            imageSrc: "",
            answerChoice: ["A) quotes", "B) curly brackets", "D) parenthesis", "D) square brackets"],
            correctAnswer: 2
        },
        {
            question: "Question: Arrays in JavaScript can be used to store?",
            imageSrc: "",
            answerChoice: ["A) numbers and strings", "B) other arrays ", "C) booleans ", "D) all of the above"],
            correctAnswer: 3
        }, 
        {
            question: "Question: String values must be enclosed within ___ when being addigned to variables?",
            imageSrc: "",
            answerChoice: ["A) commas", "B) curly brackets", "C) quotes", "D) parenthesis"],
            correctAnswer: 2
        },
        {
            question: "Question: A very useful tool used during development and debugging for printing content to the debugger is?",
            answerChoice: ["A) Javascript", "B) console.log", "C) for loops", "D) terminal/bash"],
            correctAnswer: 1
        }];
        
        //COUNTDOWN TIMER FUNCTION: set countdown timer and interval. Set time-related valiables.
        
        //change the seconds variable every second.
        var countdownTimerInterval = setInterval(setCountdownTimer, 1000);
        
        //function that changes the time var
        function setCountdownTimer() {
                if (time_start)
                time--;
                if(time<= 0) {
                end_quiz();
                time = 0;    
                // clearInterval(countdownTimerInterval);
                //alert user and stop quiz
                }
                document.getElementById("timer").innerHTML = time;
            }
        // START EVENT LISTENER: When user clicks Start button, start the countdown timer and quiz questions. Add an event listener to each button.
startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});

// QUESTIONS FUNCTION: display questions and multiple-choice answers

function setQuizQuestions() {
        questionHeading.textContent = questionsArray[i].question;
        answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
        answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
        answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
        answerChoiceD.textContent = questionsArray[i].answerChoice[3]; 
        };
        // When user answers a question: then user is presented with another question

// Store user answer choices. Clear elements and update score count.

// Change to next question
answerChoiceA.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    // check answer
    if (0 === correctAnswer) { 
        // display message to user for 1  second stating if the answer is correct or incorrect
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
        document.getElementById("AnswerResponse").innerHTML = "";
            },
            1000
        );
        // when user answers a question correctly, increase the score
        score++;    
        // display updated score progress
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        // when user answers a question inccorrectly, subtract from the time
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

answerChoiceB.addEventListener('click', function(event) {
event.stopPropagation();
correctAnswer = questionsArray[i].correctAnswer;
console.log(correctAnswer);
    if (1 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
                );
                score++;
                document.getElementById("score").innerHTML = score;
            } else {
                time_remaining -= 5;
                document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
                setTimeout(function() {
                    document.getElementById("AnswerResponse").innerHTML = "";
                        },
                        1000
                    );
            }
            if (i >= questionsArray.length -1) {
            end_quiz();
            } else {
             i++ 
            setQuizQuestions();
            };
        });
        answerChoiceC.addEventListener('click', function(event) {
            event.stopPropagation();
            correctAnswer = questionsArray[i].correctAnswer;
            console.log(correctAnswer);
            if (2 === correctAnswer) { 
                document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
                setTimeout(function() {
                    document.getElementById("AnswerResponse").innerHTML = "";
                        },
                        1000
                    );
                score++;
                document.getElementById("score").innerHTML = score;
            } else {
                time_remaining -= 5;
                document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
                setTimeout(function() {
                    document.getElementById("AnswerResponse").innerHTML = "";
                        },
                        1000
                    );
            }
            if (i >= questionsArray.length -1) {
            end_quiz();
            } else {
                i++ 
                setQuizQuestions();
            };
            });
            answerChoiceD.addEventListener('click', function(event) {
                event.stopPropagation();
                correctAnswer= questionsArray[i].correctAnswer.value;
                console.log(correctAnswer);
                if (3 === correctAnswer) { 
                    document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
                    setTimeout(function() {
                        document.getElementById("AnswerResponse").innerHTML = "";
                            },
                            1000
                        );
                    score++;
                    document.getElementById("score").innerHTML = score;
                } else {
                    time_remaining -= 5;
                    document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
                    setTimeout(function() {
                        document.getElementById("AnswerResponse").innerHTML = "";
                            },
                            1000
                        );
                }
                if (i >= questionsArray.length -1) {
                   end_quiz();
                } else {
                    i++ 
                    setQuizQuestions();
                };
            });
                    //end quiz
        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("countdownTimer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

        //submit score and initals
            function submit_score() {
             high_scores.push(document.getElementById("initials").value + " " + score);
             view_high_scores();
            }

        // localStorage.setItem("score",JSON.stringify(AnswerResponse));
        // localStorage.setItem("initials", JSON.stringify(initials));
        
        function view_high_scores(){
             // changing the screen output
             document.getElementById("quizContainer").style.display="none";
             document.getElementById("game_over").style.display= "none";
             document.getElementById("high_scores_page").style.display="block";
         
             output="";
             for(let k=0; k<high_scores.length; k++){
                  output = output + "  " + high_scores[k];
             }
             document.getElementById("high_scores").innerHTML= output;                
              clear_up();
         }
 
         // refresh the site to the home container page
         function go_home(){	
                 document.getElementById("high_scores_page").style.display= "none";
                 document.getElementById("homeContainer").style.display= "block";
                 clear_up();
         }
         
         // clear the highscore
         function clear_hs(){
             high_scores = [];
             // high_scores.splice(0, high_scores.length);
           }
         
         // refresh the site 
         function clear_up(){
            time=75;
            time_remaining=true;
            time_start=false;
            i=0;
            score=0;
            }
