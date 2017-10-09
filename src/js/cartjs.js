define(['jquery','TBload'],function($){
    return ()=>{
        console.log(777)
        var cookie = document.cookie.split('; ');
        var id = '';
        for(var i=0 ;cookie.length;i++){
            if(cookie[i].split('=')[0]==='id'){
                id=cookie[i].split('=')[1];
                break;
            }
        }
        $.get("../api/goods.php?id="+id,function(data,status){
            if(status == 'success'){
                var a = JSON.parse(data)[0];
                console.log(a)
                // 复制插入
                $('tbody').append($('tbody tr').eq(0).clone(true,true).removeClass().addClass('cart_bo'))
                // 数据写入
                var tr_num = $('tbody tr').last().index()
                console.log(tr_num)
                var tr = $('tbody tr').eq(tr_num).find('td');
                var coo = document.cookie.split('; ');
                var num = '';
                for(var i=0 ;coo.length;i++){
                    if(coo[i].split('=')[0]==='car'){
                        num=coo[i].split('=')[1];
                        break;
                    }
                }
                tr.eq(0).html(tr_num);
                tr.eq(1).html(a.name);
                tr.eq(2).html('15ml');
                tr.eq(3).html(a.price);
                tr.eq(4).html(a.cost);
                tr.eq(5).html('<input type="number" value="'+num+'" class="inpu"/>');
                tr.eq(6).html((a.cost*num).toFixed(2));
                tr.eq(7).html('<a href="#">转入收藏夹</a>');
                tr.eq(8).html('<a class=del'+tr_num+' style="color:blue;cursor:pointer">删除</a>');
            }
        });
    }
})