function abrirurl(url, contenedor){
    $.get(url,{},function(data){
        $("#"+contenedor).html(data);
    });
}