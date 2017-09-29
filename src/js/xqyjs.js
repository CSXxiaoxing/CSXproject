define(['jquery'],function($){
    return ()=>{

    // 放大镜(待简化)
        // 小图移入active跟随
        var mining = $('.p01_l ul img');
        // 默认显示第一张
        mining.eq(0).addClass('active')
        mining.hover(function(){
            mining.removeClass('active');
            $(this).addClass('active');
            var id = $(this).parent().index();
            // 关联大图
            $('.p01_l .img img').css('display','none').eq(id).css('display','block')
            // 关联巨图
            $('.p01_l .zoom img').css('display','none').eq(id).css('display','block')
        })
            // 默认显示第一张巨图
            $('.p01_l .zoom img').css('display','none').eq(0).css('display','block')
            // 比例
            var BL = $('.p01_l .zoom img').eq(0)[0].offsetWidth/$('.p01_l .img img').eq(0)[0].offsetWidth;
        // 移入小zoom跟随
        $('.p01_l .img').mouseover(function(){
            var W = this.offsetWidth;
            var L = $('.p01_l .img')[0].offsetLeft;
            var H = this.offsetHeight;
            var T = $('.p01_l .img')[0].offsetTop;
            var w = $('.p01_l .img .dabox')[0].offsetWidth;
            var h = $('.p01_l .img .dabox')[0].offsetHeight;
            // 移入zoom显示
            $('.p01_l .img .dabox').css('visibility','visible')
            $('.p01_l .zoom').css('visibility','visible')
            $(document).mousemove(e=>{
                var t = $('.p01_l .img .dabox')[0].offsetTop;
                var l = $('.p01_l .img .dabox')[0].offsetLeft;
                var eX = e.clientX + scrollX
                var eY = e.clientY + scrollY
                // 移出隐藏
                if(eX<L || eX>(L+W) || eY<T || eY>(T+H)){
                    $('.p01_l .img .dabox').css('visibility','hidden')
                    $('.p01_l .zoom').css('visibility','hidden')
                    document.onmousemove=null;
                }
                var x = eX-L-w/2;
                var y = eY-T-h/2;
                // 大图跟随
                if(eX>(L+w/2) && eX<(L+W-w/2)){
                    $('.p01_l .img .dabox').css('left',x);
                    $('.p01_l .zoom img').css('left',-x*BL)
                }else if(l<w/2 && l>0){
                    $('.p01_l .img .dabox').css('left',0);
                    $('.p01_l .zoom img').css('left',0)
                }else if(l>=(W-w-w/2) && l<=(W-w)){
                    $('.p01_l .img .dabox').css('left',(W-w));
                    $('.p01_l .zoom img').css('left',-(W-w)*BL)
                }


                if((eY>(T+h/2) && eY<(T+H-h/2))){
                    $('.p01_l .img .dabox').css('top',y);
                    $(' .p01_l .zoom img').css('top',-y*BL)
                }else if(t<h/2 && t>0){
                    $('.p01_l .img .dabox').css('top',0);
                    $(' .p01_l .zoom img').css('top',0)
                }else if(t<(H-h) && t>(H-h-h/2)){
                    $('.p01_l .img .dabox').css('top',(H-h));
                    $(' .p01_l .zoom img').css('top',-(H-h)*BL)
                }
            })
        })   
    // 点击加减按钮
        $('#xqy .car i').eq(0).click(function(){

            if($('#xqy .car input').val()>1){
                $('#xqy .car input').val($('#xqy .car input').val()-1)
            }
        })
        $('#xqy .car i').eq(1).click(function(){
            var i = Number($('#xqy .car input').val())
            $('#xqy .car input').val(i+1)
        })
    // tab页active切换
        // 默认第一个
        $('#xqy .p02_nav li').eq(0).addClass('at')
        $('#xqy .p02_r .tab').eq(0).addClass('div_block')
        // 默认
        var nav_top = $('#xqy .p02_nav').position().top + 163;
        // 点击切换
        $('#xqy .p02_nav li').click(function(){
            $(this).addClass('at').siblings().removeClass('at');
            $('#xqy .p02_r .tab').eq($(this).index()).addClass('div_block').siblings().removeClass('div_block');
            if(scrollY>nav_top){scrollTo(0,nav_top)}
        })
        // tab页吸顶
        $(document).scroll(function(){
        console.log(scrollY)
            if(scrollY>=nav_top){
                $('#xqy .p02_nav').css({'position':'fixed','top':0})
            }else{
                $('#xqy .p02_nav').css({'position':'relative','top':0})
            }
        })

}
})