首先： 
	> node-inspector
然后在新窗口中：
	> node --debug-brk(or: --debug) <文件名>
然后在Chrome中打开：
	http://127.0.0.1:8080/debug?port=5858
	即可进入调试界面	