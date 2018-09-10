var keynum, lines = 1;

function limitLines(obj, e) {
        // IE
        if(window.event) {
          keynum = e.keyCode;
        // Netscape/Firefox/Opera
        } else if(e.which) {
          keynum = e.which;
        }

        if(keynum == 13) {
          if(lines == obj.rows) {
            return false;
          }else{
            lines++;
          }
        }
      }

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

$(document).ready(function(){
	$("#eco\\.prim\\.trim\\.nuevo").on("click", function(){
		$("#lcn").val("");
		$("#saco").val("");
		$("#utero-ubic1").val("central");
		$("#utero-ubic2").val("anterior");
		$("#cuerpo-uterino").val("aspecto normal");
		$("#saco-gestacional").val("normal");
		$("#saco-vitelino").val("no se observa");
		$("#embrion").val("no se observa aun");
		$("#fcf-prim").val(140);
		$("#anexo-derecho").val("aspecto normal");
		$("#anexo-izquierdo").val("aspecto normal");
		$("#exploracion-douglas").val("libre");
		$("#comentarios-eco-uno").val("");
		$("#lcnPct").val("");
		$("#sacoPct").val("");
		$("#resultadoAjusteEcoPrimTrim").css("display", "none");
		$("#prob").addClass("d-none");
		$("#examen\\.eco\\.primtrim\\.adicionales").addClass("d-none");
		$("#evaluacion\\.translucencia\\.si\\.label").button("toggle");
		$("#evaluacion\\.translucencia\\.no\\.label").button("toggle");
		$("#eco\\.prim\\.trim\\.si\\.label").button("toggle");
		$("#eco\\.prim\\.trim\\.no\\.label").button("toggle");
		$("input[name='ajustarEcoPrimTrim']").button("toggle");

		$("#eco\\.prim\\.trim\\.nuevo").trigger("click");
	});

	$("select[name='edad_materna']").on("change", function(){
		$("#edadmaternaprimtrim").val($(this).val());
	});

	$("#eco\\.seg\\.trim\\.nuevo").on("click", function(){
		$("#dbp").val("");
		$("#dof").val("");
		$("#cc").val("");
		$("#ca").val("");
		$("#lf").val("");
		$("#bvm").val("");
		$("#lh").val("");
		$("#cerebelo").val("");
		$("#pfe").val("");
		$("#egP50").val("");
		$("#ccca").val("");

		$("#presentacion").val("cefalica");
		$("#dorso").val("posterior");
		$("#fcf").val(140);
		$("input[name='accard']").prop( "checked", true );
		$("input[name='movfet']").prop( "checked", true );
		$("#ev-morfo").val("no evaluada dirigidamente, pero el aspecto morfológico general es normal");
		$("#comentarios-anatomia-informe-eg-texto").val("");
		$("#ubicacion").val("normal");
		$("#incersion").val("anterior");
		$("#grado-placenta").val(0);
		$("#liq-cualitativo-eco").val("normal");
		$("#bvmEcoDos").val("");
		$("#cordon").val("inserción central");
		$("#vasos").val("3");
		$("#eco\\.seg\\.trim\\.select\\.comentario").val(1);
		$("#comentarios-eco-dos-inf-dos").val("");
	});

	$("#nuevo\\.paciente\\.button\\.reset").on("click", function(){
		$("#nombre-paciente").val("Paciente de Prueba");
		$("#motivo-examen").val(1);
		$("#patologiaObstetricaUno").val(1);
		$("#ecografista").val(1);
		$("select[name='edad_materna']").val(10);
		$("#profReferente").val("");
		$("#procedencia").val("");
		$("#Lugar-examen").val("");

		var dayHoy = new Date();

		var day = ("0" + dayHoy.getDate()).slice(-2);
		var month = ("0" + (dayHoy.getMonth() + 1)).slice(-2);

		$('#fNacimiento').val((day)+"/"+(month)+"/"+dayHoy.day.getFullYear());
		$("input[name='fum']").val((day)+"/"+(month)+"/"+dayHoy.day.getFullYear());
		$("input[name='fee']").val((day)+"/"+(month)+"/"+dayHoy.day.getFullYear());
		$('#id-paciente').val((day)+(month)+dayHoy.day.getFullYear());
		$("#semanasEcoGen").val(4);
		$("#semanasEcoGen").val(0);
	});

	$( '#bvmEcoDos' ).on('change', function(){
		bvmEcoDos();
		$('#bvm').val($(this).val()).trigger('change');
	});
	$('#ev-morfo').on('change', function(){
		if ($(this).val() == "Descripcion general detallando distintos segmentos"){
			$("#comentarios-anatomia-informe-eg-texto").val("Evaluación anatómica general de aspecto normal; cráneo y estructura internas de aspecto normal, cara cuello normal, labio superior integro, Tórax y abdomen de aspecto normal, corazón cuatro cámaras, tractos de salida de aspecto normal, cámara gástrica y vejiga visibles, riñón derecho e izquierdo de aspecto normal, pared abdominal integra, columna visible en toda su extensión, extremidades con movilidad y tono de aspecto normal, sexo fetal masculino.");
		}
		else{
			$("#comentarios-anatomia-informe-eg-texto").val('');
		}
	});
	$("#ev-morfo").val('no evaluada dirigidamente, pero el aspecto morfológico general es normal');
	$('#ev-morfo').trigger('change');

	$("#informe\\.eco\\.seg\\.trim").on("click", function(){
		var percentilPeso = $('#pfePctRpt').val();
		percentilPeso = percentilPeso.replace('&lt;','<').replace('&gt;', '>');
		var comentarios = 'Crecimiento (peso) percentil ' + percentilPeso + ', para gráfica de peso fetal Hadlock* \r\n';
	
		var linea6 = "Líquido amniótico " + $('#liq-cualitativo-eco').val() + ", con bolsillo vertical mayor " + document.getElementById("bvmEcoDos").value + " mm.";
		
		comentarios = comentarios + linea6 + '\r\n';
		$("#comentarios-eco-dos-inf-dos").val(comentarios);
	});

	$("#eco\\.seg\\.trim\\.select\\.comentario").on("change", function(){
        if ($(this).val() == 1){
            $('#bvmEcoDos').val($('#bvm').val()).trigger('change');

            var percentilPeso = $('#pfePctRpt').val();
            percentilPeso = percentilPeso.replace('&lt;', '<').replace('&gt;', '>');
            var comentarios = 'Crecimiento (peso) percentil ' + percentilPeso + ', para gráfica de peso fetal Hadlock* \r\n';

            var linea6 = "Líquido amniótico " + $('#liq-cualitativo-eco').val() + ", con bolsillo vertical mayor " + document.getElementById("bvmEcoDos").value + " mm.";

            comentarios = comentarios + linea6 + '\r\n';
            $("#comentarios-eco-dos-inf-dos").val(comentarios);
        }
        else if ($(this).val() == 2){
			var fur = $( "input[name='fum']").val();
			var fpp = $( "input[name='fpp']").val();
            var comentario = "Fum operacional: " + fur + "\r\nFecha probable de parto: " + fpp + "\r\n";
            $('#comentarios-eco-dos-inf-dos').val(comentario);
        }
	});

	$("#informe\\.eco\\.seg\\.trim").on("click", function(){
		if ($("#comentarios-doppler").val() == ""){
			var comentarios = "";
			if ($('#auprom').val() > 0){
				comentarios = 'F. Doppler materno (promedio uterinas), IP percentil ' + $('#auPctTxt').val() + '\r\n';
			}
			if ($('#ipau').val() > 0){
				comentarios = comentarios + 'F. Doppler fetal, IP de CCP percentil ' + $('#ccpPctTxt').val() + '\r\n';
			}
			$("#comentarios-doppler").val(comentarios);
		}
	});

	$( '#bvmDoppler' ).on('change', function(){
		bvmDoppler();
	});

	$( '#saco-vitelino').on("click", function(){
	    if ($(this).val() == 'presente'){
	        $('#valor-saco-vitelino').css('display', 'block');
	    }
	    else{
		$('#valor-saco-vitelino').css('display', 'none');
		$('#valor-saco-vitelino').val('');	
	    }
	});

	$( '#embrion').on("click", function(){
	    if ($(this).val() == 'no se observa aun' || $(this).val() == 'act. no evidenciable' ){
	        $('#fcf-primer-trim').css('display', 'none');
		$('#fcf-primer-trim').val('');
		$('#lcn-informe').css('display', 'none');
		$('#lcn-informe').val('');
	    }
	    else if ($(this).val() == 'act. cardiaca evidenciable'){
	        $('#fcf-prim').val($("#fcf-prim option:first").val());
		$('#lcn-informe').css('display', 'none');
		$('#lcn-informe').val($('#lcn').val());
	    }
	    else if ($(this).val() == 'act. card. y Corp. (-)'){
		$('#lcn-informe').css('display', 'block');
		$('#lcn-informe').val($('#lcn').val());
	    }
	    else{
		$('#fcf-primer-trim').css('display', 'block');
		$('#lcn-informe').css('display', 'block');
		$('#lcn-informe').val($('#lcn').val());
	    }
	});

	$( '#exploracion-douglas').on("click", function(){
	    if ($(this).val() == 'ocupado'){
	        $('#exploracion-douglas-informe').css('display', 'block');
	    }
	    else{
		$('#exploracion-douglas-informe').css('display', 'none');	
	    }
	});

	$("#informe\\.eco\\.prim\\.trim").on("click", function(){
		var fur = $( "input[name='fum']").val();
		var fpp = $( "input[name='fpp']").val();
		if ($('#lcn').val() < 1){
			var comentario = "En relación a fecha de ultima menstruación referida;\r\nse sugiere reevaluar más adelante para definir edad gestacional\r\n";
		}
		else{
			var comentario = "Fum operacional: " + fur + "\r\nFecha probable de parto: " + fpp;
		}
		$('#comentarios-eco-uno').val(comentario);
		$('#saco-gestacional-mm').val($('#saco').val());
		$('#lcn-informe').val($('#lcn').val());
	});

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
     $("#imcMaterno").val(aplication.imc($(this).val(), $("#pesoMaterno").val()) + " kl/m2");
 });

$( '.informacion').on('click', function() {
     $("#informacion").hide();
 });

$('#configTab a').click(function (e) {
  e.preventDefault()
  $('#configTab a[data-toggle="tab"]').removeClass('active');
  $(this).addClass('active');
  $('div .tab-pane').removeClass('active');
  $(this.hash).tab('show');
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

$( '#nuevoprofRefConfig').on('click', function() {
	$('#profRefConfig .tabla').hide();
	$('#nuevoprofRefConfig').hide();
	$('#editarprofRefConfig').hide();
	$('#guardarprofRefConfig').show();
	$('#cancelarprofRefConfig').show();
	$('#profRefConfig .formulario').show();
 });

$( '#cancelarprofRefConfig').on('click', function() {
	$("#profRefConfig .tabla").show();
	$('#nuevoprofRefConfig').show();
	$('#editarprofRefConfig').show();
	$('#guardarprofRefConfig').hide();
	$('#cancelarprofRefConfig').hide();
	$("#profRefConfig .formulario").hide();
 });

$('#guardarprofRefConfig').on('click', function(){
	saveprofRefLocalStorage();
	$("#profRefConfig .tabla").show();
	$('#nuevoprofRefConfig').show();
	$('#guardarprofRefConfig').hide();
	$('#cancelarprofRefConfig').hide();
	$("#profRefConfig .formulario").hide();
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
$( '#loadPacienteSelect' ).on( 'click', function() {
    $('#popupTitle').html("Mensaje");
    $('#popupBody').html("<p>Módulo en construcción</p>");
    $('#popupGenerico').modal('show');
});
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
			activarBotones();
			let database = checkDatabase();
			if (database == true){
				loadDatabase();
			}
			else{
				alert("Debes actualizar tu navegador para usar este sistema");
				return;
			}
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

				  $('#infadicionalNoController').on('click', function(){
					if ($('#infadicionalView').hasClass('d-none') == false){
						$('#infadicionalView').addClass('d-none');
						$('#continuarExamenEcografico').removeClass('d-none');
					}
				});
				$("#pdfnacionalview").on("click", function(){
					$("#pdfview").attr('src', "https://crecimientofetal.cl/pdf/gnacional.pdf");
				});
				
				$("#pdfregionalview").on("click", function(){
					$("#pdfview").attr('src', "https://crecimientofetal.cl/pdf/gregional.pdf");
				});

				$('#infadicionalSiController').on('click', function(){
					$('#infadicionalView').removeClass('d-none');
					$('#continuarExamenEcografico').addClass('d-none');
				});
				
				$('#infadicionalClinicoNoController').on('click', function(){
					if ($('#infadicionalClinicoView').hasClass('d-none') == false){
						$('#infadicionalClinicoView').addClass('d-none');
					}
				});
				
				$('#infadicionalClinicoSiController').on('click', function(){
					$('#infadicionalClinicoView').removeClass('d-none');
				});
				
				$('#configSiController').on('click', function(){
					document.location.hash = "configuracion";
				});
				
				$('#configSiController').on('focusout', function(){
					$('#configNoController').button('toggle');
				});
		}
	}
});

$(window).on('hashchange', function(){
	aplication.onHashChange();
});


