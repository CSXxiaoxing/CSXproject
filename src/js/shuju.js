define(['jquery'],function($){
    // 首页默认显示导航条
    $('#indexTop .nav2').css('display','block');
    // 小商标生成
    var arr = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
    var hufa='';
    var caiz='';
    var perfume='';
    var men='';
    var meiti='';
    for(var i=0;i<arr.length;i++){
        hufa+=`<a href="#"><img src="img/hufu-d${arr[i]}.jpg"/></a>`;
        caiz+=`<a href="#"><img src="img/caiz-d${arr[i]}.jpg"/></a>`;
        perfume+=`<a href="#"><img src="img/xs-d${arr[i]}.jpg"/></a>`;
        men+=`<a href="#"><img src="img/men-d${arr[i]}.jpg"/></a>`;
        meiti+=`<a href="#"><img src="img/men-d${arr[i]}.jpg"/></a>`;
    };
    return [$('.hufu-d').append(hufa),$('.caiz-d').append(caiz),$('.perfume-d').append(perfume),$('.men-d').append(men),$('.meiti-d').append(meiti)]
})