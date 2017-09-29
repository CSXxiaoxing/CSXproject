define(['jquery','TBload','TBjs'],function($){
    return ()=>{
        var cookie = document.cookie.split('=')[1];
        var tab =  $('#zhuce .nei>div');
        if(cookie === '免费注册'){
            tab.eq(1).css('display','none');
            tab.eq(0).css('display','block');
        };
        if(cookie === '登录'){
            tab.eq(0).css('display','none');
            tab.eq(1).css('display','block');
        }
    }
})