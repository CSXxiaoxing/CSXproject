require.config({
    paths:{
        jquery:'../lib/jquery-3.2.1',
        TBload:'./TBload',
        TBjs:'./TBjs',
        cartjs:'./cartjs'
    },
    shim:{
        TBload:['jquery'],
        TBjs:['jquery','TBload'],
        cartjs:['jquery','TBload']
    }
});
require(['jquery','TBload','TBjs','cartjs'],function($,TB,tb,cart){
    TB()[0];TB()[1];
    setTimeout(function(){
        tb();
        $('#indexTop div').eq(1).css('display','none');
        $('#indexTop div').eq(2).css('display','none');
    },300)
    cart()
})