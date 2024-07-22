let button = document.getElementById("button");
let screen = document.getElementById("screen");


function clearscreen()
{
   screen.value="";
}

button.onclick = clearscreen;

function writingonScreen(value)
{
    screen.value = screen.value + value;
}

function calculateall()
{
    try
    {
    let result = eval(screen.value);
    screen.value = "";
    screen.value = result;
    }
    catch(error)
    {
        alert("Invalid Input");
        screen.value ="";
    } 
}


