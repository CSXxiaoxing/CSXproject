require.config({
    paths:{
        jquery:'../lib/jquery-3.2.1',
        TBload:'./TBload',
        TBjs:'./TBjs',
        lbyjs:'./lbyjs'
    },
    shim:{
        TBload:['jquery'],
        TBjs:['jquery','TBload']
    }
});
require(['jquery','TBload','TBjs','lbyjs'],function($,TB,tb,lby){
    TB()[0];TB()[1];
    // 延迟执行
    setTimeout(function(){
        tb();
    },500)
    lby();
    // 点击存cookie并跳转
    $('#content').children().click(function(){
        var idid = $(this).find('img').attr('data-id')
        document.cookie='id='+idid+';path=/';
        console.log(idid)
        console.log(666)
    })
})