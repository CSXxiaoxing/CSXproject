define(['jquery'],function($){
    return ()=>{
        // 默认左边的ul隐藏
        $('#lby .list h3').next().css('display','none')
        // 加减小图标改变以及ul动画
        $('#lby .list h3').click(function(){
            $(this).find('span').eq(0).toggleClass('open');
            $(this).next().stop(true).slideToggle();
        })
    }
})