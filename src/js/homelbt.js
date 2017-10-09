define(['jquery'],function($){
    return ()=>{
    // 轮播图
    var i=0;
    var lis = $('#main .banner>ul>li');
    lis.css('display','none').eq(0).css('display','block');
    // 生成页码
    $('#main .banner').append($('<div></div>').addClass('yema').append($('<span></span>'.repeat(lis.length))))
    $('#main .yema span').eq(0).addClass('atkou').html('1')
    $('#main .yema span').eq(1).html('2')
    var time = setInterval(function(){
        i++;
        if(i > lis.length){i=0;};
        // 页码at跟随
        $('#main .yema span').toggleClass('atkou');
        // 淡入淡出
        lis.stop(true,true).fadeToggle(1000);
    },5000)
    // 鼠标移入页码图片更改
    $('#main .yema span').mouseover(function(){
        // 清除定时器
        clearInterval(time);
        // 页码at跟随
        $('#main .yema span').toggleClass('atkou');
        // 淡入淡出
        lis.stop(true,true).fadeToggle(1000);
    }).mouseout(function(){
        time = setInterval(function(){
        i++;
        if(i > lis.length){i=0;};
        // 页码at跟随
        $('#main .yema span').toggleClass('atkou');
        // 淡入淡出
        lis.stop(true,true).fadeToggle(1000);
    },5000)
    })
    }
})