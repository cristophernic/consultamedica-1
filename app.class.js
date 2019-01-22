//revisar https://gist.github.com/benpoole/1041277
//http://programacion.net/articulo/introduccion_a_web_sql_1305
//Agregar en la configuración: mebrete, Tipo de exámen ecográfico,

var cacheApp ={
	get: function(element){
		let data = localStorage.getItem(element);

		if (data == null){
			return {};
		}
		else{
			return JSON.parse(localStorage.getItem(element));
		}
	},
	set: function(key,element){
		try {
			localStorage.setItem(key,JSON.stringify(element));
			return true;
		} catch(e) {
			return false;
		}
	},
	make: function(){
		if (localStorage.getItem('wtmensages') === null){
			localStorage.setItem('wtmensages', '{"consulta":{"primero":true, "segundo":true}}');
			return true;
		}
		return false;
	},
	check: function(){
		var test = 'test';
		try {
			localStorage.setItem(test, test);
			localStorage.removeItem(test);
			return true;
		} catch(e) {
			return false;
		}
	}
}

class app {
    constructor() {
	var daysES=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var monthsES=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var daysEN=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var monthsEN=["January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"];
	var espanol = {days: daysES, months :monthsES};
	var english = {days: daysEN, months: monthsEN};
	var dt = {ES:espanol, EN: english};
	var errorString = {browser: 'Su navegador está desactualizado, esta aplicación no funcionará correctamente'};
        this.strings = {datetime: dt, error: errorString};
    }

    run(){
		this.day = new Date();
		this.lastLoginDate(this.day);
		this.lastLoginIP();
		$('[data-toggle="tooltip"]').tooltip();
		this.resetInputs()
		this.displayElement("home");
		document.location.hash = "#inicio";
		if (cacheApp.check() === true){
			if (cacheApp.make() === false){
				let WT_mensajes = cacheApp.get("wtmensages");

				if (WT_mensajes.consulta.primero === false){
					$("#alerta\\.consulta\\.primero").alert('close');
				}

				if (WT_mensajes.consulta.segundo === false){
					$("#alerta\\.consulta\\.segundo").alert('close');
				}
			}
		}
    }

    onHashChange(){
    	//https://stackoverflow.com/questions/6478485/jquery-change-the-url-address-without-redirecting
		this.hash = document.location.hash;

		if (this.hash=="#inicio"){
			this.displayElement("home");
			this.clearData();
		}
		else if (this.hash=="#about"){
			this.displayElement("about");
		}
		else if (this.hash=="#consulta"){
			this.displayElement("consulta");
			var contador = $('#membrete').val();
			if (contador.length < 1){
				//$('#membrete').val('SERVICIO DE SALUD ARAUCANIA SUR\r\nHOSPITAL Dr. HERNAN HENRIQUEZ ARAVENA\r\nUNIDAD DE MEDICINA MATERNO FETAL');
			}
			$("#link\\.volver\\.ecouno").attr("href","#tipoExamen");
			$("#link\\.volver\\.ecodos").attr("href","#tipoExamen");
			$("#link\\.volver\\.doppler").attr("href","#tipoExamen");
		}
		else if (this.hash=="#tipoExamen"){
			this.displayElement("tipoExamen");

			let args = {
				action: "new",
				temporal_id: $("#id-paciente").val(),
				temporal_name: $("#nombre-paciente").val(),
				temporal_motivo: $("#motivo-examen").val(),
				temporal_patologia: $("#patologiaObstetricaUno").val(),
				temporal_profesional: $("#ecografista").val(),
				temporal_edad: $("input[name='edad_materna']").val(),
				temporal_fur: $("#fum-dos").val(),
				temporal_semanas: $("#semanasEcoGen").val(),
				temporal_dias: $("#diasEcoGen").val(),
				temporal_fpp: $("input[name='fpp']").val()
			}
	
			$.post("https://pacientes.crecimientofetal.cl/temporal/api", args).done(function(data){
				if (Object.keys(data).length > 0) {
					let response = '';
				}
			});
		}
		else if (this.hash=="#ecoDoppler"){
			this.displayElement("ecoDoppler");
			let args = {
				action: "get",
				temporal_id: $("#id-paciente").val()
			}

			$.post("https://pacientes.crecimientofetal.cl/temporal/tercero", args).done(function(data){
				$('#tabla\\.tres').empty();
				if (Object.keys(data).length > 0) {
					let response = '';
					$.each(data, function(i,value){
						response += '<tr>';
						response += '<td data-id="' + value.temptrestable_correlativo +'">' + value.temptrestable_id + '</td><td>' + value.temptrestable_eg + '</td><td>' + value.temptrestable_put + '</td><td>' + value.temptrestable_cm + '</td><td>' + value.tempdostable_cp + '</td><td>' + value.tempdostable_dv + '</td>';
						response += '</tr>';
					});
					$('#tabla\\.tres').append(response);
				}
			});
		}
		else if (this.hash=="#ecoObsSegTrim"){
			this.displayElement("ecoObsSegTrim");
			let args = {
				action: "get",
				temporal_id: $("#id-paciente").val()
			}

			$.post("https://pacientes.crecimientofetal.cl/temporal/segundo", args).done(function(data){
				$('#tabla\\.dos').empty();
				if (Object.keys(data).length > 0) {
					let response = '';
					$.each(data, function(i,value){
						response += '<tr>';
						response += '<td data-id="' + value.tempdostable_correlativo +'">' + value.tempdostable_id + '</td><td>' + value.tempdostable_eg + '</td><td>' + value.tempdostable_pfe + '</td><td>' + value.tempdostable_bvm + '</td><td>' + value.tempdostable_cerebelo + '</td>';
						response += '</tr>';
					});
					$('#tabla\\.dos').append(response);
				}
			});
		}
		else if (this.hash=="#ecoObsPrimTrim"){
			this.displayElement("ecoObsPrimTrim");
			let args = {
				action: "get",
				temporal_id: $("#id-paciente").val()
			}
	
			$.post("https://pacientes.crecimientofetal.cl/temporal/primer", args).done(function(data){
				$('#tabla\\.uno').empty();
				if (Object.keys(data).length > 0) {
					let response = '';
					$.each(data, function(i,value){
						response += '<tr data-id="' + value.temptable_id +'">';
						response += '<td>' + value.temptable_rut + '</td><td>' + value.temptable_saco + '</td><td>' + value.temptable_lcn + '</td><td>' + value.temptable_eg + '</td>';
						response += '</tr>';
					});
					$('#tabla\\.uno').append(response);
				}

				$('#tabla\\.uno > tr').on("click", function(){
					let id = $(this).data("id");
					let args = {
						action: "getOne",
						temporal_id: $("#id-paciente").val(),
						temptable: id
					}

					$.post("https://pacientes.crecimientofetal.cl/temporal/primer", args).done(function(data){
						let eg = data.temptable_eg.split(",");
						$("#semanasEcoGen").val(eg[0]);
						$("#diasEcoGen").val(eg[0]);
						$("#lcn").val(data.temptable_lcn);
						$("#saco").val(data.temptable_saco);
					});
				});
			});
		}
		else if (this.hash=="#configuracion"){
			this.displayElement("configuracion");
		}
		else if (this.hash=="#construccion")
		{
			this.displayElement("construccion");
		}
		else if (this.hash=="#ecoObsPrimTrimTrisomia"){
			this.displayElement("ecoObsPrimTrimTrisomia");
		}
    }

//calculos genéricos
    imc(talla, peso){
	    var tallapeso = peso / Math.pow(talla,2);
	    var IMC = tallapeso * 10000;
	    
	    return IMC.toFixed(1);
    }

    estadoNutricional(imc){

	    if (imc < 20)
	    {
		    return "Enflaquecida";
	    }
	    else if (imc <= 25)
	    {
		    return "Normal";
	    }
	    else if (imc <= 30)
	    {
		    return "Sobrepeso";
	    }
	    else
	    {
		    return "Obesidad";
	    }
    }

    checkBrowser() {
	if (!window.openDatabase || !window.localStorage || !("onhashchange" in window)){
		return false;
	}
	return true;
    }

    displayElement(div_id){
		$('#consulta').hide();
		$('#tipoExamen').hide();
		$('#ecoObsPrimTrim').hide();
		$('#ecoObsSegTrim').hide();
		$('#ecoDoppler').hide();
		if ($('#popupGenerico').is(':visible')){
			$('#popupGenerico').modal('hide');
		}
		$('#tcal').css("visibility", "hidden");
		$('#configuracion').hide();
		$('#about').hide();
		$('#home').hide();
		$('#construccion').hide();
		$('#ecoObsPrimTrimTrisomia').hide();
		$('#'+div_id).show();

		if (div_id != "home"){
			$("#contenedor\\.eg").removeClass("d-none");
		}
		else{
			$("#contenedor\\.eg").addClass("d-none");
		}
    }
	
   lastLoginDate(date){
	localStorage.lastLoginDate = date;
   }

   lastLoginIP() {
	   $.getJSON( "https://api.ipify.org?format=json", function( data ) {
		   localStorage.lastLoginIP = data.ip;
	   });
   }
	
  resetInputs(){
	
	$("p[name='fechaHora']").append(this.strings.datetime.ES.days[this.day.getDay()] + ", " + this.day.getDate() + " de "+ this.strings.datetime.ES.months[this.day.getMonth()] + " " + this.day.getFullYear());

	var day = ("0" + this.day.getDate()).slice(-2);
	var month = ("0" + (this.day.getMonth() + 1)).slice(-2);

	$("input[name='fum']").val((day)+"/"+(month)+"/"+this.day.getFullYear());
	$("input[name='fee']").val((day)+"/"+(month)+"/"+this.day.getFullYear());
	$('#id-paciente').val((day)+(month)+this.day.getFullYear());
  }

  clearData(){
        var day = ("0" + this.day.getDate()).slice(-2);
	var month = ("0" + (this.day.getMonth() + 1)).slice(-2);

	$("input[name='fum']").val((day)+"/"+(month)+"/"+this.day.getFullYear());
	$("input[name='fee']").val((day)+"/"+(month)+"/"+this.day.getFullYear()).trigger("change");
	var e = $.Event("keydown");
        e.which = 13; // # Some key code value
	$("#lcn").val("").trigger("change").trigger(e);
	$("#saco").val("").trigger("change");

	$("#dbp").val("").trigger("change");
	$("#cc").val("").trigger("change");
	$("#ca").val("").trigger("change");
	$("#lf").val("").trigger("change");
	$("#lh").val("").trigger("change");
	$("#cerebelo").val("").trigger("change");
	$("#bvm").val("").trigger("change");
	$("#ila").val("").trigger("change");

	$("#aud").val("").trigger("change");
	$("#aui").val("").trigger("change");
	$("#auprom").val("").trigger("change");
	$("#ipau").val("").trigger("change");
	$("#ipacm").val("").trigger("change");
	$("#dv").val("").trigger("change");
	$("#psmACM").val("").trigger("change");
  }
}