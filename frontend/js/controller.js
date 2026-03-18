document.querySelectorAll("#controller button")
.forEach(btn=>{

btn.addEventListener("touchstart",()=>{
console.log("press",btn.innerText)
})

})
