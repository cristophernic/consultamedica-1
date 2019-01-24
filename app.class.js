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
			this.loadDoppler();
		}
		else if (this.hash=="#ecoObsSegTrim"){
			this.displayElement("ecoObsSegTrim");
			this.loadSegtrim();
		}
		else if (this.hash=="#ecoObsPrimTrim"){
			this.displayElement("ecoObsPrimTrim");
			this.loadPrimtrim();
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

  loadPrimtrim(){
	let args = {
		action: "get",
		temporal_id: $("#id-paciente").val()
	}

	$.post("https://pacientes.crecimientofetal.cl/temporal/primer", args).done(function(data){
		$('#tabla\\.uno').empty();
		$("#boton\\.uno\\.guardar").data("id",0);
		if (Object.keys(data).length > 0) {
			let response = '';
			$.each(data, function(i,value){
				response += '<tr data-id="' + value.temptable_id +'">';
				response += '<td>' + value.temptable_rut + '</td><td>' + value.temptable_fecha + '</td><td>' + value.temptable_saco + '</td><td>' + value.temptable_lcn + '</td><td>' + value.temptable_eg + '</td><td><i class="fas fa-trash-alt primer-eliminar"></i></td>';
				response += '</tr>';
			});
			$('#tabla\\.uno').append(response);

			$('#tabla\\.uno > tr').on("click", function(){
				let id = $(this).data("id");
				let args = {
					action: "getOne",
					temporal_id: $("#id-paciente").val(),
					temptable_id: id
				}

				$.post("https://pacientes.crecimientofetal.cl/temporal/primer", args).done(function(data){
					let eg = data.temptable_eg.split(",");
					$("#semanasEcoGen").val(eg[0]);
					$("#diasEcoGen").val(eg[1]);
					$("#lcn").val(data.temptable_lcn);
					$("#saco").val(data.temptable_saco);
					$("#boton\\.uno\\.guardar").data("id",id);
				});
			});

			$(".primer-eliminar").on("click", function(event){
				event.stopPropagation();
				let args = {
					action: "del",
					temporal_id: $("#id-paciente").val(),
					temptable_id: $(this).parent().parent().data("id")
				}

				$.post("https://pacientes.crecimientofetal.cl/temporal/primer", args).done(function(data){
					aplication.loadPrimtrim();
				});
			});
		}
	});
	}

	loadSegtrim(){
		let args = {
			action: "get",
			temporal_id: $("#id-paciente").val()
		}

		$.post("https://pacientes.crecimientofetal.cl/temporal/segundo", args).done(function(data){
			$('#tabla\\.dos').empty();
			$("#boton\\.dos\\.guardar").data("id",0);

			if (Object.keys(data).length > 0) {
				let response = '';
				$.each(data, function(i,value){
					response += '<tr data-id="' + value.tempdostable_correlativo +'">';
					response += '<td>' + value.tempdostable_id + '</td><td>' + value.tempdostable_fecha + '</td><td>' + value.tempdostable_eg + '</td><td>' + value.tempdostable_pfe + '</td><td>' + value.tempdostable_pctpfe + '</td><td>' + value.tempdostable_ca + '</td><td>' + value.tempdostable_pctca + '</td><td>' + value.tempdostable_bvm + '</td><td><i class="fas fa-trash-alt segundo-eliminar"></i></td>';
					response += '</tr>';
				});
				$('#tabla\\.dos').append(response);

				$('#tabla\\.dos > tr').on("click", function(){
					let id = $(this).data("id");
					let args = {
						action: "getOne",
						temporal_id: $("#id-paciente").val(),
						tempdostable_correlativo: id
					}

					$.post("https://pacientes.crecimientofetal.cl/temporal/segundo", args).done(function(data){
						let eg = data.tempdostable_eg.split(",");
						$("#semanasEcoGen").val(eg[0]);
						$("#diasEcoGen").val(eg[1]);
						$("#dbp").val(data.tempdostable_dbp);
						$("#dof").val(data.tempdostable_dof); 
						$("#cc").val(data.tempdostable_cc);
						$("#ca").val(data.tempdostable_ca); 
						$("#lf").val(data.tempdostable_lf);
						$("#bvm").val(data.tempdostable_bvm);
						$("#lh").val(data.tempdostable_lh);
						$("#cerebelo").val(data.tempdostable_cerebelo);
						$("#pfe").val(data.tempdostable_pfe);
						$("#egP50").val(data.tempdostable_egP50);
						$("#presentacion").val(data.tempdostable_presentacion);
						$("#dorso").val(data.tempdostable_dorso);
						$("#fcf").val(data.tempdostable_fcf);
						$("#ecografia\\.segtrim\\.sexo").val(data.tempdostable_sexo);
						$("#ev-morfo option:selected").val(data.tempdostable_morfo);
						$("#comentarios-anatomia-informe-eg-texto").val(data.tempdostable_anatomia);
						$("#ubicacion").val(data.tempdostable_ubicacion);
						$("#incersion").val(data.tempdostable_incersion);
						$("#grado-placenta").val(data.tempdostable_grado);
						$("#liq-cualitativo-eco").val(data.tempdostable_liq);
						$("#bvmEcoDos").val(data.tempdostable_bvmEcoDos);
						$("#cordon").val(data.tempdostable_cordon);
						$("#vasos").val(data.tempdostable_vasos);
						$("#eco\\.seg\\.trim\\.select\\.comentario").val(data.tempdostable_comentario);
						$("#comentarios-eco-dos-inf-dos").val(data.tempdostable_comentarios);
						$("#boton\\.dos\\.guardar").data("id",id);
					});
				});

				$(".segundo-eliminar").on("click", function(event){
					event.stopPropagation();
					let args = {
						action: "del",
						temporal_id: $("#id-paciente").val(),
						tempdostable_id: $(this).parent().parent().data("id")
					}
	
					$.post("https://pacientes.crecimientofetal.cl/temporal/segundo", args).done(function(data){
						aplication.loadSegtrim();
					});
				});
			}
		});
	}

	loadDoppler(){
		let args = {
			action: "get",
			temporal_id: $("#id-paciente").val()
		}

		$.post("https://pacientes.crecimientofetal.cl/temporal/tercero", args).done(function(data){
			$('#tabla\\.tres').empty();
			$("#boton\\.tres\\.guardar").data("id",0);
			if (Object.keys(data).length > 0) {
				let response = '';
				$.each(data, function(i,value){
					response += '<tr data-id="' + value.temptrestable_correlativo +'">';
					response += '<td>' + value.temptrestable_id + '</td><td>' + value.temptrestable_fecha + '</td><td>' + value.temptrestable_eg + '</td><td>' + value.temptrestable_put + '</td><td>' + value.temptrestable_au+'</td><td>' + value.temptrestable_cm + '</td><td>' + value.temptrestable_dv + '</td><td><i class="fas fa-trash-alt tercero-eliminar"></i></td>';
					response += '</tr>';
				});
				$('#tabla\\.tres').append(response);

				$('#tabla\\.tres > tr').on("click", function(){
					let id = $(this).data("id");
					let args = {
						action: "getOne",
						temporal_id: $("#id-paciente").val(),
						temptrestable_correlativo: id
					}

					$.post("https://pacientes.crecimientofetal.cl/temporal/tercero", args).done(function(data){
						let eg = data.temptrestable_eg.split(",");
						$("#semanasEcoGen").val(eg[0]);
						$("#diasEcoGen").val(eg[1]);
						$("#aud").val(data.temptrestable_utd);
						$("#aui").val(data.temptrestable_uti); 
						$("#auprom").val(data.temptrestable_put); 
						$("#ipau").val(data.temptrestable_au);
						$("#ipacm").val(data.temptrestable_cm);
						$("#ccp").val(data.temptrestable_cp);
						$("#dv").val(data.temptrestable_dv);
						$("#psmACM").val(data.temptrestable_acm);
						$("#boton\\.tres\\.guardar").data("id",id);
					});
				});

				$(".tercero-eliminar").on("click", function(event){
					event.stopPropagation();
					let args = {
						action: "del",
						temporal_id: $("#id-paciente").val(),
						temptrestable_id: $(this).parent().parent().data("id")
					}
	
					$.post("https://pacientes.crecimientofetal.cl/temporal/tercero", args).done(function(data){
						aplication.loadDoppler();
					});
				});
			}
		});
	}

	loadPacientes(){

		let args = {
            action: "get"
		}
		
		$.post("https://pacientes.crecimientofetal.cl/temporal/api", args).done(function(data){
            if (Object.keys(data).length > 0) {
                let response ="";
				
				$.each(data, function(i,value){
                    response += '<tr data-id="' + value.temporal_id +'"><td>' + value.temporal_id + '</td><td>' + value.temporal_name + '</td><td>' + value.temporal_edad + '</td><td>' + value.temporal_fur + '</td><td>' + value.temporal_semanas +'.'+ value.temporal_dias +'</td><td>' + value.temporal_fpp + '</td><td><i class="fas fa-trash-alt pacientes-eliminar"></i></td>';
                    response += '</tr>';
				});
				
                $("#graficosBody").html('<table class="table"><thead class="thead-dark"><tr><th scope="col">RUT</th><th scope="col">Nombre</th><th scope="col">Edad</th><th scope="col">FUM</th><th scope="col">Edad Gestacional</th><th scope="col">FPP</th></tr></thead><tbody id="tabla.pacientes"></tbody></table>');
                $("#tabla\\.pacientes").html(response);

				$(".pacientes-eliminar").on("click", function(event){
					event.stopPropagation();
					let args = {
						action: "del",
						temporal_id: $(this).parent().parent().data("id")
					}
	
					$.post("https://pacientes.crecimientofetal.cl/temporal/api", args).done(function(data){
						aplication.loadPacientes();
					});
				});
            }
		});
	}
}