var boxes = document.querySelectorAll(".box");
var imag = document.createElement("img");
var player1 = prompt("Enter player1 name: ");
var player2 = prompt("Enter player2 name: "); 
tickScore =document.querySelector(".score").children[1].lastElementChild;
crossScore =document.querySelector(".score").children[2].lastElementChild;
document.querySelector(".score").children[1].firstElementChild.innerText = player1;
document.querySelector(".score").children[2].firstElementChild.innerText = player2;
var arr =[]
imag.src="tick.png";
var turn = "tick";
var TurnText= document.querySelector("div.score #turn").innerHTML = player2;
function change()
{
    document.querySelector("div.score #turn").innerHTML;
    turn = (turn=="cross") ? 'tick' : 'cross';
    var TurnText= document.querySelector("div.score #turn");
    TurnText.innerHTML=(turn=="cross") ? player1 : player2;;
}

boxes.forEach(function(box)
{
    box.addEventListener("click",function()
    {
        let a = document.createElement("img");
        a.src = turn + ".png";
        a.classList.add("image");
        if(box.children.length==0)
        {
            this.appendChild(a);
            arr.push(1);
            change();
            win();
            draw();
        }
    
    })
})
//functions below

function win()
{
    let p = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    p.forEach(function(array){
        let ticks = 0;
        let crosses = 0;
        for(let z=0;z<3;z++)
        {
            if(boxes[array[z]].children.length!=0)
            {
                let source = boxes[array[z]].getElementsByClassName("image")[0];
                if(source.src =="file:///C:/Users/Munib/Desktop/JS%20Projects/tick%20cross/tick.png")
                    ticks++;
                    else if(source.src=="file:///C:/Users/Munib/Desktop/JS%20Projects/tick%20cross/cross.png")
                        crosses++;
            }
            if(ticks==3 || crosses==3){
                if(turn=="tick")
                {
                    console.log(player1 + " wins");
                    tickScore.innerText++;
                }else
                {
                    console.log(player2 + " wins");
                    crossScore.innerText++;
                }
                //(turn=="cross") ? console.log('tick wins') : console.log('cross wins');
                reset();
                break;
            }    
        } 
    })
}

function reset()
{
    boxes.forEach(function(bax){
        if(bax.children.length!=0)
            bax.firstElementChild.remove();
    }
    )
    arr =[];
}

function draw()
{
    if(arr.length==9)
    {
        console.log("tie!");
        reset();
    }  
}


