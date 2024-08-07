

function correct(whichQuestion){
    var score1 = 0;
    var score2 = 0;
    var score3 = 0;
    var score4 = 0;
    var score5 = 0;
    
    if (whichQuestion == 1){
        const input = document.getElementById('first').value;
        let result = input.trim();
        result = result.toLowerCase();
        if(result == "enfp" || result == "enfp-t" || result == "enfpt" || result == "enfp t"){
           // alert("Correct :D " + score + "/5");
            firstBlock = document.getElementById("correct1");
            firstBlock.classList.remove("startHidden");
            alert("Correct :D 1 down, 4 to go");
            hideThisBlock = document.getElementById("firstBlock");
            hideThisBlock.classList.add("startHidden");
            showNextBlock = document.getElementById("secondBlock");
            showNextBlock.classList.remove("startHidden");
        }
        else{
            alert("hint: its almost the opposite of urs");
        }
    }

    //question 2


    if (whichQuestion == 2){
        const input = document.getElementById('second').value;
        let result = input.trim();
        result = result.toLowerCase();
        if(result == "dodgers" || result == "dodger" || result == "padre" || result == "padres"){
            alert("Correct :D 2 down, 3 to go");
            hideThisBlock = document.getElementById("secondBlock");
            hideThisBlock.classList.add("startHidden");
            showNextBlock = document.getElementById("thirdBlock");
            showNextBlock.classList.remove("startHidden");
        }
        else{
            alert("hint: baseball team starting with a d");
        }
    }

    //question 3

    if (whichQuestion == 3){
        const input = document.getElementById('third').value;
        let result = input.trim();
        result = result.toLowerCase();
        if(result == "rose milk" || result == "rose"){
            alert("Correct :D 3 down, 2 to go");
            hideThisBlock = document.getElementById("thirdBlock");
            hideThisBlock.classList.add("startHidden");
            showNextBlock = document.getElementById("fourthBlock");
            showNextBlock.classList.remove("startHidden");
        }
        else{
            alert("hint: think of a flower u wanted in minecraft");
        }
    }
    if (whichQuestion == 4){
        const input = document.getElementById('fourth').value;
        let result = input.trim();
        result = result.toLowerCase();
        if(result == "october 12" || result == "10/12"){
            alert("Correct :D 4 down, 1 to go");
            hideThisBlock = document.getElementById("fourthBlock");
            hideThisBlock.classList.add("startHidden");
            showNextBlock = document.getElementById("fifthBlock");
            showNextBlock.classList.remove("startHidden");
        }
        else{
            alert("hint: same month as u");
        }
    }
    if (whichQuestion == 5){
        const input = document.getElementById('fifth').value;
        let result = input.trim();
        result = result.toLowerCase();
        if(result == "fencing"){
            alert("yayyy u got all of them right");
            alert("A little surprise next ;)");
            hideThisBlock = document.getElementById("fifthBlock");
            hideThisBlock.classList.add("startHidden");
            window.location = "http://doyouwannagooutwithme.com/";
        }
        else{
            alert("hint: what sport did hk win gold in");
        }
    }
    

}