var page = {};
page.init = function(){
	var container = document.getElementById('page-container')
	container.style.height = this.height +'px';
}
page.height = window.innerHeight;
page.size = 3;
page.move = {
	element: document.getElementById('page-one'),
	up:function(){
		var positionY = parseInt(this.element.style.marginTop.split('px')[0])||0;
		if(Math.abs(positionY)>0){
			this.element.style.marginTop = positionY + page.height + 'px';
		}
	},
	down:function(){
		var positionY = parseInt(this.element.style.marginTop.split('px')[0])||0;
		if(Math.abs(positionY)<page.height*(page.size-1)){
			this.element.style.marginTop = positionY - page.height + 'px';
		}
	}
}
page.mousescroll = function (e) {  
    e = e || window.event;  
    if (e.wheelDelta&&e.wheelDelta%360==0) {  //判断浏览器IE，谷歌滑轮事件      
        if (e.wheelDelta > 0) { //当滑轮向上滚动时  
            page.move['up']()
        }  
        if (e.wheelDelta < 0) { //当滑轮向下滚动时  
            page.move['down']()
        }  
    } else if (e.detail&&e.detail%360==0) {  //Firefox滑轮事件  
        if (e.detail> 0) { //当滑轮向上滚动时  
            page.move['up']()
        }  
        if (e.detail< 0) { //当滑轮向下滚动时  
            page.move['down']()
        }  
    }  
}  
//给页面绑定滑轮滚动事件  
// if (document.addEventListener) {//firefox  
//     document.addEventListener('DOMMouseScroll', page.mousescroll, false);  
// }  
//滚动滑轮触发page.mousescroll方法  //ie 谷歌  
window.onmousewheel = page.mousescroll;  
window.onload = page.init();