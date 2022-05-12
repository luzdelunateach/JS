$(document).ready(function () {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3005/autor',
        dataType: 'json',
        success: function (data) {
            let html="";
            data.autor.forEach(function(x){
                if(x.status=="Offline"){
                    html+="<tr><td><div class='d-flex px-2 py-1'><div><img src='"+x.foto+"' class='avatar avatar-sm me-3' alt='user1'></div><div class='d-flex flex-column justify-content-center'><h6 class='mb-0 text-sm'>"+x.nombre+"</h6><p class='text-xs text-secondary mb-0'>"+x.correo+"</p></div></div></td><td><p class='text-xs font-weight-bold mb-0'>"+x.puesto+"</p><p class='text-xs text-secondary mb-0'>Organization</p></td><td class='align-middle text-center text-sm'><span class='badge badge-sm bg-gradient-secondary'>"+x.status+"</span></td><td class='align-middle text-center'><span class='text-secondary text-xs font-weight-bold'>"+x.fecha+"</span></td><td class='align-middle'><a href='javascript:;' class='text-secondary font-weight-bold text-xs' data-toggle='tooltip' data-original-title='Edit user'>Edit</a></td></tr>";
                }else{
                    html+="<tr><td><div class='d-flex px-2 py-1'><div><img src='"+x.foto+"' class='avatar avatar-sm me-3' alt='user1'></div><div class='d-flex flex-column justify-content-center'><h6 class='mb-0 text-sm'>"+x.nombre+"</h6><p class='text-xs text-secondary mb-0'>"+x.correo+"</p></div></div></td><td><p class='text-xs font-weight-bold mb-0'>"+x.puesto+"</p><p class='text-xs text-secondary mb-0'>Organization</p></td><td class='align-middle text-center text-sm'><span class='badge badge-sm bg-gradient-success'>"+x.status+"</span></td><td class='align-middle text-center'><span class='text-secondary text-xs font-weight-bold'>"+x.fecha+"</span></td><td class='align-middle'><a href='javascript:;' class='text-secondary font-weight-bold text-xs' data-toggle='tooltip' data-original-title='Edit user'>Edit</a></td></tr>";
                }
            }); 

            $("#tbody").html(html);
        }
    });

    
});

$("#btnAuthor").on("click",function(e){
    e.preventDefault();
    var url = "http://127.0.0.1:5500/soft-ui-dashboard-main/pages/formAuthor.html";    
    $(location).attr('href',url);
});

var date = new Date();


$("#formAuthor").on("submit",function(e){
    e.preventDefault();
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3005/autor',
        dataType: 'json',
        contentType: 'application/json',
        data:JSON.stringify({
            "nombre": $("#nombre").val(),
            "foto": $("#foto").val(),
            "ciudad": $("#ciudad").val(),
            "correo":$("#correo").val(),
            "puesto":$("#puesto").val(),
            "fecha": date.toLocaleDateString(),
            "status": "Offline"
        }),
        success: function (data) {
            var url = "http://127.0.0.1:5500/soft-ui-dashboard-main/pages/tables.html";    
            $(location).attr('href',url);
        }
    });
});

function agregar(){
    let autores=[];
    let autor1=new Autor("Luna Gutierrez","https://cdn-icons-png.flaticon.com/512/2358/2358575.png","luna@gmail.com","Manager Executive","23/04/18","Online");
    let autor2=new Autor("Paola Gonzalez","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/2048px-Circle-icons-camera.svg.png","pao@gmail.com","Programator Developer","23/04/18","Online");
    let autor3=new Autor();
    autor3.setNombre("Havy Aguilar");
    autor3.setFoto("https://th.bing.com/th/id/OIP.mIy9oLHeQ1r2gCm1C6TlFwHaD4?pid=ImgDet&rs=1");
    autor3.setEmail("Havy@gmail.com");
    autor3.setPuesto("Administrator");
    autor3.setFecha("04/04/2022");
    autor3.setStatus("Offline");
    autores.push(autor1);
    autores.push(autor2);
    autores.push(autor3);
    let tabla=document.getElementById("tbody");
    autores.forEach(function(x){
        if(x.getStatus()=="Offline"){
            tabla.innerHTML+="<tr><td><div class='d-flex px-2 py-1'><div><img src='"+x.getFoto()+"' class='avatar avatar-sm me-3' alt='user1'></div><div class='d-flex flex-column justify-content-center'><h6 class='mb-0 text-sm'>"+x.getNombre()+"</h6><p class='text-xs text-secondary mb-0'>"+x.getEmail()+"</p></div></div></td><td><p class='text-xs font-weight-bold mb-0'>"+x.getPuesto()+"</p><p class='text-xs text-secondary mb-0'>Organization</p></td><td class='align-middle text-center text-sm'><span class='badge badge-sm bg-gradient-secondary'>"+x.getStatus()+"</span></td><td class='align-middle text-center'><span class='text-secondary text-xs font-weight-bold'>"+x.getFecha()+"</span></td><td class='align-middle'><a href='javascript:;' class='text-secondary font-weight-bold text-xs' data-toggle='tooltip' data-original-title='Edit user'>Edit</a></td></tr>";
        }else{
            tabla.innerHTML+="<tr><td><div class='d-flex px-2 py-1'><div><img src='"+x.getFoto()+"' class='avatar avatar-sm me-3' alt='user1'></div><div class='d-flex flex-column justify-content-center'><h6 class='mb-0 text-sm'>"+x.getNombre()+"</h6><p class='text-xs text-secondary mb-0'>"+x.getEmail()+"</p></div></div></td><td><p class='text-xs font-weight-bold mb-0'>"+x.getPuesto()+"</p><p class='text-xs text-secondary mb-0'>Organization</p></td><td class='align-middle text-center text-sm'><span class='badge badge-sm bg-gradient-success'>"+x.getStatus()+"</span></td><td class='align-middle text-center'><span class='text-secondary text-xs font-weight-bold'>"+x.getFecha()+"</span></td><td class='align-middle'><a href='javascript:;' class='text-secondary font-weight-bold text-xs' data-toggle='tooltip' data-original-title='Edit user'>Edit</a></td></tr>";
        }
    });              
}

function cleanTable(){
    //alert("entro");
    let tabla=document.getElementById("tbody");
    tabla.innerHTML="";
}