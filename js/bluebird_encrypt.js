    function 加密操作(name){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 加密操作(name,event1,event2,event3){
        
		//注意：js目录中引入了一个功能所需的js库,bluebird_jiami.js
		
        //组件内部属性，仅供组件内部使用：
        //this.名称 = name;
        
        //组件命令：
        this.取md5值 = function(str){
            if(str!=null){
				return CryptoJS.MD5(str);
			}else{
				return "";
			}
        } 
		
		//组件命令：
		this.取sha1值 = function (str){
		   return CryptoJS.SHA1(str);
        }
       
        //组件命令：
        this.url编码=function(str){
		     if(str!=null){
			      return encodeURI(str);
			 }else{
				  return "";
			 }
		}

        //组件命令：
        this.url解码=function(str){
		     if(str!=null){
			      return decodeURI(str);
			 }else{
				  return "";
			 }
		}

        //组件命令：
        this.rc4加密=function(str,key){
		     if(str!=null){
			      return CryptoJS.RC4.encrypt(str,key);
			 }else{
				  return "";
			 }
		}

        //组件命令：
        this.rc4解密=function(str,key){
		     if(str!=null){
			 	  var result = CryptoJS.RC4.decrypt(str,key).toString(CryptoJS.enc.Utf8);
			      return result;
			 }else{
				  return "";
			 }
		}

        //组件命令：
        this.aes加密=function(str,key){
		     if(str!=null){
			      return CryptoJS.AES.encrypt(str,key);
			 }else{
				  return "";
			 }
		}

        //组件命令：
        this.aes解密=function(str,key){
		     if(str!=null){
			 	  var result = CryptoJS.AES.decrypt(str,key).toString(CryptoJS.enc.Utf8);
			      return result;
			 }else{
				  return "";
			 }
		}

        //组件命令：
        this.des加密=function(str,key){
		     if(str!=null){
			      return CryptoJS.DES.encrypt(str,key);
			 }else{
				  return "";
			 }
		}

        //组件命令：
        this.des解密=function(str,key){
		     if(str!=null){
			 	  var result = CryptoJS.DES.decrypt(str,key).toString(CryptoJS.enc.Utf8);
			      return result;
			 }else{
				  return "";
			 }
		}

        //组件命令：
        this.base64加密=function(str){
		     if(str!=null){
				var str2 = CryptoJS.enc.Utf8.parse(str);
		    	return CryptoJS.enc.Base64.stringify(str2);
			 }else{
				  return "";
			 }
		}

        //组件命令：
        this.base64解密=function(str,key){
		     if(str!=null){
			 	  var result = CryptoJS.enc.Base64.parse(str,key).toString(CryptoJS.enc.Utf8);
			      return result;
			 }else{
				  return "";
			 }
		}

		//组件命令：
		this.usc2转ansi = function (str){
			//return str.replace(/(\\u)(\w{4}|\w{2})/gi);
			return unescape(str.replace(/\\u/g,"%u"));
		}
		
		//组件命令：
		this.ansi转usc2 = function (str){
			var temp = "",rs = "";  
			for( var i=0 , len = str.length; i < len; i++ ){  
   			 temp = str.charCodeAt(i).toString(16);  
   			 rs  += "\\u"+ new Array(5-temp.length).join("0") + temp;  
			}  
			return rs;
		} 

    }