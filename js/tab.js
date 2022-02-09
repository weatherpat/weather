document.writeln("<style type=\'text/css\'> ");
document.writeln("*{margin:0;padding:0;list-style-type:none;}");
document.writeln("a,img{border:0;}");
document.writeln("body{font:14px/100% Arial, Helvetica, sans-serif, \'宋体\';}");
document.writeln(".tab{width:100%;border-top:#cccccc solid 1px;border-bottom:#cccccc solid 1px;margin:1px auto 0 auto;}");
document.writeln(".menu{height:28px;border-right:#cccccc solid 1px;}");
document.writeln(".menu li{float:left;width:99px;text-align:center;line-height:28px;height:28px;cursor:pointer;border-left:#cccccc solid 1px;color:#666;font-size:14px;overflow:hidden;background:#E0E2EB;}");
document.writeln(".menu li.off{background:#FFFFFF;color:#336699;font-weight:bold;}");
document.writeln(".menudiv{border-left:#cccccc solid 0px;border-right:#cccccc solid 1px;border-top:0;background:#fefefe}");
document.writeln(".menudiv div{padding:10px;line-height:26px;}");
document.writeln("</style>");

function setTab(name,cursel){
cursel_0=cursel;
for(var i=1; i<=links_len; i++){
var menu = document.getElementById(name+i);
var menudiv = document.getElementById("con_"+name+"_"+i);
if(i==cursel){
menu.className="off";
menudiv.style.display="block";
}
else{
menu.className="";
menudiv.style.display="none";
}
}
}
function Next(){
cursel_0++;
if (cursel_0>links_len)cursel_0=1
setTab(name_0,cursel_0);
}

var name_0='one';
var cursel_0=1;
var ScrollTime=60000;//循环周期（毫秒）
var links_len,iIntervalId;
onload=function(){
var links = document.getElementById("tab").getElementsByTagName('li')
links_len=links.length;
for(var i=0; i<links_len; i++){
links[i].onmouseover=function(){
clearInterval(iIntervalId);
this.onmouseout=function(){
iIntervalId = setInterval(Next,ScrollTime);;
}
}
}
document.getElementById("con_"+name_0+"_"+links_len).parentNode.onmouseover=function(){
clearInterval(iIntervalId);
this.onmouseout=function(){
iIntervalId = setInterval(Next,ScrollTime);;
}
}
setTab(name_0,cursel_0);
iIntervalId = setInterval(Next,ScrollTime);
}
