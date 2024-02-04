// Exe.1
// const input = document.querySelector("#input");
// const button = document.querySelector("button");
// button.addEventListener("click", onClick);
// function onClick() {
//     input.value = "Aloha"
// }

// Exe.2
// const input = document.querySelector("#input");
// const button = document.querySelector("button");
// button.addEventListener("click", onClick);
// function onClick() {
//     alert(input.value);
// }

//Exe.3
// let inputFirst = document.querySelector("#first-input");
// let inputSecond = document.querySelector("#second-input");
// const button = document.querySelector("button");
// button.addEventListener("click", onClick);
// function onClick() {
//     // const valueFirst = inputFirst.value;
//     //     inputFirst.value = inputSecond.value;
//     // inputSecond.value = valueFirst;
//     [inputFirst.value, inputSecond.value]=[inputSecond.value, inputFirst.value] 
// }

//Exe.4
const paragrafs = document.querySelectorAll("p");
const button = document.querySelector("button");
button.addEventListener("click", onClick);
function onClick() {
    paragrafs.forEach((item, index) => item.textContent = index + 1);
}