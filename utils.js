/**
 * window.open replace
 * @param  {string} url 跳转链接
 */
function openUrl(url){
    var a = $('<a href="'+ url +'" target="_blank">链接</a>');  //生成一个临时链接对象
    var d = a.get(0);
    var e = document.createEvent('MouseEvents');
    e.initEvent( 'click', true, true );  //模拟点击操作
    d.dispatchEvent(e);
    a.remove();   // 点击后移除该对象
}
