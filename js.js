
const display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map (button => {
    button.addEventListener('click', function(e){
        switch(e.target.innerText){
            case 'C':
                display.innerHTML="";
                break;
            case '←':
                if(display.innerText){
                display.innerText = display.innerText.slice(0 , -1);
                }
                break;
                case '=':
                    try{
                        display.innerText=eval(display.innerText);
                    }
                    catch{
                        display.innerText='Error!';
                    }
                    break;            
            default:
                display.innerText += e.target.innerText;
        }
    });
});


function clsw(a){
    if(a==red){
        document.getElementById('equal').style.backgroundColor="red";
        document.getElementById('display').style.backgroundColor="rgb(201,79,79)";
    }
    if(a==orange){
        document.getElementById('equal').style.backgroundColor="rgb(255,94,0)";
        document.getElementById('display').style.backgroundColor="rgb(242,121,78)";
    }
    if(a==green){
        document.getElementById('equal').style.backgroundColor="rgb(118,239,0)";
        document.getElementById('display').style.backgroundColor="lightgreen";
        
    }
    if(a==black){
        document.getElementById('equal').style.backgroundColor="black";
        document.getElementById('display').style.backgroundColor="lightgrey";
    }
    if(a==normal){
        document.getElementById('equal').style.backgroundColor="blue";
        document.getElementById('display').style.backgroundColor="rgb(92,124,219)";
    }

}