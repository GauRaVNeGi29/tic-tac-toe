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

var h1=document.getElementById("h1");
var h2=document.getElementById("h2");
var h3=document.getElementById("h3");
var h4=document.getElementById("h4");
var h5=document.getElementById("h5");
var h6=document.getElementById("h6");
var h7=document.getElementById("h7");
var h8=document.getElementById("h8");
var h9=document.getElementById("h9");
let c=0;
var b=document.getElementById("re");
b.addEventListener('click',reload);
function reload(){
    location.reload();
}
function tie(m){
    if(m==9){
        te.innerHTML="!! Match tied !!";
        const temp=setTimeout(reload, 5000);
    }
}
function p1(){
    te.innerHTML="!! CONGRATULATIONS !! PLAYER 1 HAS WON.";
    const temp=setTimeout(reload, 5000);
}
function p2(){
    te.innerHTML="!! CONGRATULATIONS !! PLAYER 2 HAS WON.";
    const temp=setTimeout(reload, 5000);
}
function p(){
    if(arr[0]==2){
        if(arr[3]==2){
            if(arr[6]==2)
            p2();
        }
        if(arr[1]==2){
            if(arr[2]==2)
            p2();
        }
        if(arr[4]==2){
            if(arr[8]==2)
            p2();
        }
    }
    if(arr[8]==2){
        if(arr[7]==2){
            if(arr[6]==2)
            p2();
        }
        if(arr[5]==2){
            if(arr[2]==2)
            p2();
        }
    }
    if(arr[4]==2){
        if(arr[1]==2){
            if(arr[7]==2)
            p2();
        }
        if(arr[3]==2){
            if(arr[5]==2)
            p2();
        }
    }
    if(arr[4]==1){
        if(arr[1]==1){
            if(arr[7]==1)
            p1();
        }
        if(arr[3]==1){
            if(arr[5]==1)
            p1();
        }
    }
    if(arr[2]==2){
        if(arr[4]==2){
            if(arr[6]==2)
            p2();
        }
    }
    if(arr[0]==1){
        if(arr[3]==1){
            if(arr[6]==1)
            p1();
        }
        if(arr[1]==1){
            if(arr[2]==1)
            p1();
        }
        if(arr[4]==1){
            if(arr[8]==1)
            p1();
        }
    }
    if(arr[8]==1){
        if(arr[7]==1){
            if(arr[6]==1)
            p1();
        }
        if(arr[5]==1){
            if(arr[2]==1)
            p1();
        }
    }
    if(arr[2]==1){
        if(arr[4]==1){
            if(arr[6]==1)
            p1();
        }
    }
}
a1.addEventListener('click',function(){
    if(arrc[0]==0){
        if(c%2==0){
            t.innerHTML="2";
            arr[0]=1;
            h1.innerHTML="O";
        }
        else{
            t.innerHTML="1";
            arr[0]=2;
            h1.innerHTML="X";
        }
        p();
        arrc[0]++;
        c++;
        tie(c);
        console.log(arr);
        console.log(c);
    }
    else
    alert("You cannot press a button twice!!");
});
a2.addEventListener('click',function(){
    if(arrc[1]==0){
        if(c%2==0){
            t.innerHTML="2";
            arr[1]=1;
            h2.innerHTML="O";
        }
        else{
            t.innerHTML="1";
            arr[1]=2;
            h2.innerHTML="X";
        }
        p();
        arrc[1]++;
        c++;
        tie(c);
        console.log(arr);
        console.log(c);
    }
    else
    alert("You cannot press a button twice!!");
});
a3.addEventListener('click',function(){
    if(arrc[2]==0){
        if(c%2==0){
            t.innerHTML="2";
            arr[2]=1;
            h3.innerHTML="O";
        }
        else{
            t.innerHTML="1";
            arr[2]=2;
            h3.innerHTML="X";
        }
        p();
        arrc[2]++;
        c++;
        tie(c);
        console.log(arr);
        console.log(c);
    }
    else
    alert("You cannot press a button twice!!");
});
a4.addEventListener('click',function(){
    if(arrc[3]==0){
        if(c%2==0){
            t.innerHTML="2";
            arr[3]=1;
            h4.innerHTML="O";
        }
        else{
            t.innerHTML="1";
            arr[3]=2;
            h4.innerHTML="X";
        }
        p();
        arrc[3]++;
        c++;
        tie(c);
        console.log(arr);
        console.log(c);
    }
    else
    alert("You cannot press a button twice!!");
});
a5.addEventListener('click',function(){
    if(arrc[4]==0){
        if(c%2==0){
            t.innerHTML="2";
            arr[4]=1;
            h5.innerHTML="O";
        }
        else{
            t.innerHTML="1";
            arr[4]=2;
            h5.innerHTML="X";
        }
        p();
        arrc[4]++;
        c++;
        tie(c);
        console.log(arr);
        console.log(c);
    }
    else
    alert("You cannot press a button twice!!");
});
a6.addEventListener('click',function(){
    if(arrc[5]==0){
        if(c%2==0){
            t.innerHTML="2";
            arr[5]=1;
            h6.innerHTML="O";
        }
        else{
            t.innerHTML="1";
            arr[5]=2;
            h6.innerHTML="X";
        }
        p();
        arrc[5]++;
        c++;
        tie(c);
        console.log(arr);
        console.log(c);
    }
    else
    alert("You cannot press a button twice!!");
});
a7.addEventListener('click',function(){
    if(arrc[6]==0){
        if(c%2==0){
            t.innerHTML="2";
            arr[6]=1;
            h7.innerHTML="O";
        }
        else{
            t.innerHTML="1";
            arr[6]=2;
            h7.innerHTML="X";
        }
        p();
        arrc[6]++;
        c++;
        tie(c);
        console.log(arr);
        console.log(c);
    }
    else
    alert("You cannot press a button twice!!");
});
a8.addEventListener('click',function(){
    if(arrc[7]==0){    
        if(c%2==0){
            t.innerHTML="2";
            arr[7]=1;
            h8.innerHTML="O";
        }
        else{
            t.innerHTML="1";
            arr[7]=2;
            h8.innerHTML="X";
        }
        p();
        arrc[7]++;
        c++;
        tie(c);
        console.log(arr);
        console.log(c);
    }
    else
    alert("You cannot press a button twice!!");
});
a9.addEventListener('click',function(){
    if(arrc[8]==0){
        if(c%2==0){
            t.innerHTML="2";
            arr[8]=1;
            h9.innerHTML="O";
        }
        else{
            t.innerHTML="1";
            arr[8]=2;
            h9.innerHTML="X";
        }
        p();
        arrc[8]++;
        c++;
        tie(c);
        console.log(arr);
        console.log(c);
    }
    else
    alert("You cannot press a button twice!!");
});

