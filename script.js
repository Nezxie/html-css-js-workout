console.log('Hello from Nerdbord!')
function changeColor(color,elem){
    elem.style['border-color']=color;
}
let box = document.querySelector('.box');
let colors = ['red','magenta','orange','blue'];
let position = 0;
window.setInterval(function(){
        changeColor(colors[position],box);
        if(position>3){
            position=0;
        }
        else{
            position++
        }
    }
    ,3000);