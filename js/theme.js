const themeBtn = document.getElementById("themeButton");

window.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});

themeBtn.addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    localStorage.setItem("bgColor", randomColor);
});