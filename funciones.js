function puedoGuardarEnElNavegador() {
  if (window.localStorage) {
    navegadorDowgrade = false;
    if (localStorage.ecografista != null) {
      var ecografista = JSON.parse(localStorage["ecografista"]);
    }
  }
  else{
    $("#home").prepend("<div class='alert alert-warning alert-dismissible fade show' role='alert' id='navegadorDowgrade'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Hey!</strong> debes actualizar tu navegador para mejorar el desempeño de esta aplicación.</div>");
    navegadorDowgrade = true;
  }
};

function queDiaEs(){
  var d = new Date();

  if (navegadorDowgrade == false) {
    localStorage.lastLoginDate = d;
  }
  Hoy.push(d.getDay());
  Hoy.push(d.getDate());
  Hoy.push(d.getMonth());
  Hoy.push(d.getFullYear());
};

function cualEsMiIp(){

  if (navegadorDowgrade == false) {
    $.getJSON( "http://jsonip.com/?callback=?", function( data ) {
      localStorage.lastLoginIP = data.ip;
    });
  }
};

function show_hide(id){
  if (document.getElementById){
    var el = document.getElementById(id);
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
  }
};

function activarTooltips(){
  $('[data-toggle="tooltip"]').tooltip();
}