let Tasbih = document.querySelector("#Tasbih")
let btnIncrement = document.querySelector("#btnIncrement")
let btnReset = document.querySelector("#btnReset")

let value = 0

btnIncrement.addEventListener("click", () => {
    value ++
    Tasbih.innerHTML = value

} )

// reset button

btnReset.addEventListener("click", () => {
    value = 0
    Tasbih.innerHTML = value
})