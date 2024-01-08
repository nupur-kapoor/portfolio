function wordwrite()
{

const text = "hey I'm creative frontend designer I'm very passionate & dedicated toward my work.";

let para = document.querySelector("#para");

let indx = 0;

function write() {
    para.textContent = text.slice(0, indx);

    indx++;

    if (indx > text.length) {
        indx = 0;
    }

    setTimeout(write, 100); // Adjust the timeout as needed for the desired speed
}

write();
}

wordwrite ();



function movemouse()
{
let move = document.getElementById("cursor");
let move2 = document.getElementById("cursor2");

document.addEventListener("mousemove" , function(e)
{
    move.style.left = e.x + "px";
    move.style.top = e.y +"px";
    move2.style.left = e.x -200+ "px";
    move2.style.top = e.y -200 + "px";

})

document.addEventListener("mouseleave", function()
{
    move.style.display = "none";
    move2.style.display = "none";
})

document.addEventListener("mouseenter", function()
{
    move.style.display = "block";
    move2.style.display = "block";
})

}

movemouse();



var bar = document.querySelector('.barss');
var list = document.querySelector('.sidelist');
var cross = document.querySelector(".cross");
   bar.addEventListener("click", function()
    {
        list.style.transform = "translateX(5%)";
        list.style.height = "400px";
    });

    cross.addEventListener("click" , function()
    {
        list.style.transform = "translateX(-100%)";
        list.style.height = "0px";
    })






 
var card = document.querySelector(".card");
var icon =document.querySelector(".card i");

card.addEventListener("mouseenter", function()
{
   setTimeout(function()
   {
       icon.style.transform = 'scale(1)';
   },100);
})


card.addEventListener("mouseleave", function()
{
   setTimeout(function()
   {
       icon.style.transform = 'scale(0)';
   },1000);
})

