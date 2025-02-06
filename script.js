function sayYes() {
    document.getElementById("message").innerHTML = "WALA KANG NOW CHOICE DI MO MAHABOL EH!";
    createHearts();
}

function moveNoButton() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    let noBtn = document.getElementById("noBtn");
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function createHearts() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
