
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
            firstBlock = document.getElementById("firstBlock");
            firstBlock.classList.add("startHidden");
            
        }
        else{
           // alert("hint: its almost the opposite of urs");
        }
    }

    //question 2
/*

    if (whichQuestion == 2){
        const input = document.getElementById('second').value;
        let result = input.trim();
        result = result.toLowerCase();
        if(result == "dodgers" || result == "dodger" || result == "padre" || result == "padres"){
            score2 = 1;
            let score = score1 + score2 + score3 + score4 + score5;
            alert("Correct :D " + score + "/5");
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
            score3 = 1;
            let score = score1 + score2 + score3 + score4 + score5;
            alert("Correct :D " + score + "/5");
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
            let score = score1 + score2 + score3 + score4 + score5;
            alert("Correct :D " + score + "/5");
        }
        else{
            alert("hint: same month as u");
        }
    }
    if (whichQuestion == 3){
        const input = document.getElementById('fifth').value;
        let result = input.trim();
        result = result.toLowerCase();
        if(result == "fencing"){
            let score = score1 + score2 + score3 + score4 + score5;
            alert("Correct :D " + score + "/5");
        }
        else{
            alert("hint: what sport did hk win gold in");
        }
    }
    
*/

}