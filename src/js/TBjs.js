// 首尾jsヽ(●-`Д´-)ノ
define(['jquery','TBload'],function($){
    return (aa)=>{
    // console.log(66)
    // 点击登录或注册cookie存入
    $('ul.l span a').click(function(){
        document.cookie = 'click='+$(this).text()+';path=/';
    })
    // 购物车数量
    var car_cookie = document.cookie.split('; ');
    for(var i=0 ; i<car_cookie.length ; i++){
        if(car_cookie[i].split('=')[0]=='username'){
            var n = car_cookie[i].split('=')[1];
            $('.l li i').html(n+'用户 ');
        }
        if(car_cookie[i].split('=')[0]=='car'){
            var c = car_cookie[i].split('=')[1];
            $('.goucar span').html(c);
        }
    }
    // 时间判断
    var shij = $('#indexTop .shij');
    var time = new Date().getHours();
    if(time>6 && time<11){
        shij.html('上午')
    }else if(time>= 11 && time<14){
        shij.html('中午')
    }else if(time>=14 && time<19){
        shij.html('下午')
    }else{
        shij.html('晚上')
    }
    // 点击回归顶部
    $('#indexTop .dl_top').eq(0).click(function(){
        var s = scrollY
        clearInterval(times)
        var times = setInterval(function(){
            s = parseInt(s-s/10)
            if(s<2){
                clearInterval(times)
                s=0;
            }
            scrollTo(0,s)
        },30)
    })
    // 导航条吸顶 // 首页默认显示导航条
    var nav2 = $('#indexTop .nav2');
    if(aa==='index'){
        nav2.css('display','block');
    }else{
        // 导航条默认隐藏
        nav2.css('display','none');
    }
    $(document).scroll(function(){
        if(aa === 'XQY'){
             $('#indexTop .nav').css('top',0)
             return;
        }
        if(scrollY>1000){
            $('#indexTop .nav').css('top',scrollY-123).find('.nav2').css('display','none')
            return;
        }
        if(scrollY<=1000 & aa=='index'){
            $('#indexTop .nav').css('top',0).find('.nav2').css('display','block')
        }
    })
    // 导航条nav2鼠标移入显示
    $('#indexTop .nav li').eq(0).hover(function(){
        $('#indexTop .nav2').stop(true).slideDown();
    },function(){
        if(scrollY>1000 & aa==='index'){
            $('#indexTop .nav2').stop(true).slideUp();
            return;
        }
        if(aa!='index'){$('#indexTop .nav2').slideUp();}
    })
    // 热门
    var an='热门搜索：';
    var arr = '防敏感专用，雅诗兰黛，气垫bb，美白，专柜小样，口红，防晒特卖'.split('，');
    for(var i=0;i<arr.length;i++){
        an+=`<a href="#">${arr[i]}</a>`
    }
    // 二级导航
    var nav2 = {'面部护理':['洗面奶','爽肤水','乳液','防晒','面膜','精华','眼霜','卸妆','T区护理'],'彩妆':['BB霜','粉底液','妆前乳','隔离','唇膏','睫毛膏','眼线','指甲油'],'香氛':['洗面奶','洗面奶','洗面奶','洗面奶','洗面奶'],'身体护理':['洗面奶','洗面奶','洗面奶','洗面奶','洗面奶'],'头发护理':['洗面奶','洗面奶','洗面奶','洗面奶','洗面奶'],'男士专区':['洗面奶','洗面奶','洗面奶','洗面奶','洗面奶'],'美容工具':['洗面奶','洗面奶','洗面奶','洗面奶','洗面奶']}
    // 写入
    for(var a in nav2){

        var li = document.createElement('li');
        var n2 = document.createElement('strong');
        n2.innerHTML=`<a href="#">${a}</a>`;
        var p = document.createElement('p');
        for(var i=0;i<nav2[a].length;i++){
            p.innerHTML+=`<a href="#">${nav2[a][i]}</a>`
        }
        li.appendChild(n2);
        li.appendChild(p);
        $('#indexTop .nav2').append(li);
    }
    $('#indexTop .zhon').children().last().append(an);
    }
})