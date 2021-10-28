document.onload = function(){
    alert('beans')
}

$( document ).ready(function() {
    console.log( "ready!" );
    $.getJSON('./vehicles.json', function( data ) {
        console.log(data)
        data.vehicles.forEach(element => console.log(element));

        data.vehicles.forEach(vehicle => {
            var out='<div class="col">';
                 out+='<div class="card shadow-lg">';
                 out+='<img src="' + vehicle.image + '" class="card-img-top">';
                  out+='<div class="card-body">';
                  out+='<h4 class="card-title">' + vehicle.name + ' - ' + vehicle.make + '</h4>';
                  out+='<h6 class="card-text">';
                  out+='Status: ' + vehicle.status + '<br>';
                  out+='Plate: ' + vehicle.plate + '<br>';
                  out+='Rented By: ' + vehicle.rented_by + '<br>';
                  out+='Rented Untit: ' + vehicle.rented_until + '<br>';
                  out+='</h6></div></div></div>'
               out+='</div>';
               $('.cards').append(out);
       })
    })
});
/*
$.getJSON('/JSON/bloglist.json/', function( data ) {
    for(var key in data.articles){
         var out='<div class="card">';
              out+='<div class="card-header">'+data.articles[key].title+'</div>';
              out+='<img class="card-img-top" src="'+data.articles[key].image+'" alt="...">';

               out+='<div class="card-body">';
               out+=data.articles[key].exerpt;
               out+='<div class="cls-for-load"></div>';
               out+='<button class="btn btn-primary" onclick="$(this).parent().find(\'.cls-for-load\').load( \''+data.articles[key].url+'\');">more...</button>';
               out+='</div>';
               out+=
            out+='</div>';
            $('body').append(out);
    }
});*/