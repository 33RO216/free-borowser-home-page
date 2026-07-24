function loaded() {}
    console.log(`dev opened there browser`)
const buttons = document.querySelectorAll(".custom-btn");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("button clicked");
    });
});
