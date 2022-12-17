let player = {

}

function getWord() {
    let word = getRandomWord();
    document.getElementById("word").innerHTML = word;
    let value = getWordValue(word);
    document.getElementById("value").innerHTML = value.toFixed(2);
}

window.onload = function main() {
    getWord();
    let interval = 1000;
    setInterval(getWord, interval);
}
