const arrimg = [
    "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"
]

const btn = document.querySelector("button")


function ran(){

    const  randomnum = Math.floor(Math.random()*arrimg.length);

    const  randomx = Math.ceil(Math.random()*95);
    const  randomy = Math.ceil(Math.random()*95);

    return [ randomnum , randomx, randomy];
} 


btn.addEventListener("click",()=>{

const img = document.createElement("img")

let [rnum, ranx ,rany ]= ran();
img.style.height = "5rem";
img.style.top= ranx +"%";
img.style.left = rany +"%";

img.style.position= "absolute" 
img.src = arrimg[rnum]
console.log(rnum);

document.body.appendChild(img);

})

