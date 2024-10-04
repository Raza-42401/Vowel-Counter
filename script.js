var user = prompt("Enter a word");
var usresmallletter = user.toLowerCase();
var vowel = 0;
for(var i =0 ;i<usresmallletter.length;i++){
    if(usresmallletter[i] === "a"){
        vowel++
    }else if(usresmallletter[i] === "e"){
        vowel++
    }else if(usresmallletter[i] === "i"){
        vowel++
    }else if(usresmallletter[i] === "o"){
        vowel++
    }else if(usresmallletter[i] === "u"){
        vowel++
    }
}
alert(`Total vowel in your word = ${vowel}`)