document.writeln("<style type=\'text/css\'>");
document.writeln("            *{margin:0;padding:0;}");
document.writeln("            ul,li{list-style:none;display:block;}");
document.writeln("            #scrollBox{height:18px;width:100%;overflow:hidden;}");
document.writeln("            #scrollBox #con1,#con2{width:100%;float:left;}");
document.writeln("            #scrollBox li{height:18px;line-height:18px;}");
document.writeln(" </style>");

var area =document.getElementById('scrollBox');
var con1 = document.getElementById('con1');
var con2 = document.getElementById('con2');
con2.innerHTML=con1.innerHTML;
function scrollUp(){
if(area.scrollTop>=con1.offsetHeight){
    area.scrollTop=0;
}else{
    area.scrollTop++
}
}
var time = 400;
var mytimer=setInterval(scrollUp,time);
area.onmouseover=function(){
    clearInterval(mytimer);
}
area.onmouseout=function(){
    mytimer=setInterval(scrollUp,time);
}
