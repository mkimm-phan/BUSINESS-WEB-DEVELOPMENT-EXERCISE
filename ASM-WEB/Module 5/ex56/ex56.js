window.onload = function() {
    const btnip = document.getElementById("btnip");
    const btncountup = document.getElementById("btncountup");
    const btnupcase = document.getElementById("btnupcase");
    const btnout = document.getElementById("btnout");
    const btnlowcase = document.getElementById("btnlowcase");
    const btnwordcount = document.getElementById("btnwordcount");
    const btncountlow = document.getElementById("btncountlow");
    const btnprintvowels = document.getElementById("btnprintvowels");
    const btnw3c = document.getElementById("btnw3c");
    const txtInput = document.getElementById("txtInput");
    const txtOutput = document.getElementById("txtOutput");
    var inputBox = document.getElementById("txtInput");

    btnip.onclick = function() {
        txtInput.value = null;
        txtOutput.value = null;
    }

    btncountup.onclick = function(){
        var count = 0;
        for (var char of txtInput.value){
            if (char === char.toUpperCase()){
                count++;
            }
        }
        txtOutput.value = count;
    }
    
    btncountlow.onclick = function(){
        var count = 0;
        for (var char of txtInput.value) {
        if (char === char.toLowerCase()) {
            count++;
        }
        }
        txtOutput.value = count;
    }

    btnlowcase.onclick = function(){
        txtOutput.value = ""
        txtOutput.value = txtInput.value.toLowerCase()
    }

    btnupcase.onclick = function(){
        txtOutput.value = ""
        txtOutput.value = txtInput.value.toUpperCase();
    }

    btnout.onclick = function(){
        var line = "";
        txtOutput.value="";
        for (var char of txtInput.value){
            line += char + "\n"
            txtOutput.value = line;
        }
    }

    btnwordcount.onclick = function(){
        txtOutput.value=txtInput.value.length;
    }

    btnprintvowels.onclick = function(){
        let NA = "Vowels:";
        let PA = "Consonants:";
        for (var char of txtInput.value) {
        if (
            char.toLowerCase() === "a" ||
            char.toLowerCase() === "ă" ||
            char.toLowerCase() === "a" ||
            char.toLowerCase() === "â" ||
            char.toLowerCase() === "e" ||
            char.toLowerCase() === "ê" ||
            char.toLowerCase() === "i" ||
            char.toLowerCase() === "o" ||
            char.toLowerCase() === "ô" ||
            char.toLowerCase() === "ơ" ||
            char.toLowerCase() === "u" ||
            char.toLowerCase() === "ư" ||
            char.toLowerCase() === "y"
        ) {
            NA += "-" + char;
        } else {
            PA += "-" + char;
        }
        }
        txtOutput.value = NA + "\n " + PA;
    }
    
    btnw3c.onclick = function(){
        var url="https://www.w3.org/TR/string-meta/";
        window.open(url, "_blank");
    }
}