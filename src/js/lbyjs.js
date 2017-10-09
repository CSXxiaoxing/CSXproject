define(['jquery'],function($){
    return ()=>{
        // 默认左边的ul隐藏
        $('#lby .list h3').next().css('display','none')
        // 加减小图标改变以及ul动画
        $('#lby .list h3').click(function(){
            $(this).find('span').eq(0).toggleClass('open');
            $(this).next().stop(true).slideToggle();
        })
        // 数据
        // var isrc = $('.content img').eq(0).attr('src').replace(/9999/,a.img)

        for(let i=1;i<5;i++){
        $.get("../api/goods.php?id="+i,function(data,status){
            if(status == 'success'){
                var a = JSON.parse(data)[0];
                console.log(a);
                var ao = parseInt((a.cost/a.price)*1000)/100
                $('.content').append($(`
                    <ul>
                        <a href="xqy.html">
                            <img src="../img/xqy${a.img}-max01" alt="" data-id="${a.id}"/>
                            <p>${a.miaos}</p>
                            <p>￥<span>${a.cost}</span><span>(${ao}折)</span></p>
                            <span>加入购物车</span><span>收藏</span>
                        </a>
                    </ul>
                `))

                }

            // 点击存cookie并跳转
            $('.content').children().click(function(){
                var idid = $(this).find('img').attr('data-id')
                document.cookie='id='+idid+';path=/';
            })

            })
        }

           // -------下面是return部分---- 
        }
})