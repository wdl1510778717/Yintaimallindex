function getClass(selector,context){
	context=context||document;
	if(document.getElementsByClassName){
		return  context.getElementsByClassName(selector);
	}else
	    var all=context.all;
		var all=document.getElementsByTagName("*");
		var newarr=[];
		for (var i = 0; i < all.length; i++) {
			if(all[i].className==selector){
				newarr.push(all[i]);
		};
	}
	return newarr;
}
	function checkstr(lstr,str){
		var arr=lstr.split(" ");
		for (var i = 0; i < arr.length; i++) {
			   if(arr[i]=str){
			   	return true;
		};
	}return false;
}
// //兼容的获取或者设置元素的文本内容
//      1先判断浏览器
//      2是获取还是设置
//      3执行对应的操作
     function getText(obj,text){
     	if(document.getElementsByClassName){
           if (text==undefined) {
     		return obj.textContent;
     	}
     	else{
     	   obj.textContent=text;
     	   }
     	}else{
     		if (text==undefined) {
            return obj.innerText;
     		}else{
     			obj.innerText=text;
     		}
     	}
     }
//兼容性获取某一个对象的某一个样式的方式
    function getStyle(obj,attr){
	if(window.getComputedStyle){
	   return window.getComputedStyle(obj,null)[attr]
	}else {
	   return obj.currentStyle[attr]
	}
	}
//  //获取某一属性
//  window.onload=function(){
//      var boxs=getClass("box")[0];
//      alert(window.getComputedStyle(box,null).width)
//      // alert(boxs.currentStyle.width)
//  }
// }

  function $(selector,context){
	context=context||document;
       if(typeof selector=="string"){
	if (selector.charAt(0)==".") {  //获取class类
		return getClass(selector.slice(1),context) 
	}else if (selector.charAt(0)=="#"){          //获取id名
		return document.getElementById(selector.slice(1))   //id名没有下标
	}else {                                      //剩下的获取标签名
		return context.getElementsByTagName(selector)
	}	
	}else if(typeof selector=="function"){
		// window.onload=selector;
		addEvent(window,"load",selector);
	}
}

//添加事件
function addEvent(obj,event,context){
	if (obj,addEventListener){
		obj,addEventListener(event,context,false)
	}else{
		obj.addEvent("on"+event,context)
	}
}
//移除事件
function removeEvent(obj,event,callback){
	if (obj.removeEventListener) {
		obj.removeEventListener(event,callback,false)
	}else{
		obj.removeEvent("on"+event,callback)
	}
}
//滚轮事件
function mousewheel(obj,upfun,downfun){
if (obj.addEventListener) {
	obj.addEventListener("mousewheel",scrollfun,false)
	obj.addEventListener("DOMMouseScroll",scrollfun,false)
}else{
	obj.attachEvent("onmousewheel",scrollfun)
}
function scrollfun(e){
     		var ev=e||window.event;
     		var dir=ev.detail||ev.wheelDelta;
     		if(dir==-3||dir==120){
     			upfun.call(obj);
     		}
     		if(dir==3||dir==-120){
     			downfun.call(obj);
     		}
      
    }
}

  //判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
	if(parent.contains){
	   return parent.contains(child) && parent!=child;
	}else{
	  return (parent.compareDocumentPosition(child)===20);
	}
 }
 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
	 if(getEvent(e).type=="mouseover"){
	    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	 }else{
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
		}
  }
//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
	  if(overfun){
	    obj.onmouseover=function  (e) {
			  if(checkHover(e,obj)){
			     overfun.call(obj,[e]);
			  }
	    }
	  }
	  if(outfun){
	    obj.onmouseout=function  (e) {
			  if(checkHover(e,obj)){
			     outfun.call(obj,[e]);
			  }
	    }
	  }
  }
  function getEvent(e){
    return e||window.event;
  }
   // 获得所有元素子节点的函数
   function getChild(obj){
    var childs=obj.childNodes;
    var newarr=[];
    for (var i = 0; i < childs.length; i++) {
      if (childs[i].nodeType==1) {
        newarr.push(childs[i])
      };
    };
    return newarr;
  }
 // 获取第一个元素子节点   
   function getFirst(obj){
       return getChild(obj)[0]  
   }
  // 获取最后一个元素子节点
   function getLast(obj){
       var arr=getChild(obj);
       return arr[arr.length-1];
   }
  // 获取下一个元素兄弟节点
  function getNext(obj){
     var next=obj.nextSibling;
     if(next==null){
      return null;
     }
     while(next.nodeType!=1){
        next=next.nextSibling;
        if(next==null){
          return null;
        }
     }
     return next;
  }
    //获取上一个元素兄弟节点
  function getPrevious(obj){
     var previous=obj.previousSibling;
     if(previous==null){
      return null;
     }
     while(previous.nodeType!=1){
       previous=previous.previousSibling;
       if(previous==null){
        return null;
       }
     }
     return previous;
  }
    //将一个元素插入到另一个元素的后面
   function insertAfter(oldobj,newobj){
      var next=getNext(oldobj);
      var parent=oldobj.parentNode;
      if(next){
       // parent.insertBefore(newobj,next)
      }else{
       parent.appendChild(newobj) 
      }
   }