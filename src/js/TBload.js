define(['jquery'],function($){
    return t=>{
        if(t === 'index'){
            return [$('#indexTop').load('html/indexTop.html'),$('#indexBottom').load('html/indexBottom.html')]
        }else{
            return [$('#indexTop').load('../html/indexTop2.html'),$('#indexBottom').load('../html/indexBottom2.html')]
        }
    }
     
})