window.addEventListener("gamepadconnected",e=>{

console.log("Gamepad connected")

setInterval(()=>{

const gp=navigator.getGamepads()[0]

if(!gp) return

if(gp.buttons[0].pressed)
console.log("A")

},100)

})
