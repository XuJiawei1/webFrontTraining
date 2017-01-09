/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 16-7-25
 * Time: 下午3:18
 * To change this template use File | Settings | File Templates.
 */

//自动轮播的焦点图
(function(){
    var oSlide = $('#slide');
    var oUls = oSlide.find('ul');
    var oULi = oUls.find('li');
    var oOls = oSlide.find('ol');
    var oOlsLi = oOls.find('li');
    var player = null;
    var oPs = oSlide.find('p');
    var oTxt2 = ['电饭锅','是打发士大夫','士大夫似的服务'];
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


})()

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

})()