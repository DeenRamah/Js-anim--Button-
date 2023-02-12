let bub = document.getElementById("bub");
let min = document.getElementById(".min");
let mn = document.getElementById(".mn");

let mkuu = document.getElementById(".haga");
let btn = document.getElementById(".btn");
let body = body;
/// pageX and pageY are coodinates of mouse pointer when a mouse
// is clicked, whenyou user pageY= moves Horizontal while pageX= vertical
/**
 * let x = eventpageX; Horizontal
 * let y = event.pageY; Vertical
 * 
 * there is also difference between screenY ,screeX and pageX,pageY
 * 
 */
    btn = document.querySelectorAll('.btn');
    btn.forEach(btn => {
     btn.onclick = function(e){
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;

        let color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.style.borderColor = color;
        this.appendChild(ripples);

        setTimeout(() =>{
            ripples.remove()
        },2000);
    }
})