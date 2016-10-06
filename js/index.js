window.onload=function(){
  //banner部分效果
      var banner_btn=document.getElementsByClassName("banner-btn");
      var banner_images=document.getElementsByClassName("banner-img");
      var banner_box=document.getElementsByClassName("head-milld5-2")[0];
      var banner_zhong=document.getElementsByClassName("head-box5")[0];
      var banner_color=["#0089CC","#DDF8FF","#ECECEE","#F4C900","#120E0B","#F6F7FC"]
      var left1=getClass("jiantou3")[0];
     var right1=getClass("jiantou4")[0];
      var headjiantou=getClass("head-jiantouss");
   
     
     left1.onmouseover=function(){
      this.style.backgroundPosition="left bottom";
     }
     right1.onmouseover=function(){
      this.style.backgroundPosition="right bottom";
     }
     left1.onmouseout=function(){
      this.style.backgroundPosition="left top";
     }
     right1.onmouseout=function(){
      this.style.backgroundPosition="right top";
     }
      for (var i = 0; i < banner_btn.length; i++) {
            banner_btn[i].index=i;
            banner_btn[i].onmouseover=function(){
                  num=this.index;
            for (var i = 0; i < banner_btn.length; i++) {
              banner_btn[i].style.backgroundColor="";
              banner_images[i].style.zIndex=2;
            };
             this.style.backgroundColor="rgb(229,0,79)";
             banner_images[this.index].style.zIndex=4;
             banner_zhong.style.backgroundColor=banner_color[this.index];
            }
               
         };  
      // 动画
      var lunbo=setInterval(move,2000)
      var num=0;
      function move(){
            num++;
            if (num==6) {
                  num=0;
            }
            for (var i = 0; i < banner_btn.length; i++) {
              banner_btn[i].style.backgroundColor="";
              banner_images[i].style.zIndex=2;
            };
         
            banner_zhong.style.backgroundColor=banner_color[num];
            banner_images[num].style.zIndex=4;
            banner_btn[num].style.backgroundColor="rgb(229,0,79)";
      }
        hover(banner_zhong,function(){
        	clearInterval(lunbo)
     headjiantou[0].style.zIndex=10;
      headjiantou[1].style.zIndex=10;
      },function(){
      	lunbo=setInterval(move,2000)
  	  headjiantou[0].style.zIndex=0;
      headjiantou[1].style.zIndex=0;

  })
     
      right1.onclick=function(){
          num++
          if (num==banner_btn.length) {
            num=0;
          };
         for (var i = 0; i < banner_btn.length; i++) {
      banner_btn[i].style.backgroundColor="rgb(33,22,22)";
            banner_images[i].style.zIndex=1;
    };
    banner_btn[num].style.backgroundColor="rgb(229,0,79)";
          banner_images[num].style.zIndex=2;
          banner_zhong.style.backgroundImage=banner_color[num]
     }
 
  left1.onclick=function(){
     num--
     if (num==-1) {
        num=0;
     }
    for (var i = 0; i < banner_btn.length; i++) {

      banner_btn[i].style.backgroundColor="rgb(33,22,22)";
            banner_images[i].style.zIndex=1;
    };
    clearInterval(lunbo)
    banner_btn[num].style.backgroundColor="rgb(229,0,79)";
          banner_images[num].style.zIndex=2;
          banner_zhong.style.backgroundImage=banner_color[num]
  }
 
   



      

//banner部分效果结束
//banner下拉菜单开始
var bannerlistbox=$(".head-left-list");
// alert(1)
		var bannerlistitem=$(".head-left1-11");
		for (var i = 0; i < bannerlistbox.length; i++) {
			bannerlistbox[i].index=i
			// alert(bannerlistitem)
				hover(bannerlistbox[i],function(){
			    
			
				bannerlistitem[this.index].style.display="block";

		},function(){
				bannerlistitem[this.index].style.display="none";
				
			

		})
	}
		// alert(2)
	
 //页面切换选项卡1

     var btns1=document.getElementsByClassName("recommended-border");
     var text=document.getElementsByClassName("recommended-font");
     var jiantoure=document.getElementsByClassName("recommended-jiantou");
     var recommend=document.getElementsByClassName("recommended-left2-1");
   for (var i = 0; i < btns1.length; i++) {
        btns1[i].index=i;
        btns1[i].onmouseover=function(){
          for (var i = 0; i < btns1.length; i++) {
            jiantoure[i].style.display="none";
            recommend[i].style.display="none";
            btns1[i].style.borderColor="#333";
            text[i].style.fontWeight="400";
            text[i].style.color="rgb(102,102,102)"; 
          };
          recommend[this.index].style.display="block";
          this.style.borderColor="rgb(229,0,79)" 
          text[this.index].style.fontWeight="700";
          text[this.index].style.color="#000";
           jiantoure[this.index].style.display="block";
        }
      }


  //页面切换选项卡2
	var counters=document.getElementsByClassName("counters-bottom-right-bottom-box1");
	var btns=document.getElementsByClassName("counters-bottom-right-top1");
	var biaoti=document.getElementsByClassName("counters-right-biaoti")
	var top1=document.getElementsByClassName("counters-right-top1"); 
	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;
		btns[i].onmouseover=function(){
			for (var i = 0; i < btns.length; i++) {
				counters[i].style.display="none";
                btns[i].style.borderColor="rgb(51,51,51)";
                biaoti[i].style.color="#666"
                biaoti[i].style.fontWeight="400"
                top1[i].style.display="none";
                   
			};
			counters[this.index].style.display="block";
			this.style.borderColor="rgb(231,0,80)";
			biaoti[this.index].style.color="rgb(65,65,65)"
			biaoti[this.index].style.fontWeight="700"
			top1[this.index].style.display="block"
		}
	};


//时尚品牌
var centers=getClass("brand1-center-box-small");
     var jiantou=getClass("brand1-center-box");
     var left=getClass("jiantou1");
     var right=getClass("jiantou2");
     var bottom=getClass("brand1-center-bottom");
       for (var i = 0; i < jiantou.length; i++) {
            lunbo2(jiantou[i],centers[i],left[i],right[i])
       };
       function lunbo2(jiantou,centers,left,right,bottom){
     var banner_dian=getClass("brand1-center-bottom1");
     var flag=true;
     jiantou.onmouseover=function(){
     	animate(left,{left:0},200);
     	animate(right,{right:0},200);
     }//鼠标移入箭头出现
     jiantou.onmouseout=function(){
     	animate(left,{left:-30},200);
     	animate(right,{right:-30},200);
     }//鼠标移出箭头消失
     //箭头点击
     left.onmouseover=function(){
     	this.style.backgroundPosition="left bottom";
     }
     right.onmouseover=function(){
     	if (flag) {
     		flag=true
     	this.style.backgroundPosition="right bottom";
     }
     }
     left.onmouseout=function(){
     	this.style.backgroundPosition="left top";
     }
     right.onmouseout=function(){
     	this.style.backgroundPosition="right top";
     }
    //按钮、箭头点击
       right.onclick=moveright;
       left.onclick=moveleft;
       banner_dian[0].onclick=moveleft;
       banner_dian[1].onclick=moveright;
        function moveright() {
       	animate(centers,{marginLeft:-390})
       	banner_dian[0].style.backgroundPosition="top"
       	banner_dian[1].style.backgroundPosition="bottom"
       	flag=false;
       }
        function moveleft() {
        animate(centers,{marginLeft:0})
        banner_dian[1].style.backgroundPosition="top"
       	banner_dian[0].style.backgroundPosition="bottom"
       	flag=true
     }
    
  } 

// 流线图

   function border(obj,time){
        obj.style.position="relative";
        var div1=document.createElement("div");
        var div2=document.createElement("div");
        var div3=document.createElement("div");
        var div4=document.createElement("div");

        div1.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;height:1px;"
        div2.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;width:1px;"
        div3.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;height:1px;"
        div4.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;width:1px;"
        obj.appendChild(div1);
        obj.appendChild(div2);
        obj.appendChild(div3);
        obj.appendChild(div4);
        var width=parseInt(getStyle(obj,"width"));
        var height=parseInt(getStyle(obj,"height"));
        obj.onmouseover=function(){
          animate(div1,{width:width},time);
          animate(div2,{height:height},time);
          animate(div3,{width:width},time);
          animate(div4,{height:height},time);
        }
        obj.onmouseout=function(){
          animate(div1,{width:0},time);
          animate(div2,{height:0},time);
          animate(div3,{width:0},time);
          animate(div4,{height:0},time);
        }
      }
      var box=$(".recommended-left2-1-1");
      var box1=$(".counters-small11");
      var box2=$(".brand1-right-1");
      var box3=$(".bottom-box1");

      for (var i = 0; i < box.length; i++) {
        border(box[i],1000);
   
      };
      for (var i = 0; i < box1.length; i++) {
        border(box1[i],1000);    
      };
      for (var i = 0; i < box2.length; i++) {
        border(box2[i],1000);
      };
      for (var i = 0; i < box3.length; i++) {
        border(box3[i],1000);
      };
  




//侧边栏效果

      var rightbn=$(".rightbar-box")[0];
      document.documentElement.scrollTop=1;
      if (document.documentElement.scrollTop==1) {
        //判断滚动事件的兼容性
        var scrollobj=document.documentElement;
      }else{
        var scrollobj=document.body;
      }
     function jtp(){
        var st=scrollobj.scrollTop;
        if (st>120) {
          rightbn.style.display="block";
        }else{
          rightbn.style.display="none";
        }
      }
      var pingpai=$(".brand-box1");
      var rightbtns=$(".right-bar");
      var head=$(".head-box")[0];
      var returnt=$(".right-bar1")[0]
      for (var i = 0; i < rightbtns.length; i++) {
        rightbtns[i].index=i;
        rightbtns[i].onclick=function(){
          var ot=pingpai[this.index].offsetTop;
          animate(scrollobj,{scrollTop:ot})
        }
      };
      returnt.onclick=function(){
        var ob=head.offsetTop;
        animate(scrollobj,{scrollTop:ob})
      }

   addEvent(window,'scroll',jtp)

// 侧栏变颜色
    var pt=[]
     for (var i = 0; i < pingpai.length; i++) {
        pt.push(pingpai[i].offsetTop);
        
     };
     // alert(pt[2])
      function lc3(){
        for (var i = 0; i < rightbtns.length; i++) {
          if (scrollobj.scrollTop>pt[i]-300) {
            for (var j = 0; j < rightbtns.length; j++) {
              rightbtns[j].style.cssText=""
            };
              rightbtns[i].style.cssText="font-size:14px;background:#e5004f;color:#fff;line-height:18px";

          }
        };
      }
      addEvent(window,"scroll",lc3)
  

//顶部下拉菜单list
//微信
var toplist=$(".toplist-milld1-list")[0];
var topwechat=$(".toplist-milld1-left2")[0];
 topwechat.onmouseover=function(){
  toplist.style.display="block";
 }
 topwechat.onmouseout=function(){
  toplist.style.display="none";
}

//手机银泰
var toplist1=$(".toplist-milld1-list1")[0];
var topyintai=$(".toplist-milld1-left3")[0];
 topyintai.onmouseover=function(){
  toplist1.style.display="block";
 }
 topyintai.onmouseout=function(){
  toplist1.style.display="none";
}

//我的银泰
var toplist2=$(".toplist-milld1-list2")[0];
var myyintai=$(".toplist-milld1-right3")[0];
 myyintai.onmouseover=function(){
  toplist2.style.display="block";
 }
 myyintai.onmouseout=function(){
  toplist2.style.display="none";
}

//图片循环
var jt1=$(".brand1-left-jiantou1");
      var jt2=$(".brand1-left-jiantou2");
      var inner=$(".brand1-left-bottom-box1");
      var flag=true;
      var flag2=true;
      for (var i = 0; i < jt1.length; i++) {
           lunbo3(jt1[i],jt2[i],inner[i])
      };
      function lunbo3(jt1,jt2,inner){
    jt2.onclick=function(){
      if (!flag2) {
        return
      };
      flag2=false
      animate(inner,{marginLeft:-160},1000,function(){
        var first=getFirst(inner);
        inner.appendChild(first);
        inner.style.marginLeft=0;
        flag2=true;
      })
    }
    jt1.onclick=function(){
      if (!flag) {
        return
      };
      flag=false
      var last=getLast(inner);
      var first=getFirst(inner);
      inner.insertBefore(last,first)
      inner.style.marginLeft="-160px"
      animate(inner,{marginLeft:0},1000,function(){
        flag=true
      })
    }
   }
//按需加载
var floors=$(".floor");
  var arr=[];
  for (var i = 0; i < floors.length; i++) {
    arr.push(floors[i].offsetTop)
    //获取所有的各个楼层块超出浏览器的top值
  }
  document.documentElement.scrollTop=1;
 if(document.documentElement.scrollTop==1){
 var topss=document.documentElement;
}else{
  var topss=document.body;
}
var aaa=0;
  var tops=document.documentElement;//兼容性
  var wh=tops.clientHeight;
 function jz(){
    
    // var topsss=topss.scrollTop;
    for (var i = 0; i < floors.length; i++) {

      imgsss=$("img",floors[i])//获取每一张图片
      if(topss.scrollTop+wh>arr[i]&&floors[i].getAttribute('flag')!="true") {
         for (var j = 0; j < imgsss.length; j++) { ++aaa;
    console.log(aaa)
              imgsss[j].src=imgsss[j].getAttribute("asrc")
         }
           floors[i].setAttribute('flag',true)
        
      };
    };
  }
addEvent(window,'scroll',jz)
/*思路：
1. 首先把图片的src地址放到asrc中
2. 获取所有放图片的容器
3. 把存放所有容器的offsetTop值放入数组
4. 解决offsetTop的兼容性问题
5. 添加滚动条事件
6. 获取当前offsetTop的值
7. 用当前容器的每一个offsetTop值与滚动条高度scrollTop比较
哪一个满足条件就把img获取的asrc赋给图片的src
*/

}

