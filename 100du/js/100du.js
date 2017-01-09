/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 16-7-25
 * Time: 上午9:33
 * To change this template use File | Settings | File Templates.
 */



$(function(){
	
 (function(){
	 var oLi = $('#menu li');
	 var oTxt = $('#search').find('form .text');
	 var arrText=[
	     '111111111111111111111111',
		 '2222222222222222222222',
		 '333333333333333333333',
		 '44444444444444444444',
		 '5555555555555555'
	 ]
	 
	 var iNow = 0;
	 oTxt.val(arrText[iNow]);
	 
	 oLi.each(function(index, element) {
          $(this).mouseover(function(){
			  oLi.attr('class','gradient');
			  $(this).attr('class','active')
			  iNow = index;
			  oTxt.val(arrText[iNow]);
			 })
    });
	 
 })();


   // 变量名的命名，一定要有意义
   
   // strOb
   
   // oBox  // oDiv

  // 文字滑动效果
	  (function(){
		 
		 
	  var oDiv = $('.update');
	  var oUl = oDiv.find('ul');
	  var iNow= 0;
	  var timer = null;
	  var oBtnUp = $('#updateUpBtn');
	  var oBtnDown = $('#updateDownBtn');
	  var arrData = [
	  {'author':'李有财','time':4,'title':'花园为什么没有人家','url':'http://www.china.com'},
	  {'author':'李有钱','time':6,'title':'饭为什么没有人家','url':'http://www.164.com'},
	  {'author':'王财主','time':8,'title':'钱园为什么没有人家','url':'http://www.163.com'},
	  {'author':'马二','time':10,'title':'钱为什么没有人家','url':'http://www.china.com'},
	  {'author':'有财','time':12,'title':'有点为什么没有人家','url':'http://www.china.com'},
	  {'author':'赵有财','time':14,'title':'呵吕为什么没有人家','url':'http://www.china.com'}
	  ];
	  var str='';
	  for(var i=0;i<arrData.length;i++){
		   str +='<li><a href="'+ arrData[i].url+'"><strong>' + arrData[i].author + '</strong><span>' + arrData[i].time + '分种前</span>发表'
		   + arrData[i].title + '...</a></li>';
		  }
	
	  oUl.html(str);
     var iH = oUl.find('li').height();
	 oDiv.hover(
	 function(){
		  clearInterval(timer)
		 },
	 function(){
		  autoPlay();
		 })
	 
	 oBtnUp.click(function(){
		   doMove(-1);
		 })
	 
	 oBtnDown.click(function(){
		   doMove(1);
	  })
	 function autoPlay(){
		  timer=setInterval(function(){
			     doMove(-1);
			   },2000)
		 }
     autoPlay();
	 
     function doMove(num){
		  iNow += num;
		  if(Math.abs(iNow)>arrData.length-1){
			    iNow = 0;
			  }
		  if(iNow > 0){
			   iNow = -(arrData.length-1)
			  }
		   oUl.stop().animate({'top':iH*iNow},1000,"backBoth");
    }
  
		  })();



    // 选项卡 要点
	//  tabLi 
	// tabContent
	// sEvent
	
	// 事件绑定
	
	// bind ,one,delegate,live(1.7版取消了),on
	
	/// 程序最适合的流程 是标准
	
    (function(){
		fntab($('.tabNav1'),$('.tabCon1'),'click');
	fntab($('.tabNav2'),$('.tabCon2'),'click');
	fntab($('.tabNav3'),$('.tabCon3'),'mouseover');
	fntab($('.tabNav4'),$('.tabCon4'),'mouseover');
	
	function fntab(tabLi,tabContent,sEvent){
		
		  var oTabLi = tabLi.children();
		  tabContent.hide().eq(0).show();
		  oTabLi.each(function(index){
			    $(this).on(sEvent,function(){
			     oTabLi.removeClass('active').addClass('gradient');
				 $(this).removeClass('gradient').addClass('active');
				 tabLi.find('a').attr('class','triangle_down_gray');
				 $(this).find('a').attr('class','triangle_down_red');
				 tabContent.hide().eq(index).show();
			  })
		 })
       }
	   
	
		})();
	
	   
	   
	   
	   // 自动播放的焦点图
	   
	   
	   
	 (function(){
		 
		var oSlide = $('#slide');
		var oUls = oSlide.find('ul');
		var oULi = oUls.find('li');
		var oOls = oSlide.find('ol');
        var oOlsLi = oOls.find('li');
		var player = null;

		var oPs = oSlide.find('p');
		var oTxt2 = ['爸爸去哪儿啦~','你为什么发出怪怪的声音','是不是有妖气'];
		var iNow = 0;
		
		oOlsLi.click(function(){
			   iNow = $(this).index();
			   fnFade();
			})
        oSlide.hover(function(){
			 clearInterval(player)
			},function(){
				 autoPlay2();
				})		
		function autoPlay2(){
			player = setInterval(function(){
				   iNow++;
				   iNow%=oTxt2.length;
				   fnFade();
				},2000)
			}
		autoPlay2();
		function fnFade(){
			   oULi.each(function(ind){
				   if(ind !=iNow){
					     oULi.eq(ind).fadeOut().css('zIndex',1);
						 oOlsLi.eq(ind).removeClass('active');
					   }else{
						    oULi.eq(ind).fadeIn().css('zIndex',2);
							oOlsLi.eq(ind).addClass('active');
						   }
				   })
				   oPs.text(oTxt2[iNow]);
			}
	   
		 })();
	   
	   
	   //  日历的图片提示说明
	   
	   (function(){
		   
		   var aSpan = $('.calendar h3 span');
		   var oImg = $('.calendar .img1');
		   var oTips = $('.calendar .today_info');
		   var oImg2 = oTips.find('img');
		   var oStrong = oTips.find('strong');
		   var oP = oTips.find('p')
		   
		     oImg.hover(function(e){
				  // 因为　e得到的坐标是绝对值
				  
			   var  iTop = $(this).parent().position().top-30;
			   var iLeft = $(this).parent().position().left+50;
			   var index = $(this).parent().index()%aSpan.size();
			   //alert(index);
			   
			  //alert(iTop)
			   oTips.show().css({'left':iLeft,'top':iTop});
			  //alert(e.pageX)
			   //oTips.show().css({'left':100 ,'top':50});
			   oP.text($(this).attr('info'));
			   oImg2.attr('src',$(this).attr('src'));
			   oStrong.text(aSpan.eq(index).text())
			   },
			   function(){
				   oTips.hide();
			   })
			   
			})();
			
		 // BBS 选中高亮
			
	    (function(){
			
           var bbsOl = $('.bbs ol li');
		   bbsOl.mouseover(function(){
			     $(this).addClass('active').siblings().removeClass('active');
			   })	
				
				
		})();
		
		
		// 人气 数据后台给我
		
		
		(function(){
			
			var renData=[   //
			   '',
			   '用户1<br />人气1000',
			   '用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			   '用户3<br />人气1000',
			   '用户4<br />人气1000',
			   '用户5<br />人气1000',
			   '用户6<br />人气1000',
			   '用户7<br />人气1000',
			   '用户8<br />人气1000',
			   '用户9<br />人气1000',
			   '用户10<br />人气1000',
			]
			
          $('.hot_area li').mouseover(function(){
			      var ind = $(this).index();
				  if(ind==0)return;
			      $('.hot_area li p').remove();
				  //$(this).html('<p>'+ renData[ind]+'</p>');
				  $(this).append('<p style="width:'+($(this).width()-12)+ 'px">'+ renData[ind]+'</p>');
			  })
			
	    })();
	   
	   
	   
})