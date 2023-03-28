function random_button() {
    let number = Math.floor(Math.random() * 100 + 1);
    document.getElementById("result_random").innerHTML = "ROLL(1-100):" + number ;
}