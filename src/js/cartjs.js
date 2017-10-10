define(['jquery','TBload'],function($){
    return ()=>{
        var cookie = document.cookie.split('; ');
        var id = '';
        for(var i=0 ;cookie.length;i++){
            if(cookie[i].split('=')[0]==='carid'){
                id=cookie[i].split('=')[1].split('+');
                var s = new Set(id)
                var s0 = [];
                for(var ss of s){
                   s0.push(ss)
                }

                id = s0;
                break;
            }
        }

        if(id != ''){
        for(var i=0; i<id.length; i++){
            var car_id = id[i]
            // 数据写入
                    
            var coo = document.cookie.split('; ');
            var num = 0;
            console.log(coo[1].split('='))
            for(var j=0 ;j<coo.length;j++){
                if(coo[j].split('=')[0]===car_id+'number'){
                    num=coo[j].split('=')[1];
                    break;
                }
            }


            $.get("../api/goods.php?id="+car_id,function(data,status){
                if(status == 'success'){
                    var a = JSON.parse(data)[0];
                    console.log(a)
                    // 复制插入
                    $('tbody').append($('tbody tr').eq(0).clone(true,true).removeClass().addClass('cart_bo'))
                    // 数据写入
                    var tr_num = $('tbody tr').last().index()
                    var tr = $('tbody tr').eq(tr_num).find('td');
                    // var coo = document.cookie.split('; ');
                    // var num = '';
                    // for(var i=0 ;coo.length;i++){
                    //     if(coo[i].split('=')[0]==='car'){
                    //         num=coo[i].split('=')[1];
                    //         break;
                    //     }
                    // }
                    tr.eq(0).html(tr_num);
                    tr.eq(1).html(a.name);
                    tr.eq(2).html('15ml');
                    tr.eq(3).html(a.price);
                    tr.eq(4).html(a.cost);
                    tr.eq(5).html('<input type="number" value="'+num+'" class="inpu"/>');
                    tr.eq(6).html((a.cost*num).toFixed(2)).addClass('cost');
                    tr.eq(7).html('<a href="#">转入收藏夹</a>');
                    tr.eq(8).html('<a class=del'+tr_num+' style="color:blue;cursor:pointer">删除</a>');
                    var html = Number($('.zongjia').html())
                    var html6 = Number(tr.eq(6).html())
                    $('.zongjia').html((html+html6).toFixed(2));
                    // 失焦改变
                    tr.eq(5).change(function(){
                        var num2=$(this).find('input').val()
                        if(num2<0){
                            num2=0;
                            $(this).find('input').val(0)
                        }
                        tr.eq(6).html((a.cost*num2).toFixed(2));
                        $('.zongjia').html((html+Number(tr.eq(6).html())).toFixed(2));
                    })
                    // 删除cookie
                    $('.del'+tr_num).click(function(){
                        $(this).closest('tr').remove();
                        document.cookie='carid='+''+';path=/';
                        document.cookie='car='+0+';path=/';
                    })
                }
            });
        }
        }
        
    }
})