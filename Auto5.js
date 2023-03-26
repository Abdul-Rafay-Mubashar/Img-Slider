document.getElementsByClassName('b')[1].style.background="blue";
document.getElementsByClassName('b')[2].style.background="green";
var a;
a=105;
var b;
b="%";
var c;
var d=0;
function one(){
    if(d<a)
    {
        c=d+b;
        document.getElementsByClassName('box1a')[0].style.right=c;
        d=d+5;
        console.log("d : ",d,"a : ",a);
    }
}
var cle
function avg()
{
    cle=setInterval(one,1);
    if(d==a)
    {
        console.log(d,a);
        clearInterval(cle);
        a=a+100;
        if(d==205)
        {
            a=5;
            d=-100;
            document.getElementsByClassName('box1')[0].style.background="white"
            document.getElementsByClassName('box1a')[0].style.right="-100%";
        }
    }
}
var clw;
setInterval(avg,3000)