/**
 * Created by Emontian on 2019/1/4.
 */
window.addEventListener('DOMContentLoaded',function(){
    var headerLiNodes = document.querySelectorAll('#header .nav li');
    var arrow = document.querySelector('#header .arrow');
    var liANodes = document.querySelectorAll('#header .nav a');
    var contentMain = document.querySelector('.content .content-main');
    var content = document.querySelector('.content');
    var mainLi = document.querySelectorAll('.content .content-main>li');
    var arrowHalfWidth = arrow.offsetWidth/2;
    var nowIndex = 0;
    arrow.style.left = headerLiNodes[0].offsetWidth/2 + headerLiNodes[0].offsetLeft - arrowHalfWidth + 'px';
    liANodes[0].style.width = '100%';
    //导航栏单击事件
    for (var i = 0;i < headerLiNodes.length;i++){
        headerLiNodes[i].index = i;
        headerLiNodes[i].onclick = function(){
            move(this.index);
            nowIndex = this.index;
            // var liHalfWidth = this.offsetWidth/2;

            /*arrow.style.transition = 'left 0.5s';
            arrow.style.left = this.offsetLeft + liHalfWidth - arrowHalfWidth + 'px';
            for (var j = 0;j < liANodes.length;j++){
                liANodes[j].style.width = '';
            }
            liANodes[this.index].style.width = '100%';
            // console.log(mainLi[this.index].offsetTop);
            contentMain.style.transition = 'top .5s';
            // contentMain.style.top = -this.index*content.offsetHeight +'px';
            contentMain.style.top = -mainLi[this.index].offsetTop +'px';*/
        }
    }


    function move(nowIndex){
        for (var j = 0; j < liANodes.length; j++) {
            liANodes[j].style.width = '';
        }
        //设置当前width为100%
        liANodes[nowIndex].style.width = '100%';
        //让小箭头去当前点击的li的下面
        arrow.style.left = headerLiNodes[nowIndex].offsetLeft + headerLiNodes[nowIndex].offsetWidth / 2
            - arrowHalfWidth + 'px';
        //让内容区ul运动
        contentMain.style.top = - nowIndex * content.offsetHeight + 'px';
    }

    function wheel(event){
        event = event || window.event;
        var flag = '';
        if(event.wheelDelta){
            if(event.wheelDelta > 0){
                flag = 'up';
            }else{
                flag = 'down';
            }
        }else if(event.detail){
            if(event.detail < 0){
                flag = 'up';
            }else{
                flag = 'down;'
            }
        }
        switch(flag){
            case 'up':
                    if (nowIndex > 0) {
                        nowIndex--;
                        move(nowIndex);
                    }
                break;
            case 'down':
                    if (nowIndex < 4) {
                        nowIndex++;
                        move(nowIndex);
                    }
                break;
        }
        document.onmousewheel = null;
        document.removeEventListener('DOMMouseScroll',wheel);
        contentMain.addEventListener('webkitTransitionEnd',function () {
            scroll();
            contentMain.removeEventListener('webkitTransitionEnd',scroll);
        });
        if(nowIndex === 0 || nowIndex === 4) scroll();

        //禁止浏览器默认行为
        event.preventDefault && event.preventDefault();
        return false;
    }
    scroll();
    function scroll(){
        document.onmousewheel = wheel;
        document.addEventListener('DOMMouseScroll',wheel);
    }


});


