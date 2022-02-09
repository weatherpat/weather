document.writeln("<style type=\'text/css\'>");
document.writeln("#scrolldemo{");
document.writeln("overflow:hidden;");
document.writeln("height:12px;");
document.writeln("width:100%;");
document.writeln("margin:2px 0;");
document.writeln("position:relative;");
document.writeln("}");
document.writeln("#scrolldemostart{");
document.writeln("height:auto;");
document.writeln("text-align:left;");
document.writeln("}");
document.writeln("#scrolldemoend{");
document.writeln("height:auto;");
document.writeln("text-align:left;");
document.writeln("}");
document.writeln("#scrolldemostart li{");
document.writeln("list-style-type:none;");
document.writeln("height:22px;");
document.writeln("text-align:left;");
document.writeln("text-indent:2px;");
document.writeln("}");
document.writeln("#scrolldemoend li{");
document.writeln("list-style-type:none;");
document.writeln("height:22px;");
document.writeln("text-align:left;");
document.writeln("text-indent:2px;");
document.writeln("}");
document.writeln("</style>");

var speed=100 
window.onload=function(){
var scrolldemo=document.getElementById("scrolldemo"); 
var scrolldemoend=document.getElementById("scrolldemoend"); 
var scrolldemostart=document.getElementById("scrolldemostart"); 
scrolldemoend.innerHTML=scrolldemostart.innerHTML 
function Marquee(){ 
if(scrolldemo.scrollTop>=scrolldemostart.offsetHeight){
scrolldemo.scrollTop=0; 
}
else{ 
scrolldemo.scrollTop=scrolldemo.scrollTop+1;
} 
} 
var MyMar=setInterval(Marquee,speed) 
scrolldemo.onmouseover=function(){clearInterval(MyMar)} 
scrolldemo.onmouseout=function(){MyMar=setInterval(Marquee,speed)} 
}
