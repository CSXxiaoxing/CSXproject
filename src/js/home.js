require.config({
    paths:{
        jquery:'../lib/jquery-3.2.1',

    },
    // 配置依赖
    shim:{
        TBjs:['TBload','jquery']
    }
});
require(['jquery','TBload','homelbt','TBjs','shuju'],function($,TB,lb,tb,sj){

    TB('index')[0];TB('index')[1];

    setTimeout(function(){
        tb('index');
    },500)
    
    sj.forEach(function(item){
        return item;
    })
})