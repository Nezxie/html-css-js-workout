console.log('Hello from Nerdbord!')
function changeColor(color,elem){
    elem.style['border-color']=color;
}
const box = document.querySelector('.box');
const colors = ['red','magenta','orange','blue'];
let colorIndex = 0;
window.setInterval(function(){
        changeColor(colors[colorIndex],box);
        if(colorIndex>3){
            colorIndex=0;
        }
        else{
            colorIndex++
        }
    }
    ,3000);