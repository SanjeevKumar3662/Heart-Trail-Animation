//through this we can access the body element
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
    const xPosition = e.offsetX;
    const yPosition = e.offsetY;

    //this is creating a span element
    const spanEl = document.createElement("span");

    //span's position is changing
    spanEl.style.left = xPosition + "px";
    spanEl.style.top = yPosition + "px";

    //returning (appending) span to body
    bodyEl.appendChild(spanEl);

    //generating a random number(less than 100)
    const size = Math.random() * 100;

    // changing the size of the span
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    //after 3000s span is removed
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
