let arr=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

function move(a,b){
    let block=document.querySelector(`.js-${a}${b}`);
    block.innerHTML="<p>X</p>";
    arr[a][b]="X";
    console.log(arr);
}