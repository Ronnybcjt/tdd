function greet(name) {
    if (name == null) {
        return `Hello, my friend.`    
    }else if(Array.isArray(name)){
        return greetArray(name)
    }
    else{
        if(name.toUpperCase() == name){
            return greetUpperCase(name)
        }
        else{
            return `Hello, ${name}.`
        }
    }
}

function greetArray(name){
    if(name.length > 2){
        var word = `Hello,`
        var wordUpperCase = [];
        for(i = 0;i < name.length;i++)
        if(i == name.length-1){
            if(name[i].toUpperCase == name[i]){
                wordUpperCase.push(name[i]);
            }else{
                word = word + ` and ${name[i]}.`
            }     
        }else{
            if(name[i].toUpperCase == name[i]){
                wordUpperCase.push(name[i]);
            }else{
                word = word + ` ${name[i]},`
            }     
        }
        if(wordUpperCase.length > 0){
            return word + greetArrayUpperCase(wordUpperCase)
        }
        return word
    }else{
        return `Hello, ${name[0]} and ${name[1]}.`
    }
}

function greetUpperCase(name){
    return `HELLO ${name}!`;
}

function greetArrayUpperCase(wordUpperCase){
    var wordUpper = ""
    for(i = 0 ; i < wordUpperCase.length;i++)
    wordUpper = wordUpper + ` AND HELLO ${wordUpperCase[i]}!`
}

module.exports = greet;