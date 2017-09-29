define(['jquery'],function($){
    // 轮播图
    var i=0;
    var lis = $('#main .banner>ul>li');
    lis.css('display','none').eq(0).css('display','block');
    // 生成页码
    $('#main .banner').append($('<div></div>').addClass('yema').append($('<span></span>'.repeat(lis.length))))
    var time = setInterval(function(){
        i++;
        if(i > lis.length){i=0;};
        // 淡入淡出
        lis.stop(true,true).fadeToggle(1000);
    },5000)
    return time;
})