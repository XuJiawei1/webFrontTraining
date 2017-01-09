function more(){
	var oShare = document.getElementById('share');
	var oMore =oShare.getElementsByTagName('a')[0];
	var timer = null;
	
	var oDis =parseInt(getStyle(oShare,'right')) ;
	
	
	oShare.onmouseover = function(){
		clearInterval(timer);
		timer = setInterval(function(){
			var iSpeed = 2;
			if(oDis == 0){
				clearInterval(timer);
			}
			else{
				oDis += iSpeed;
				oShare.style.right = oDis + 'px';
				}
			},5);
	
	}
	
	
		oShare.onmouseout = function(){
			
			clearInterval(timer);
			timer = setInterval(function(){
				var iSpeed = -2;
				if(oDis == -202){
					clearInterval(timer);
				}
				else{
					oDis += iSpeed;
					oShare.style.right = oDis + 'px';
					}
				},5);
		
		   }
	
}
	
	
	


more();
function toBanner(){
   var oDiv = document.getElementById('header_banner');
   var aLi = oDiv.getElementsByTagName("li");
   var oPrev = getByClass(oDiv,'prev')[0];
   var oNext = getByClass(oDiv,'next')[0];
   var oPrevBg = getByClass(oDiv,'prev_bg')[0];
   var oNextBg = getByClass(oDiv,'next_bg')[0];
   var iNow=0;
   var iPlayer= null;

   autoPlay();
   
   oPrevBg.onmouseover=oPrev.onmouseover=function(){
       oPrev.style.display='block';
       clearInterval(iPlayer);

   }
   oPrevBg.onmouseout=function(){
       oPrev.style.display='none';
       autoPlay();
   }
   oNextBg.onmouseover=oNext.onmouseover = function(){
             oNext.style.display='block';
             clearInterval(iPlayer);

   }
    oNextBg.onmouseout=function(){
             oNext.style.display='none';
             autoPlay();
    }

   oPrev.onclick = function(){
        goPrev();
   }
   oNext.onclick = function(){
       	goNext();
   }
   function autoPlay(){
   		iPlayer=setInterval(goNext,3000);
   }
   

   function goNext(){
        if(iNow == aLi.length-1){
            iNow = 0;
        }
        else{
            iNow++;
        }

        for(var i=0;i<aLi.length;i++){
           fadeOut(aLi[i]);
        }
           fadeIn(aLi[iNow]);

    }
   function goPrev(){
        if(iNow == 0){
            iNow = aLi.length-1;
        }
        else{
            iNow--;
        }

        for(var i=0;i<aLi.length;i++){
            fadeOut(aLi[i]);
        }

       fadeIn(aLi[iNow]);

    }
       
     


   }

   	toBanner();
	
	// 页脚无缝滚动

    function moveAll(el,old,iTarget){
		// 防止，你上一个动没有结束，又执行下一个动作
		clearInterval(el.timer);
	    el.timer = setInterval(function(){
		
		var iSpeed = (iTarget - old)/10;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		
		if(iTarget == old){
			clearInterval(el.timer);
		}
		else{
			old += iSpeed;
			el.style.left = old + 'px';
		}
		
	},30);
	
	}
		
	(function(){
		var oCf = document.getElementById('display1');
		
		var ocPrev = getByClass(oCf,'cn_prev')[0];
		// 数组， 我们没有加下标
		
		var ocNext = getByClass(oCf,'cn_next')[0];
		var oUl = oCf.getElementsByTagName('ul')[1];
		var aLi = oUl.getElementsByTagName('li');
		//alert(aLi.length);
		var iNow = 0;
		oUl.innerHTML +=oUl.innerHTML;
		oUl.style.width =  aLi.length * aLi[0].offsetWidth + 'px';
		ocPrev.onclick = function(){
	       if(iNow==0){
			   iNow=aLi.length/2;
			   oUl.style.left = -oUl.offsetWidth/2 + 'px';  
		   }
moveAll(oUl,-iNow*aLi[0].offsetWidth,-(iNow-1)*aLi[0].offsetWidth)
			iNow--;   
		  
	     }
		 
		 
	ocNext.onclick = function(){
		
		if(iNow == aLi.length/2){
			iNow = 0;
			oUl.style.left = 0;
		}
		
		moveAll(oUl,-iNow*aLi[0].offsetWidth,-(iNow+1)*aLi[0].offsetWidth);
		
		iNow++;
		
	};
		
    })()
