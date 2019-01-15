var aplication;

var errCallback = function(){
	alert("Oh noes! There haz bin a datamabase error!");
};
var savePacientes = function(idPaciente, nombre, apellido, motivo, ecografia, lugarControl, ciudad, telefono, email, fNac, fum, successCallback){
	aplication.db.transaction(function(transaction){
		transaction.executeSql(("insert into Users (user_id, user_name, user_lastname, careReason, sonographer, controlPlace, city, phone, email, birthdate, fum) values (?,?,?,?,?,?,?,?,?,?,?);"), 
		[idPaciente, nombre, apellido, motivo, ecografia, lugarControl, ciudad, telefono, email, fNac, fum], function(transaction, results){successCallback(results);}, errCallback);
	});
};

var loadPacientes = function(successCallback){
	aplication.db.transaction(
		function(transaction){
			transaction.executeSql('SELECT * FROM Users', [],function(transaction, results){successCallback(results);}, errCallback);
	});
};

var loadPaciente = function(idPaciente, successCallback){
	aplication.db.transaction(
		function(transaction){
			transaction.executeSql(("SELECT * FROM Users WHERE id=?"), [idPaciente],function(transaction, results){successCallback(results);}, errCallback);
	});
};

var listPacientes = function(results){
	var contenedor = $("#tablaPacientes");
	contenedor.empty();
	var html = '<table class="table table-bordered table-hover"><thead class="bg-primary text-white"><th>ID</th><th>Nombre</th><th>Apellido</th><th>Motivo</th><th>FUM </th><th>Ciudad </th></thead><tbody>';
	if (results.rows.length==0){
		html = "<div class='alert alert-primary' role='alert'>No hay pacientes su base de datos personal.</div>";
	} else {
		$.each(results.rows, function(rowIndex){
			var row = results.rows.item(rowIndex);
			html += '<tr onclick="aplication.editarPaciente('+ row.id +')"><td scope="row">';
			html += row.user_id + '</td><td>' + row.user_name + '</td><td>' + row.user_lastname + '</td><td>' + row.careReason + '</td><td>' + row.fum + '</td><td>' + row.city + '</td><td><button type="button" class="btn btn-primary"  onclick="aplication.usarPaciente(' + row.id +')">exámen</button></td></tr>';
		});
		html += '</tbody></table>';
	}
	contenedor.html(html);
};

var listPaciente = function(results){
	var row = results.rows.item(0);
	$('#idPaciente').val(row.user_id);
	$('#nombre').val(row.user_name);
	$('#apellido').val(row.user_lastname);
	$('#motivo').val(row.careReason);
	$('#ecografista').val(row.sonographer);
	$('#lugarControl').val(row.controlPlace);
	$('#ciudad').val(row.city);
	$('#telefono').val(row.phone);
	$('#email').val(row.email);
	$('#fNacimiento').val(row.birthdate);
	$('#fum').val(row.fum);
	$('#fum2').val(row.fum);
	localStorage.fum = $('#fum').val();
	$('#fum').trigger( "change" );
	$('#fum2').trigger( "change" );
};

 $( '#peso').on('change', function() {
     $("#imc").val(aplication.imc($("#talla").val(), $(this).val()));
     $("#estNutricional").val(aplication.estadoNutricional($("#imc").val()));
 });

 $( '#talla').on('change', function() {
     $("#imc").val(aplication.imc($(this).val(), $("#peso").val()));
     $("#estNutricional").val(aplication.estadoNutricional($("#imc").val()));
 });

 $( '#pesoMaterno').on('change', function() {
     $("#imcMaterno").val(aplication.imc($("#tallaMaterna").val(), $(this).val()) + " kl/m2");
 });

 $( '#tallaMaterna').on('change', function() {
     $("#imcMaterno").val(aplication.imc($(this).val(), $("#pesoMaterno").val()) + " kl/m2" );
 });

$( '.informacion').on('click', function() {
     $("#informacion").hide();
 });

$( '#nuevoTipoConfig').on('click', function() {
	$('#tipoConfig .tabla').hide();
	$('#nuevoTipoConfig').hide();
	$('#editarTipoConfig').hide();
	$('#guardarTipoConfig').show();
	$('#cancelarTipoConfig').show();
	$('#tipoConfig .formulario').show();
 });

$( '#cancelarTipoConfig').on('click', function() {
	$("#tipoConfig .tabla").show();
	$('#nuevoTipoConfig').show();
	$('#editarTipoConfig').show();
	$('#guardarTipoConfig').hide();
	$('#cancelarTipoConfig').hide();
	$("#tipoConfig .formulario").hide();
 });

$('#guardarTipoConfig').on('click', function(){
	saveTipoExamenLocalStorage();
	$("#tipoConfig .tabla").show();
	$('#nuevoTipoConfig').show();
	$('#guardarTipoConfig').hide();
	$('#cancelarTipoConfig').hide();
	$("#tipoConfig .formulario").hide();
});

$( '#nuevoLugarConfig').on('click', function() {
	$('#LugarConfig .tabla').hide();
	$('#nuevoLugarConfig').hide();
	$('#editarLugarConfig').hide();
	$('#guardarLugarConfig').show();
	$('#cancelarLugarConfig').show();
	$('#LugarConfig .formulario').show();
 });

$( '#cancelarLugarConfig').on('click', function() {
	$("#LugarConfig .tabla").show();
	$('#nuevoLugarConfig').show();
	$('#editarLugarConfig').show();
	$('#guardarLugarConfig').hide();
	$('#cancelarLugarConfig').hide();
	$("#LugarConfig .formulario").hide();
 });

$('#guardarLugarConfig').on('click', function(){
	saveLugarExamenLocalStorage();
	$("#LugarConfig .tabla").show();
	$('#nuevoLugarConfig').show();
	$('#guardarLugarConfig').hide();
	$('#cancelarLugarConfig').hide();
	$("#LugarConfig .formulario").hide();
});

$( '#nuevoMotivoConfig').on('click', function() {
	$('#motivoConfig .tabla').hide();
	$('#nuevoMotivoConfig').hide();
	$('#editarMotivoConfig').hide();
	$('#guardarMotivoConfig').show();
	$('#cancelarMotivoConfig').show();
	$('#motivoConfig .formulario').show();
 });

$('#guardarMotivoConfig').on('click', function(){
	saveMotivoExamenLocalStorage();
	$("#motivoConfig .tabla").show();
	$('#nuevoMotivoConfig').show();
	$('#guardarMotivoConfig').hide();
	$('#cancelarMotivoConfig').hide();
	$("#motivoConfig .formulario").hide();
});

$( '#cancelarMotivoConfig').on('click', function() {
	$("#motivoConfig .tabla").show();
	$('#nuevoMotivoConfig').show();
	$('#editarMotivoConfig').show();
	$('#guardarMotivoConfig').hide();
	$('#cancelarMotivoConfig').hide();
	$("#motivoConfig .formulario").hide();
 });

$( '#nuevoCiudadConfig').on('click', function() {
	$('#ciudadConfig .tabla').hide();
	$('#nuevoCiudadConfig').hide();
	$('#editarCiudadConfig').hide();
	$('#guardarCiudadConfig').show();
	$('#cancelarCiudadConfig').show();
	$('#ciudadConfig .formulario').show();
 });

$( '#cancelarCiudadConfig').on('click', function() {
	$("#ciudadConfig .tabla").show();
	$('#nuevoCiudadConfig').show();
	$('#editarCiudadConfig').show();
	$('#guardarCiudadConfig').hide();
	$('#cancelarCiudadConfig').hide();
	$("#ciudadConfig .formulario").hide();
 });

$( '#guardarCiudadConfig').on('click', function() {
	saveCiudadExamenLocalStorage();
	$("#ciudadConfig .tabla").show();
	$('#nuevoCiudadConfig').show();
	$('#guardarCiudadConfig').hide();
	$('#cancelarCiudadConfig').hide();
	$("#ciudadConfig .formulario").hide();
 });

$( '#nuevoEcografistaConfig').on('click', function() {
	$('#ecografistaConfig .tabla').hide();
	$('#nuevoEcografistaConfig').hide();
	$('#editarEcografistaConfig').hide();
	$('#guardarEcografistaConfig').show();
	$('#cancelarEcografistaConfig').show();
	$('#ecografistaConfig .formulario').show();
 });

$( '#cancelarEcografistaConfig').on('click', function() {
	$("#ecografistaConfig .tabla").show();
	$('#nuevoEcografistaConfig').show();
	$('#editarEcografistaConfig').show();
	$('#guardarEcografistaConfig').hide();
	$('#cancelarEcografistaConfig').hide();
	$("#ecografistaConfig .formulario").hide();
 });

$( '#guardarEcografistaConfig').on('click', function() {
	saveEcografistaExamenLocalStorage();
	$("#ecografistaConfig .tabla").show();
	$('#nuevoEcografistaConfig').show();
	$('#guardarEcografistaConfig').hide();
	$('#cancelarEcografistaConfig').hide();
	$("#ecografistaConfig .formulario").hide();
 });

$( '#nuevoPatologiaObstetricaConfig').on('click', function() {
	$('#patologiaObstetricaConfig .tabla').hide();
	$('#nuevoPatologiaObstetricaConfig').hide();
	$('#editarPatologiaObstetricaConfig').hide();
	$('#guardarPatologiaObstetricaConfig').show();
	$('#cancelarPatologiaObstetricaConfig').show();
	$('#patologiaObstetricaConfig .formulario').show();
 });

$( '#cancelarPatologiaObstetricaConfig').on('click', function() {
	$("#patologiaObstetricaConfig .tabla").show();
	$('#nuevoPatologiaObstetricaConfig').show();
	$('#editarPatologiaObstetricaConfig').show();
	$('#guardarPatologiaObstetricaConfig').hide();
	$('#cancelarPatologiaObstetricaConfig').hide();
	$("#patologiaObstetricaConfig .formulario").hide();
 });

$( '#guardarPatologiaObstetricaConfig').on('click', function() {
	savePatologiaObstetricaExamenLocalStorage();
	$("#patologiaObstetricaConfig .tabla").show();
	$('#nuevoPatologiaObstetricaConfig').show();
	$('#guardarPatologiaObstetricaConfig').hide();
	$('#cancelarPatologiaObstetricaConfig').hide();
	$("#patologiaObstetricaConfig .formulario").hide();
 });




$( document ).ready(function() {
	//puedoGuardarEnElNavegador();
        //queDiaEs();
        //cualEsMiIp();
        //cargarDatosGenerales();
        //activarTooltips();
        //activarBotones();

	if (isIE()){
		console.log('navegador incompatible')
	}
	else{
		aplication = new app();
		
		graficoUno = null;
		graficoDos = null;
		graficoTres = null;
		graficoCuatro = null;
		
		if (aplication.checkBrowser == false){
			console.log(aplication.strings.error.browser);
		}
		else{
			show_hide('browser');
			aplication.run();
			//loadPacientes(listPacientes);
			activarBotones();
			$('#fum-dos').datepicker();
			$('#fum-dos').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fum-tres').datepicker();
			$('#fum-tres').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fum-cuatro').datepicker();
			$('#fum-cuatro').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fum-cinco').datepicker();
			$('#fum-cinco').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fum-seis').datepicker();
			$('#fum-seis').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			
			$('#fee-dos').datepicker();
			$('#fee-dos').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fee-tres').datepicker();
			$('#fee-tres').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fee-cuatro').datepicker();
			$('#fee-cuatro').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fee-cinco').datepicker();
			$('#fee-cinco').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fee-seis').datepicker();
			$('#fee-seis').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fechaMaterna').datepicker();
			$('#fechaMaterna').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			if (window.localStorage) {
				if (typeof localStorage.pacientes == 'undefined') {
					$('#numPacientes').html("0");
				}
				else{
					var pacientes = JSON.parse(localStorage["pacientes"]);
					$('#numPacientes').html("N° Pacientes<br>" + Object.keys(pacientes).length);
				}
			}
			
				if (window.localStorage) {
				$('#tablePacientesBody').empty();
				if (localStorage.pacientes != null) {
					//cargar la tabla
		var pacientes = JSON.parse(localStorage["pacientes"]);
		$.each(pacientes, function( index, value ) {
			var fila = '<tr><th scope="row">' + index + '</th><td>' + value.nombre + ' ' + value.apellido + '</td><td>' + value.edad + '</td><td>' + value.ciudad + '</td><td>' + value.examenes[0].motivo + '</td><td>' + value.examenes[0].profExaminador + '</td></tr>';
			$('#tablePacientesBody').append(fila);
		});
				}
					
					
		if (localStorage.configuracion != null) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			$.each(configuracion.motivoExamen, function (i, item) {
				$('#motivo-examen').append($('<option>', { value: item.id,text : item.nombre}));
			});
			$.each(configuracion.patologiaObstetrica, function (i, item) {
				$('#patologiaObstetricaUno').append($('<option>', { value: item.id,text : item.nombre}));
			});
			$.each(configuracion.lugarControlPrenatal, function (i, item) {
				$('#Lugar-examen').append($('<option>', { value: item.id,text : item.nombre}));
			});
			$.each(configuracion.profesionalEcografista, function (i, item) {
				$('#ecografista').append($('<option>', { value: item.id,text : item.nombre}));
			});
			$.each(configuracion.ciudad, function (i, item) {
				$('#procedencia').append($('<option>', {value: item.id,text : item.nombre}));
			});
			
			$.each(configuracion.prevision, function (i, item) {
				$('#prevision').append($('<option>', {value: item.id,text : item.nombre}));
			});
			
			$.each(configuracion.profesionalReferente, function (i, item) {
				$('#profReferente').append($('<option>', {value: item.id,text : item.nombre}));
			});
		}
	}
			
		}
	}
});

$(window).on('hashchange', function(){
	aplication.onHashChange();
});

$( '#loadPacienteSelect' ).on( 'click', function() {
    $('#popupTitle').html("Mensaje");
    $('#popupBody').html("<p>Módulo en construcción</p>");
    $('#popupGenerico').modal('show');
});
