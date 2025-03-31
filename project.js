let arr=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

let mode;
let count=1;
let modeButton=document.querySelectorAll(".js-mode");
modeButton.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.innerHTML==="One Player")
            mode=1;
        else
            mode=2;
        document.querySelector(".js-parent").innerHTML=`<div class="superChild">
            <button  onclick="move(0,0)" class="box" ><div class="child js-00"></div></button>
            <button  onclick="move(0,1)" class="box" ><div class="child js-01"></div></button>
            <button  onclick="move(0,2)" class="box" ><div class="child js-02"></div></button>
        </div>
        <div class="superChild">
            <button  onclick="move(1,0)" class="box" ><div class="child js-10"></div></button>
            <button  onclick="move(1,1)" class="box" ><div class="child js-11"></div></button>
            <button  onclick="move(1,2)" class="box" ><div class="child js-12"></div></button>
        </div>
        <div class="superChild">
            <button  onclick="move(2,0)" class="box" ><div class="child js-20"></div></button>
            <button  onclick="move(2,1)" class="box" ><div class="child js-21"></div></button>
            <button  onclick="move(2,2)" class="box" ><div class="child js-22"></div></button>
        </div>
        <p class="js-turn" align="center">X's move</p>`;
    })
});

function check(){
    if(arr[0][0]===arr[1][1] && arr[1][1]===arr[2][2] && arr[0][0]!==0)
        console.log(`${arr[0][0]} WON1`);
    else if(arr[0][2]===arr[1][1] && arr[1][1]===arr[2][0] && arr[0][2]!==0)
        console.log(`${arr[0][2]} WON2`);
    else if(arr[0][0]===arr[1][0] && arr[1][0]===arr[2][0] && arr[0][0]!==0)
        console.log(`${arr[0][0]} WON3`);
    else if(arr[0][1]===arr[1][1] && arr[1][1]===arr[2][1] && arr[0][1]!==0)
        console.log(`${arr[0][1]} WON4`);
    else if(arr[0][2]===arr[1][2] && arr[1][2]===arr[2][2] && arr[0][2]!==0)
        console.log(`${arr[0][2]} WON5`);
    else if(arr[0][0]===arr[0][1] && arr[0][1]===arr[0][2] && arr[0][0]!==0)
        console.log(`${arr[0][0]} WON6`);
    else if(arr[1][0]===arr[1][1] && arr[1][1]===arr[1][2] && arr[1][0]!==0)
        console.log(`${arr[1][0]} WON7`);
    else if(arr[2][0]===arr[2][1] && arr[2][1]===arr[2][2] && arr[2][0]!==0)
        console.log(`${arr[2][0]} WON8`);
}

function move(a,b){
    if(mode===2){
        let block=document.querySelector(`.js-${a}${b}`);
        if((count%2)!==0){
            block.innerHTML="<p>X</p>";
            arr[a][b]="X";
            document.querySelector(".js-turn").innerHTML="O's move";
        }
        else{
            block.innerHTML="<p>O</p>";
            arr[a][b]="O";
            document.querySelector(".js-turn").innerHTML="X's move";
        }
        if(count>=5)
            check();
        count++;
    }
}