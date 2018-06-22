var gameQuestions = [
    {
        "Question" : "What is a shooting star in the following?",
        "choices" : {
            "a": "Dying star",
            "b": "Comet",
            "c": "Meteor",
            "d": "None of these"
        },
        "correct": "c"
    },
    {
        "Question" : "How many days can a flu virus live in bills?",
        "choices" : {
            "a": "14",
            "b": "17",
            "c": "28",
            "d": "21"
        },
        "correct": "b"
    },
    {
        "Question" : "What will you get if you order Spotted Dick in an English restaurant?",
        "choices" : {
            "a": "Sausage",
            "b": "Cheese",
            "c": "Cake",
            "d": "Candy"
        },
        "correct": "c"
    },
    {
        "Question" : "How many times heartbeats in a day?",
        "choices" : {
            "a": "1,000",
            "b": "10,000",
            "c": "100,000",
            "d": "1,000,000"
        },
        "correct": "c"
    },
    {
        "Question" : "In the following which is the largest country by an area that has only one-time zone?",
        "choices" : {
            "a": "China",
            "b": "Russia",
            "c": "Turkey",
            "d": "India"
        },
        "correct": "b"
    },
    {
        "Question" : "Which one of the following is not an insect?",
        "choices" : {
            "a": "Mosquito",
            "b": "Flea",
            "c": "Tick",
            "d": "Spider"
        },
        "correct": "c"
    },
    {
        "Question" : "On a clear night about how many galaxies are visible to the naked eye?",
        "choices" : {
            "a": "Two Million",
            "b": "Five thousand",
            "c": "Two",
            "d": "Nine thousand"
        },
        "correct": "c"
    },
    {
        "Question" : "Which one of the last countries invaded by Scotland?",
        "choices" : {
            "a": "France",
            "b": "Wales",
            "c": "England",
            "d": "Panama"
        },
        "correct": "d"
    },
    {
        "Question" : "Florence Nightingale became known as the Lady With the Lamp during which war?",
        "choices" : {
            "a": "American Civil War",
            "b": "Crimean War",
            "c": "World War I",
            "d": "World War II"
        },
        "correct": "b"
    },
    {
        "Question" : "In what place was Christmas once illegal?",
        "choices" : {
            "a": "Brazil",
            "b": "Russia",
            "c": "France",
            "d": "England"
        },
        "correct": "d"
    }
    ];
    
    $(document).ready(function(){
        var createRadioButton = '';
        var correctAnswers = 0;
        var incorrectAnswers = 0;
        var unansweredAnswer = 0;
        function gameResult(){
            gameQuestions.forEach(function(questions, index){
                var number = index+1;
                if(document.querySelector('input[name = "question'+ number +'"]:checked')){
                    var answer = document.querySelector('input[name = "question'+ number +'"]:checked').value;
                    if(questions.correct === answer){
                        ++correctAnswers;
                    }
                    else {
                        ++incorrectAnswers;
                    }
                }else{
                    ++unansweredAnswer;
                }
            });
    
            var result = "";
            result += '<div><label class="title" id="allDone"> All Done! </label></div>';
            result += '<div><label class="title"> Correct Answers : ' + correctAnswers + '</label></div>';
            result += '<div><label class="title"> Incorrect Answers : '+ incorrectAnswers  + '</label></div>';
            result += '<div><label class="title"> Unanswered : '+ unansweredAnswer + '</label></div>';
            document.getElementById('results').innerHTML = result;
        }
    
        function quizGame(){
            var aMin = 60;
            document.getElementById('timer').innerHTML = 'Time Remaining : ' +  aMin + ' seconds';
    
            var timer = setInterval(function () {
                
                document.getElementById('timer').innerHTML = 'Time Remaining : ' + --aMin + ' seconds';
                if(aMin === 0){
                    document.getElementById('game').style.display = 'none';
                    clearInterval(timer);
                    gameResult();
                }
            }, 1000);
    
            gameQuestions.forEach(function(questions, index){
                createRadioButton += '<div><br><h5>' + (index+1) +". " + questions.Question + '</h5>';
                createRadioButton += `<div>`;
                for(choice in questions.choices){
                    createRadioButton += ' <input type="radio" class="radio" name="question'+ (index+1) +'" value="'+ choice+'"> ';
    
                    createRadioButton += questions.choices[choice];
                }
                createRadioButton += `</div></div>`;
                document.getElementById('questions').innerHTML = createRadioButton;
            });
    
            $("#submit").on('click', function(){
                document.getElementById('game').style.display = 'none';
                clearInterval(timer);
                gameResult();
    
            });
            
        }
    
    
        //game start
        document.getElementById('game').style.visibility = 'hidden';
        $("#gameStart").on('click', function(){
            document.getElementById('game').style.visibility = '';
            document.getElementById('newGame').style.display  = 'none';
            quizGame();
        });
    
        
    
    });
    
    