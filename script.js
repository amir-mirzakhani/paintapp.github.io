const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')
const brushWidth = document.querySelector("#brush-width")
const brushColor = document.querySelector("#color-picker")
const brush = document.querySelector(".brush")
const eraser = document.querySelector(".eraser")
const save = document.querySelector(".save")
const clear = document.querySelector(".clear")
let isDrawing = false;
let currentColor = ""
let currentWidth = 5
window.addEventListener("load" , () =>{
    canvas.height = canvas.offsetHeight
    canvas.width = canvas.offsetWidth
    ctx.fillStyle = "#f2f2f2"
    ctx.fillRect(0,0,canvas.width,canvas.height)
})
function startDrawing(){
    isDrawing = true
    ctx.beginPath()
    ctx.lineWidth = currentWidth
}
function drawing(e){
    if(!isDrawing){
        return
    }  
    ctx.strokeStyle = `${currentColor}`
    ctx.lineTo(e.offsetX , e.offsetY)
    ctx.stroke()
    
}
function endDrawing(){
    isDrawing = false
}
canvas.addEventListener("mousedown" , startDrawing)
canvas.addEventListener("mousemove" , drawing)
canvas.addEventListener("mouseup" , endDrawing)
brushWidth.addEventListener("change" , ()=>{
    currentWidth = brushWidth.value
})
brushColor.addEventListener("change" , () =>{
    currentColor = brushColor.value
})
brush.addEventListener("click" , () =>{
    brush.classList.add("active")
    eraser.classList.remove("active")
    currentColor = brushColor.value
})
eraser.addEventListener("click" , () =>{
    eraser.classList.add("active")
    brush.classList.remove("active")
    currentColor = "#f2f2f2"
})
clear.addEventListener("click" , () =>{
    // ctx.fillStyle = "#f2f2f2"
    ctx.fillRect(0,0,canvas.width,canvas.height)
})
save.addEventListener("click" , () =>{
    let link = document.createElement("a")
    link.download = `${Date.now()}.jpg`
    link.href = canvas.toDataURL()
    link.click();
})
    
    