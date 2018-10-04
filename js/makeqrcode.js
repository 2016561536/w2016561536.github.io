function 二维码(name){   
	//name表示组件在被创建时的名称，event表示组件拥有的事件
	//如果组件有多个事件，可以在后面继续填写这些事件名称
	//例如：function 二维码(name,event1,event2,event3){
		
		//组件内部属性，仅供组件内部使用：
		this.名称 = name;
		
		//组件命令：
		this.生成二维码 = function(codetxt,codesize,dark,Light){
			//设置div的宽度和高度
			var div = document.getElementById(this.名称);
			div.style.width = "" + (codesize+10) + "px";
			div.style.height = "" + (codesize+10) + "px";
			div.style.backgroundColor=Light;
			//清除之前生成的二维码
			var canvas = div.getElementsByTagName("canvas");
			if(canvas!=null && canvas.length>0){
				canvas[0].parentNode.removeChild(canvas[0]);
			}			
			var img = div.getElementsByTagName("img");			
			if(img!=null && img.length>0){
				img[0].parentNode.removeChild(img[0]);
			}
			//生成二维码
			var qrcode = new QRCode(document.getElementById(this.名称), {
        		width: codesize,
        		height: codesize,
        		colorDark: dark,
        		colorLight: Light,
        		correctLevel: QRCode.CorrectLevel.L
      		});	
			qrcode.makeCode(codetxt);	
		}

		//组件命令：
		this.取二维码 = function (){
			var div = document.getElementById(this.名称);
			var img = div.getElementsByTagName("img");			
			if(img!=null && img.length>0){
				return img[0].src;
			}else{
				return "";
			}			
		} 
			
		//组件命令：
		this.置可视 = function (value){
			if(value==true){
				var div = document.getElementById(this.名称);
				div.style.display="block";//显示	                
				}else{
				var div = document.getElementById(this.名称);
				div.style.display="none"; //不占位隐藏               
			}
		} 
		
		//组件命令：
		this.置可视2 = function (value){
			if(value==true){
				var div = document.getElementById(this.名称);
				div.style.visibility="visible";//显示	                
				}else{
				var div = document.getElementById(this.名称);
				div.style.visibility="hidden"; //占位隐藏               
			}
		} 
		
	}																								