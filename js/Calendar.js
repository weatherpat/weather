function getCalendar(){
    var lunarInfo=new Array(0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0);
    var str="日壹二三四五六七八九十";
    var now=new Date(),SY=now.getFullYear(),SM=now.getMonth(),SD=now.getDate();
    var SW=now.getDay();
    var lDObj=new Lunar(now);
    var LM=lDObj.month;
    var LD=lDObj.day;
    function cyclical(num){
        var Gan="甲乙丙丁戊己庚辛壬癸";
        var Zhi="子醜寅卯辰巳午未申酉戌亥";
        return(Gan.charAt(num%10)+Zhi.charAt(num%12));
    }
    function lYearDays(y){
       var i,sum=348;
       for(i=0x8000;i>0x8;i>>=1)sum+=(lunarInfo[y-1900]&i)?1:0;
       return sum+leapDays(y);
    }
    function leapDays(y){if(leapMonth(y))return (lunarInfo[y-1900]&0x10000)?30:29;else return(0);}
    function leapMonth(y){return lunarInfo[y-1900]&0xf;}
    function monthDays(y,m){return (lunarInfo[y-1900]&(0x10000>>m))?30:29;}
    function Lunar(objDate){
        var i,leap=0,temp=0;
        var baseDate=new Date(1900,0,31);
        var offset=(objDate-baseDate)/86400000;
        this.dayCyl=offset+40;
        this.monCyl=14;
        for(i=1900;i<2050&&offset>0;i++){
            temp=lYearDays(i);
            offset-=temp;
            this.monCyl+=12;
        }
        if(offset<0){
            offset+=temp;
            i--;
            this.monCyl-=12;
        }
        this.year=i;
        this.yearCyl=i-1864;
        leap=leapMonth(i);
        this.isLeap=false
        for(i=1;i<13&&offset>0;i++){
            if(leap>0&&i==(leap+1)&&this.isLeap==false){
                --i;
                this.isLeap=true;
                temp=leapDays(this.year);
            }else{
                temp=monthDays(this.year,i);
            }
            if(this.isLeap==true&&i==(leap+1))this.isLeap=false;
            offset-=temp;
            if(this.isLeap==false)this.monCyl++;
        }
        if(offset==0&&leap>0&&i==leap+1)if(this.isLeap){
            this.isLeap=false;
        }else{
            --i;
            this.isLeap=true;
            --this.monCyl;
        }
        if(offset<0){offset+=temp;--i;--this.monCyl;}
        this.month=i;
        this.day=offset+1;
    }
    function YYMMDD(){ 
        var cl = '<font color="#000000">'; 
        if (SW == 0) cl = '<font color="#000000">'; 
        if (SW == 6) cl = '<font color="#000000">';
        return(cl+SY+'年'+(SM+1)+'月'+SD+'日</font>'); 
    }
    function weekday(){ 
        var cl='<font color="#000000">'; 
        if (SW==0||SW==6)cl='<font color="#000000">';
        return cl+"星期"+str.charAt(SW)+'</font>';
    }
    function cDay(m,d){
        var nStr="初十廿卅　",s;
        if(m>10)s='十'+str.charAt(m-10);else s=str.charAt(m);
        s+='月';
        switch(d){
            case 10:s+='初十';break;
            case 20:s+='二十';break;
            case 30:s+='三十';break;
            default:s+=nStr.charAt(Math.floor(d/10));s+=str.charAt(d%10);
        }
        if(lDObj.isLeap)s="閏"+s;
        return(s);
    }
    function lunarTime(){
        return('<font color="#000000">'+cyclical(SY-4)+'年 '); //'+cyclical(SY-4)+'年 '+cDay(LM,LD)+'
    }
    function specialDate(){
        var sTermInfo=new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
        var solarTerm=new Array("小寒","大寒","立春","雨水","驚蟄","春分","清明","谷雨","立夏","小滿","芒種","夏至","小暑","大暑","立秋","處暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
        var lFtv="0101春節0115元宵節0402母親節0505端午節0707七夕0715中元節0815中秋節0909重陽節1208臘八節1224小年0100除夕0215老子誕辰1002紀念張衡0803呂尚誕辰0505管仲誕辰1014紀念王充0622紀念李淳風0615紀念黃履莊"; //農歷
        var sFtv="0101元旦0214情人節0308婦女節0312植樹節0501勞動節0511母親節0601兒童節0701父親節0910教師節0928孔子誕辰1001國慶節1006老人節1024聯合國日1225聖誕節0415達·芬奇誕生0710尼古拉·特斯拉誕生0524法勒海特誕生1127攝爾修斯誕生1228馮·諾依曼誕生0523洛倫茨誕生0928孔子誕辰1107紀念董仲舒1221紀念沈括0804紀念秦九韶0104牛頓誕辰0125拉格朗日誕辰1227開普勒誕辰0405歐拉誕辰0430高斯誕辰1106紀念阿基米德0225伽利略誕辰0314愛因斯坦誕辰0619帕斯卡誕辰1224焦耳誕辰0815德布羅意誕辰";  //新歷
        var tmp1,tmp2,festival='';
        tmp1=new Date((31556925974.7*(SY-1900)+sTermInfo[SM*2+1]*60000)+Date.UTC(1900,0,6,2,5));
        tmp2=tmp1.getUTCDate();
        if(tmp2==SD)festival+=' <font color="#ff6600">：'+solarTerm[SM*2+1]+'</font>';
        tmp1=new Date((31556925974.7*(SY-1900)+sTermInfo[SM*2]*60000)+Date.UTC(1900,0,6,2,5));
        tmp2=tmp1.getUTCDate();
        if(tmp2==SD)festival+=' <font color="#ff6600">：'+solarTerm[SM*2]+'</font>';
        var reg=new RegExp((LM<10&&"0"||"")+LM+(LD<10&&"0"||"")+LD+'([^\\d]+)','');
        if(lFtv.match(reg)!=null)festival+=' <font color="#ff0000">'+RegExp.$1+'</font>';
        reg=new RegExp((SM<9&&"0"||"")+(SM+1)+(SD<10&&"0"||"")+SD+'([^\\d]+)','');
        if(sFtv.match(reg)!=null)festival+=' <font color="#ff0000">'+RegExp.$1+'</font>';
        return(festival);
    }
    return lunarTime()+specialDate();  //YYMMDD()+' '+weekday()+' '+lunarTime()+specialDate();
}
