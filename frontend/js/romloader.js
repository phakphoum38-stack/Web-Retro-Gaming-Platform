function loadROM(){

const file=document.getElementById("rom").files[0]

const url=URL.createObjectURL(file)

localStorage.setItem("rom",url)

location="emulator.html"

}
