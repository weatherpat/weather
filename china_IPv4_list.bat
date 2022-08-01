@pushd "%~dp0" >nul 2>&1
:设置在同文件夹下创建

title 下载中国IPv4库
:设置窗口标题

mode con cols=90 lines=40&color 0a
:定义窗口大小与字体颜色

bitsadmin /transfer down http://aliyun.chenby.cn/ipv4.txt %cd%\IPv4.txt
:下载IP库(可自行更换库地址)

attrib -h -s -r -a %cd%
:更改文件所在路径属性

SET "TheStart=add address="
:每行添加前缀内容

SET "TheEnd= list=china_list"
:每行添加后缀内容

FOR /f "tokens=*" %%i IN (IPv4.txt) DO ( >>list.txt ECHO %TheStart%%%i%TheEnd% )
:生成添加前后缀内容的文件 %

echo /ip firewall address-list>first.txt
:创建导入表首行(用于可直接导入使用) 

copy/b first.txt+list.txt china_IPv4_list.rsc
:合并输出可以导入文件

del /s /q first.txt
del /s /q list.txt
del /s /q IPv4.txt
:删除临时创建文件

%  剪贴去指定地方(有需求可以玩) %
%  net use \\172.0.0.1 "密码" /user:"账号" %
%  xcopy china_IPv4_list.rsc \\127.0.0.1\china_ipv4_list /D /E /Y /H /K %
%  net use \\172.0.0.1 /delete %
%  del /s /q china_IPv4_list.rsc %
