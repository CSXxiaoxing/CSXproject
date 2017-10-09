define(['jquery','TBload','TBjs'],function($){
    return ()=>{
        var cookie = document.cookie.split('; ');
        var tab =  $('#zhuce .nei>div');
        for(var i=0; i<cookie.length;i++){
            if(cookie[i].split('=')[0] === 'click'){
            if(cookie[i].split('=')[1] === '免费注册'){
                tab.eq(1).css('display','none');
                tab.eq(0).css('display','block');
            };
            if(cookie[i].split('=')[1] === '登录'){
                tab.eq(0).css('display','none');
                tab.eq(1).css('display','block');
            }
            }
        }
        $('#zhuce .username').blur(function(){
        var usname = $('#zhuce .username').val();
        // 用户名验证
        $.get("../api/zcname.php?username="+usname,function(data,status){
            
            if(data == 'fail'){
                $('#zhuce .user').html('该用户名已被注册')
            }else{
                $('#zhuce .user').html('恭喜你，该用户名可用')
                console.log(data)
            }
            // if(status == 'success'){
            //     var a = JSON.parse(data)[0];
            //     console.log(a)
            //     // 注册页
            // }
        });
        })
        // 验证重复nm是否正确
        $('#zhuce .nm2').blur(function(){
            var nm = $('#zhuce .nm').val();
            var nm2 = $(this).val();
            if(nm2 != nm){
                $('#zhuce .nm2_tops').html('重复密码错误')
            }else{
                $('#zhuce .nm2_tops').html('密码正确')
            }
        })
        // 点击注册
        $('#zhuce .zcbut').click(function(){
            var usname = $('#zhuce .username').val();

            $.get("../api/dlze.php?username="+usname,function(data,status){
                var nm2_ts = $('#zhuce .nm2_tops').html();
                if(data != 'fail' && nm2_ts == '密码正确'){
                    console.log(222)
                    $('#zhuce .zcbox').css('display','none')
                    $('#zhuce .dlbox').css('display','block')
                }
            });
        })
        // 登录验证
        $('#zhuce .dlbut').click(function()
        {
            var name = $('#zhuce .dlname').val();
            var pass = $('#zhuce .dlpass').val();

            $.get("../api/DL.php?username="+name+"&password="+pass,function(data,status){
                console.log(data)
                if(data === 'ok'){
                    $('#zhuce .p012').html('恭喜登陆成功,可返回首页')
                    document.cookie='username='+name+';path=/';
                    console.log('cookie时间未设定')
                }else{
                    $('#zhuce .p012').html('用户名或密码输入有误')
                }

            });
        })
    }
})