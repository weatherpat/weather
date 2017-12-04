document.writeln("<script src=\'https://weatherpat.github.io/weather/js/Calendar.js\'></script>");
document.writeln("<body onload=\'startTime()\'>");
document.writeln("<div id=\'txt\'></div>");
document.writeln("<script type=\'text/javascript\'>document.write(getCalendar())</script>");
document.writeln("<script type=\'text/javascript\'>");
document.writeln("function startTime()");
document.writeln("{");
document.writeln("var today=new Date()");
document.writeln("var yyyy=today.getUTCFullYear()");
document.writeln("var mm=today.getUTCMonth()+1");
document.writeln("var dd=today.getUTCDate()");
document.writeln("var h=today.getUTCHours()");
document.writeln("var m=today.getUTCMinutes()");
document.writeln("var s=today.getUTCSeconds()");
document.writeln("var ms=today.getUTCMilliseconds()");
document.writeln("// add a zero in front of numbers<10");
document.writeln("mm=checkTime(mm)");
document.writeln("dd=checkTime(dd)");
document.writeln("m=checkTime(m)");
document.writeln("s=checkTime(s)");
document.writeln("document.getElementById(\'txt\').innerHTML=\'UTC Time:\'+yyyy+\'/\'+mm+\'/\'+dd+\' \'+h+\':\'+m+\':\'+s+\'.\'+ms");
document.writeln("");
document.writeln("t=setTimeout(\'startTime()\',1)");
document.writeln("}");
document.writeln("");
document.writeln("function checkTime(i)");
document.writeln("{");
document.writeln("if (i<10) ");
document.writeln("  {i=\'0\' + i}");
document.writeln("  return i");
document.writeln("}");
document.writeln("</script>");
