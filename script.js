function checkAnswers(){
    let score = 0
    let result = 0
    /*documente means going rto the dom, form mean find the form labelled quiz, elements means take everything from that form and put it a variable named quiz*/
    let quiz = document.forms.quiz.elements; 
    let answer1 = quiz.colour.value; /*value will be the one it s been selected */
    if (answer1 == "pink"){
        score = score + 1;
    }
    else if (answer1 == "yellow"){
score = score + 2
    }
    else if(answer1 == "green"){
        score = score + 3
    }
    else {
        score = score + 4
    }

    let answer2 = quiz.animal.value; 
    if (answer2 == "Red-Panda"){
        score = score + 1;
    }
    else if (answer2 == "Giraffe"){
score = score + 2
    }
    else if(answer2 == "Jaguar"){
        score = score + 3
    }
    else {
        score = score + 4
    }

    let answer3 = quiz.music.value;
    if (answer3 == "Pop"){
        score = score + 1;
    }
    else if (answer3 == "Hip-Hop"){
score = score + 2
    }
    else if(answer3 == "Rock"){
        score = score + 3
    }
    else {
        score = score + 4
    }

    let answer4 = quiz.hobby.value; 
    if (answer4 == "Read"){
        score = score + 1;
    }
    else if (answer4 == "Jog"){
score = score + 2
    }
    else if(answer4 == "Walk"){
        score = score + 3
    }
    else {
        score = score + 4
    }

    if (score < 6){
        result= "HTML";
    }
    else if (score < 10){
        result = "Python"
        }
    else if (score < 13){
            result = "JavaScript";
        }
    else {
            result = "Java";
        }
alert ("The programmig language you should learn is " + result);

    }
