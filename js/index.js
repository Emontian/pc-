/**
 * Created by Emontian on 2019/1/4.
 */
window.addEventListener('DOMContentLoaded',function(){
    var headerLiNodes = document.querySelectorAll('#header .nav li');
    var arrow = document.querySelector('#header .arrow');
    var arrowHalfWidth = arrow.offsetWidth/2
    var liANodes = document.querySelectorAll('#header .nav a');
    arrow.style.left = headerLiNodes[0].offsetWidth/2 + headerLiNodes[0].offsetLeft - arrowHalfWidth + 'px';

    //导航栏单击事件
    for (var i = 0;i < headerLiNodes.length;i++){
        headerLiNodes[i].index = i;
        headerLiNodes[i].onclick = function(){
            var liHalfWidth = this.offsetWidth/2;
            arrow.style.transition = 'left 0.5s'
            arrow.style.left = this.offsetLeft + liHalfWidth - arrowHalfWidth + 'px';
            for (var j = 0;j < liANodes.length;j++){
                liANodes[j].style.width = '';
            }
            liANodes[this.index].style.width = '100%';
        }
    }


})