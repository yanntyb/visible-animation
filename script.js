function move(div){
    console.log("ok")
    let left = parseInt(window.getComputedStyle(div).left);
    div.style.left = left + 1 + "px";
    if(parseInt(window.getComputedStyle(div).left) > 0){
        clearInterval(timeoutBox1)
    }
}

let a = 0;

let timeoutBox1 = setInterval(function (){
    move(document.getElementById("box1"))
},5)

