var t=document.getElementById("pla");
var te=document.getElementById("stm");
var arr=[0,0,0,0,0,0,0,0,0];
var arrc=[0,0,0,0,0,0,0,0,0];
var a1=document.getElementById("b1");
var a2=document.getElementById("b2");
var a3=document.getElementById("b3");
var a4=document.getElementById("b4");
var a5=document.getElementById("b5");
var a6=document.getElementById("b6");
var a7=document.getElementById("b7");
var a8=document.getElementById("b8");
var a9=document.getElementById("b9");
let c=0;
function reload(){
    location.reload();
}
function pl(id){
    if(id==1){
        te.innerHTML="!! CONGRATULATIONS !! PLAYER 1 HAS WON.";
    const temp=setTimeout(reload, 7000);
    }
    else{
        te.innerHTML="!! CONGRATULATIONS !! PLAYER 2 HAS WON.";
    const temp=setTimeout(reload, 7000);
    }
}
function p(i){
    if(arr[0]==i){
        if(arr[3]==i){
            if(arr[6]==i)
            pl(i);
        }
        if(arr[1]==i){
            if(arr[2]==i)
            pl(i);
        }
        if(arr[4]==i){
            if(arr[8]==i)
            pl(i);
        }
    }
    if(arr[8]==i){
        if(arr[7]==i){
            if(arr[6]==i)
            pl(i);
        }
        if(arr[5]==i){
            if(arr[2]==i)
            pl(i);
        }
    }
    if(arr[2]==i){
        if(arr[4]==i){
            if(arr[6]==i)
            pl(i);
        }
    }
}
function evnt(x){
    if(arrc[x]==0){
        if(c%2==0){
            t.innerHTML="2";
            arr[x]=1;
            p(1)
        }
        else{
            t.innerHTML="1";
            arr[x]=2;
            p(2);
        }
        arrc[x]++;
        c++;
        console.log(arr);
        console.log(c);
    }
    else
    alert("You cannot press a button twice!!");
}
a1.addEventListener('click',evnt(0));
a2.addEventListener('click',evnt(1));
a3.addEventListener('click',evnt(2));
a4.addEventListener('click',evnt(3));
a5.addEventListener('click',evnt(4));
a6.addEventListener('click',evnt(5));
a7.addEventListener('click',evnt(6));
a7.addEventListener('click',evnt(7));
a8.addEventListener('click',evnt(8));
a9.addEventListener('click',evnt(9));