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
		$("#evaluacion\\.translucencia\\.no\\.label").button("toggle");
		$("#eco\\.prim\\.trim\\.no\\.label").button("toggle");
		$("input[name='ajustarEcoPrimTrim']").button("toggle");

		var dayHoy = new Date();

		var day = ("0" + dayHoy.getDate()).slice(-2);
		var month = ("0" + (dayHoy.getMonth() + 1)).slice(-2);

		$('#fNacimiento').val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$("input[name='fum']").val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$("input[name='fee']").val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$('#id-paciente').val((day)+(month)+dayHoy.getFullYear());
		$("#semanasEcoGen").val(4);
		$("#semanasEcoGen").val(0);
		$('a[href="#medidas-eco-prim"]').tab('show');
	});

	$("select[name='edad_materna']").on("change", function(){
		$("#edadmaternaprimtrim").val($(this).val());
	});

	$("#eco\\.seg\\.trim\\.nuevo").on("click", function(){
		$("#dbp").val("");
		$("#dbp > .pivote-uno").html("");
		$("#dbp > .pivote-dos").html("");
		$("#dbp > .pivote-cero").html("|");
		$("#dbp > .pivote-centro").html("|");
		$("#dbp > .pivote-cien").html("|");
		$("#dbp > .pivote-tres").html("");
		$("#dbp > .pivote-cuatro").html("");
		$("#dof").val("");
		$("#cc").val("");
		$("#cc > .pivote-uno").html("");
		$("#cc > .pivote-dos").html("");
		$("#cc > .pivote-cero").html("|");
		$("#cc > .pivote-centro").html("|");
		$("#cc > .pivote-cien").html("|");
		$("#cc > .pivote-tres").html("");
		$("#cc > .pivote-cuatro").html("");
		$("#ca").val("");
		$("#ca > .pivote-uno").html("");
		$("#ca > .pivote-dos").html("");
		$("#ca > .pivote-cero").html("|");
		$("#ca > .pivote-centro").html("|");
		$("#ca > .pivote-cien").html("|");
		$("#ca > .pivote-tres").html("");
		$("#ca > .pivote-cuatro").html("");
		$("#lf").val("");
		$("#lf > .pivote-uno").html("");
		$("#lf > .pivote-dos").html("");
		$("#lf > .pivote-cero").html("|");
		$("#lf > .pivote-centro").html("|");
		$("#lf > .pivote-cien").html("|");
		$("#lf > .pivote-tres").html("");
		$("#lf > .pivote-cuatro").html("");
		$("#bvm").val("");
		$("#bvm > .pivote-uno").html("");
		$("#bvm > .pivote-dos").html("");
		$("#bvm > .pivote-cero").html("|");
		$("#bvm > .pivote-centro").html("|");
		$("#bvm > .pivote-cien").html("|");
		$("#bvm > .pivote-tres").html("");
		$("#bvm > .pivote-cuatro").html("");
		$("#lh").val("");
		$("#lh > .pivote-uno").html("");
		$("#lh > .pivote-dos").html("");
		$("#lh > .pivote-cero").html("|");
		$("#lh > .pivote-centro").html("|");
		$("#lh > .pivote-cien").html("|");
		$("#lh > .pivote-tres").html("");
		$("#lh > .pivote-cuatro").html("");
		$("#cerebelo").val("");
		$("#cerebelo > .pivote-uno").html("");
		$("#cerebelo > .pivote-dos").html("");
		$("#cerebelo > .pivote-cero").html("|");
		$("#cerebelo > .pivote-centro").html("|");
		$("#cerebelo > .pivote-cien").html("|");
		$("#cerebelo > .pivote-tres").html("");
		$("#cerebelo > .pivote-cuatro").html("");
		$("#pfe").val("");
		$("#pfe > .pivote-uno").html("");
		$("#pfe > .pivote-dos").html("");
		$("#pfe > .pivote-cero").html("|");
		$("#pfe > .pivote-centro").html("|");
		$("#pfe > .pivote-cien").html("|");
		$("#pfe > .pivote-tres").html("");
		$("#pfe > .pivote-cuatro").html("");
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

		var dayHoy = new Date();

		var day = ("0" + dayHoy.getDate()).slice(-2);
		var month = ("0" + (dayHoy.getMonth() + 1)).slice(-2);

		$('#fNacimiento').val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$("input[name='fum']").val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$("input[name='fee']").val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$('#id-paciente').val((day)+(month)+dayHoy.getFullYear());
		$("#semanasEcoGen").val(4);
		$("#semanasEcoGen").val(0);
		$('a[href="#medidas-eco-seg"]').tab('show');
	});

	$("#eco\\.doppler\\.nuevo").on("click", function(){
		var dayHoy = new Date();

		var day = ("0" + dayHoy.getDate()).slice(-2);
		var month = ("0" + (dayHoy.getMonth() + 1)).slice(-2);

		$('#fNacimiento').val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$("input[name='fum']").val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$("input[name='fee']").val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$('#id-paciente').val((day)+(month)+dayHoy.getFullYear());
		$("#semanasEcoGen").val(4);
		$("#semanasEcoGen").val(0);

		$("#aud").val("");
		$("#aud > .pivote-uno").html("");
		$("#aud > .pivote-dos").html("");
		$("#aud > .pivote-cero").html("|");
		$("#aud > .pivote-centro").html("|");
		$("#aud > .pivote-cien").html("|");
		$("#aud > .pivote-tres").html("");
		$("#aud > .pivote-cuatro").html("");
		$("#aui").val("");
		$("#aui > .pivote-uno").html("");
		$("#aui > .pivote-dos").html("");
		$("#aui > .pivote-cero").html("|");
		$("#aui > .pivote-centro").html("|");
		$("#aui > .pivote-cien").html("|");
		$("#aui > .pivote-tres").html("");
		$("#aui > .pivote-cuatro").html("");
		$("#auprom").val("");
		$("#auprom > .pivote-uno").html("");
		$("#auprom > .pivote-dos").html("");
		$("#auprom > .pivote-cero").html("|");
		$("#auprom > .pivote-centro").html("|");
		$("#auprom > .pivote-cien").html("|");
		$("#auprom > .pivote-tres").html("");
		$("#auprom > .pivote-cuatro").html("");
		$("#ipau").val("");
		$("#ipau > .pivote-uno").html("");
		$("#ipau > .pivote-dos").html("");
		$("#ipau > .pivote-cero").html("|");
		$("#ipau > .pivote-centro").html("|");
		$("#ipau > .pivote-cien").html("|");
		$("#ipau > .pivote-tres").html("");
		$("#ipau > .pivote-cuatro").html("");
		$("#ipacm").val("");
		$("#ipacm > .pivote-uno").html("");
		$("#ipacm > .pivote-dos").html("");
		$("#ipacm > .pivote-cero").html("|");
		$("#ipacm > .pivote-centro").html("|");
		$("#ipacm > .pivote-cien").html("|");
		$("#ipacm > .pivote-tres").html("");
		$("#ipacm > .pivote-cuatro").html("");
		$("#ccp").val("");
		$("#ccp > .pivote-uno").html("");
		$("#ccp > .pivote-dos").html("");
		$("#ccp > .pivote-cero").html("|");
		$("#ccp > .pivote-centro").html("|");
		$("#ccp > .pivote-cien").html("|");
		$("#ccp > .pivote-tres").html("");
		$("#ccp > .pivote-cuatro").html("");
		$("#dv").val("");
		$("#dv > .pivote-uno").html("");
		$("#dv > .pivote-dos").html("");
		$("#dv > .pivote-cero").html("|");
		$("#dv > .pivote-centro").html("|");
		$("#dv > .pivote-cien").html("|");
		$("#dv > .pivote-tres").html("");
		$("#dv > .pivote-cuatro").html("");
		$("#psmACM").val("");
		$("#liqAmnioDoppler").val("normal");
		$("#bvmDoppler").val("");
		$("#motivo-doppler").val("Estudio Doppler");
		$("#antecedentes-doppler").val("RCIU Emb. Previo");
		$("#presentacion-doppler").val("cefalica");
		$("#motilidad-doppler").val("hiperactivo");
		$("#ubicacion-doppler").val("anterior");
		$("#comentarios-doppler").val("");
		$('a[href="#medidas-eco-doppler"]').tab('show');
	})

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

		$('#fNacimiento').val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$("input[name='fum']").val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$("input[name='fee']").val((day)+"/"+(month)+"/"+dayHoy.getFullYear());
		$('#id-paciente').val((day)+(month)+dayHoy.getFullYear());
		$("#semanasEcoGen").val(4);
		$("#semanasEcoGen").val(0);

		$('a[href="#medidas-eco-prim"]').tab('show');

		$("#dbp").val("");
		$("#dbp > .pivote-uno").html("");
		$("#dbp > .pivote-dos").html("");
		$("#dbp > .pivote-cero").html("|");
		$("#dbp > .pivote-centro").html("|");
		$("#dbp > .pivote-cien").html("|");
		$("#dbp > .pivote-tres").html("");
		$("#dbp > .pivote-cuatro").html("");
		$("#dof").val("");
		$("#cc").val("");
		$("#cc > .pivote-uno").html("");
		$("#cc > .pivote-dos").html("");
		$("#cc > .pivote-cero").html("|");
		$("#cc > .pivote-centro").html("|");
		$("#cc > .pivote-cien").html("|");
		$("#cc > .pivote-tres").html("");
		$("#cc > .pivote-cuatro").html("");
		$("#ca").val("");
		$("#ca > .pivote-uno").html("");
		$("#ca > .pivote-dos").html("");
		$("#ca > .pivote-cero").html("|");
		$("#ca > .pivote-centro").html("|");
		$("#ca > .pivote-cien").html("|");
		$("#ca > .pivote-tres").html("");
		$("#ca > .pivote-cuatro").html("");
		$("#lf").val("");
		$("#lf > .pivote-uno").html("");
		$("#lf > .pivote-dos").html("");
		$("#lf > .pivote-cero").html("|");
		$("#lf > .pivote-centro").html("|");
		$("#lf > .pivote-cien").html("|");
		$("#lf > .pivote-tres").html("");
		$("#lf > .pivote-cuatro").html("");
		$("#lh").val("");
		$("#lh > .pivote-uno").html("");
		$("#lh > .pivote-dos").html("");
		$("#lh > .pivote-cero").html("|");
		$("#lh > .pivote-centro").html("|");
		$("#lh > .pivote-cien").html("|");
		$("#lh > .pivote-tres").html("");
		$("#lh > .pivote-cuatro").html("");
		$("#bvm").val("");
		$("#bvm > .pivote-uno").html("");
		$("#bvm > .pivote-dos").html("");
		$("#bvm > .pivote-cero").html("|");
		$("#bvm > .pivote-centro").html("|");
		$("#bvm > .pivote-cien").html("|");
		$("#bvm > .pivote-tres").html("");
		$("#bvm > .pivote-cuatro").html("");
		$("#cerebelo").val("");
		$("#cerebelo > .pivote-uno").html("");
		$("#cerebelo > .pivote-dos").html("");
		$("#cerebelo > .pivote-cero").html("|");
		$("#cerebelo > .pivote-centro").html("|");
		$("#cerebelo > .pivote-cien").html("|");
		$("#cerebelo > .pivote-tres").html("");
		$("#cerebelo > .pivote-cuatro").html("");
		$("#ic").val("");
		$("#pfe").val("");
		$("#pfe > .pivote-uno").html("");
		$("#pfe > .pivote-dos").html("");
		$("#pfe > .pivote-cero").html("|");
		$("#pfe > .pivote-centro").html("|");
		$("#pfe > .pivote-cien").html("|");
		$("#pfe > .pivote-tres").html("");
		$("#pfe > .pivote-cuatro").html("");
		$("#egP50").val("");
		$('a[href="#medidas-eco-seg"]').tab('show');
		$("#eco\\.prim\\.trim\\.no\\.label").button('toggle');
		$("#presentacion").val("cefalica");
		$("#dorso").val("anterior");
		$("#fcf").val("140");
		$("#ev-morfo").val("no evaluada dirigidamente, pero el aspecto morfológico general es normal");
		$("#comentarios-anatomia-informe-eg-texto").val("");
		$("#ubicacion").val("normal");
		$("#incersion").val("anterior");
		$("#grado-placenta").val(0);
		$("#bvmEcoDos").val("");
		$("#cordon").val("");
		$("#vasos").val(3);
		$("#liq-cualitativo-eco").val("normal");
		$("#comentarios-eco-dos-inf-dos").val("normal");
		
		//dopler
		$("#aud").val("");
		$("#aud > .pivote-uno").html("");
		$("#aud > .pivote-dos").html("");
		$("#aud > .pivote-cero").html("|");
		$("#aud > .pivote-centro").html("|");
		$("#aud > .pivote-cien").html("|");
		$("#aud > .pivote-tres").html("");
		$("#aud > .pivote-cuatro").html("");
		$("#aui").val("");
		$("#aui > .pivote-uno").html("");
		$("#aui > .pivote-dos").html("");
		$("#aui > .pivote-cero").html("|");
		$("#aui > .pivote-centro").html("|");
		$("#aui > .pivote-cien").html("|");
		$("#aui > .pivote-tres").html("");
		$("#aui > .pivote-cuatro").html("");
		$("#auprom").val("");
		$("#auprom > .pivote-uno").html("");
		$("#auprom > .pivote-dos").html("");
		$("#auprom > .pivote-cero").html("|");
		$("#auprom > .pivote-centro").html("|");
		$("#auprom > .pivote-cien").html("|");
		$("#auprom > .pivote-tres").html("");
		$("#auprom > .pivote-cuatro").html("");

		$("#ipau").val("");
		$("#ipau > .pivote-uno").html("");
		$("#ipau > .pivote-dos").html("");
		$("#ipau > .pivote-cero").html("|");
		$("#ipau > .pivote-centro").html("|");
		$("#ipau > .pivote-cien").html("|");
		$("#ipau > .pivote-tres").html("");
		$("#ipau > .pivote-cuatro").html("");
		$("#ipacm").val("");
		$("#ipacm > .pivote-uno").html("");
		$("#ipacm > .pivote-dos").html("");
		$("#ipacm > .pivote-cero").html("|");
		$("#ipacm > .pivote-centro").html("|");
		$("#ipacm > .pivote-cien").html("|");
		$("#ipacm > .pivote-tres").html("");
		$("#ipacm > .pivote-cuatro").html("");
		$("#ccp").val("");
		$("#ccp > .pivote-uno").html("");
		$("#ccp > .pivote-dos").html("");
		$("#ccp > .pivote-cero").html("|");
		$("#ccp > .pivote-centro").html("|");
		$("#ccp > .pivote-cien").html("|");
		$("#ccp > .pivote-tres").html("");
		$("#ccp > .pivote-cuatro").html("");

		$("#dv").val("");
		$("#dv > .pivote-uno").html("");
		$("#dv > .pivote-dos").html("");
		$("#dv > .pivote-cero").html("|");
		$("#dv > .pivote-centro").html("|");
		$("#dv > .pivote-cien").html("|");
		$("#dv > .pivote-tres").html("");
		$("#dv > .pivote-cuatro").html("");
		$("#psmACM").val("");

		$("#liqAmnioDoppler").val("normal");
		$("#bvmDoppler").val("normal");
		$("#motivo-doppler").val("Estudio Doppler");
		$("#antecedentes-doppler").val("RCIU Emb. Previo");
		$("#presentacion-doppler").val("cefalica");
		$("#motilidad-doppler").val("hiperactivo");
		$("#ubicacion-doppler").val("anterior");
		$("#comentarios-doppler").val("");
		$('a[href="#medidas-eco-doppler"]').tab('show');
		
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

	$("#link\\.go\\.ecouno").on("click",function(){
		if ($("#link\\.go\\.ecouno\\.pasouno").hasClass("d-none")){
			$("#link\\.go\\.ecouno\\.pasouno").removeClass("d-none");
			$("#link\\.go\\.ecouno\\.pasodos").removeClass("d-none");
		}
		else{
			$("#link\\.go\\.ecouno\\.pasouno").addClass("d-none");
			$("#link\\.go\\.ecouno\\.pasodos").addClass("d-none");
		}
		if ($("#link\\.go\\.ecodos\\.pasouno").hasClass("d-none") == false){
			$("#link\\.go\\.ecodos\\.pasouno").addClass("d-none");
			$("#link\\.go\\.ecodos\\.pasodos").addClass("d-none");
		}
	});
	$("#link\\.go\\.ecodos").on("click",function(){
		if ($("#link\\.go\\.ecodos\\.pasouno").hasClass("d-none")){
			$("#link\\.go\\.ecodos\\.pasouno").removeClass("d-none");
			$("#link\\.go\\.ecodos\\.pasodos").removeClass("d-none");
		}
		else{
			$("#link\\.go\\.ecodos\\.pasouno").addClass("d-none");
			$("#link\\.go\\.ecodos\\.pasodos").addClass("d-none");
		}
		if ($("#link\\.go\\.ecouno\\.pasouno").hasClass("d-none") == false){
			$("#link\\.go\\.ecouno\\.pasouno").addClass("d-none");
			$("#link\\.go\\.ecouno\\.pasodos").addClass("d-none");
		}
	});

	$("#link\\.go\\.doppler").on("click",function(){
		$("#link\\.volver\\.doppler").attr("href","#inicio");
	});

	$("#psisTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#pdiasTamizaje").focus();
		}
		if ($("#psisTamizaje").val() > 1){
			var unTercioPSis = $("#psisTamizaje").val() / 3;
			var unTercioPDias = "";
			var pMedia = "";

			if ($("#pdiasTamizaje").val() > 1){
				unTercioPDias = $("#pdiasTamizaje").val() / 3;
			}

			if (unTercioPDias > 0){
				pMedia = Math.trunc((unTercioPDias * 2) + (unTercioPSis));
			}

			$("#pmediaTamizaje").val(pMedia);
		}
	});

	$("#pdiasTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#tallaTamizaje").focus();
		}
		if ($("#psisTamizaje").val() > 1){
			var unTercioPSis = $("#psisTamizaje").val() / 3;
			var unTercioPDias = "";
			var pMedia = "";

			if ($("#pdiasTamizaje").val() > 1){
				unTercioPDias = $("#pdiasTamizaje").val() / 3;
			}

			if (unTercioPDias > 0){
				pMedia = Math.trunc((unTercioPDias * 2) + (unTercioPSis));
			}

			$("#pmediaTamizaje").val(pMedia);
		}
	});

	$("#tallaTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#pesoTamizaje").focus();
		}
		if ($("#tallaTamizaje").val() > 1 && $("#pesoTamizaje").val() > 1){
			$("#imcTamizaje").val(aplication.imc($("#tallaTamizaje").val(), $("#pesoTamizaje").val()));
		}
	});

	$("#translucenciaNucal").on("change", function(){
		if ($(this).val() == "no procede" || $(this).val() == "no medible"){
			$("#translunucal").addClass("d-none");
			$("#primtrim\\.adicionales\\.translucencia").addClass("d-none");
			$("#primtrim\\.adicionales\\.translucencia\\.ocultar").addClass("d-none");
			$("#prob").addClass("d-none");
			$("#prob2").addClass("d-none");
		}else{
			$("#translunucal").removeClass("d-none");
			$("#primtrim\\.adicionales\\.translucencia").removeClass("d-none");
			$("#primtrim\\.adicionales\\.translucencia\\.ocultar").removeClass("d-none");
		}
	});

	$("#pesoTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#primigesta").focus();
		}
		if ($("#tallaTamizaje").val() > 1 && $("#pesoTamizaje").val() > 1){
			$("#imcTamizaje").val(aplication.imc($("#tallaTamizaje").val(), $("#pesoTamizaje").val()));
		}
	});

	$("#audTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#auiTamizaje").focus();
		}
		var aud = "";
		if ($("#audTamizaje").val() != ""){
			aud = $("#audTamizaje").val();
			aud = aud.toString(); 
			aud = aud.replace(",", ".");
			aud = parseFloat(aud);
		}
		var aui = "";

		if ($("#auiTamizaje").val() != ""){
			aui = $("#auiTamizaje").val();
			aui = aui.toString(); 
			aui = aui.replace(",", ".");
			aui = parseFloat(aui);
		}
		if (aud > 0 && aui > 0){
			var ut = (aud + aui) / 2;
			$("#aupromTamizaje").val(ut);
			$("#aupromTamizajePct").val(pctUtApi(ut));
			ajustarProgreso(pctUtApi(ut), "auTamizajePct");
		}
		else{
			$("#aupromTamizaje").val(0);
			$("#aupromTamizajePct").val(0);
			ajustarProgreso($("#aupromTamizaje").val(), "auTamizajePct");
		}
	});
	
	$("#auiTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#psisTamizaje").focus();
		}
		var aud = "";
		if ($("#audTamizaje").val() != ""){
			aud = $("#audTamizaje").val();
			aud = aud.toString(); 
			aud = aud.replace(",", ".");
			aud = parseFloat(aud);
		}
		var aui = "";

		if ($("#auiTamizaje").val() != ""){
			aui = $("#auiTamizaje").val();
			aui = aui.toString(); 
			aui = aui.replace(",", ".");
			aui = parseFloat(aui);
		}
		if (aud > 0 && aui > 0){
			var ut = (aud + aui) / 2;
			$("#aupromTamizaje").val(ut);
			$("#aupromTamizajePct").val(pctUtApi(ut));
			ajustarProgreso(pctUtApi(ut), "auTamizajePct");
		}
		else{
			$("#aupromTamizaje").val(0);
			$("#aupromTamizajePct").val(0);
			ajustarProgreso($("#aupromTamizaje").val(), "auTamizajePct");
		}
	});

	$("#eco\\.seg\\.trim\\.select\\.comentario").on("change", function(){
		var sexoFetal = $('#ecografia\\.segtrim\\.sexo').val();
		
        if ($(this).val() == 1){
            $('#bvmEcoDos').val($('#bvm').val()).trigger('change');

            var percentilPeso = $('#pfePctRpt').val();
			percentilPeso = percentilPeso.replace('&lt;', '<').replace('&gt;', '>');
            var comentarios = 'Sexo Fetal ' + sexoFetal + '\r\nCrecimiento (peso) percentil ' + percentilPeso + ', para gráfica de peso fetal Hadlock* \r\n';

            var linea6 = "Líquido amniótico " + $('#liq-cualitativo-eco').val() + ", con bolsillo vertical mayor " + document.getElementById("bvmEcoDos").value + " mm.";

            comentarios = comentarios + linea6 + '\r\n';
            $("#comentarios-eco-dos-inf-dos").val(comentarios);
        }
        else if ($(this).val() == 2){
			var fur = $( "input[name='fum']").val();
			var fpp = $( "input[name='fpp']").val();
            var comentario = 'Sexo Fetal ' + sexoFetal + "\r\nFum operacional: " + fur + "\r\nFecha probable de parto: " + fpp + "\r\n";
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

 $( '#nuevoNacionalidadConfig').on('click', function() {
	$('#nacionalidadConfig .tabla').hide();
	$('#nuevoNacionalidadConfig').hide();
	$('#editarNacionalidadConfig').hide();
	$('#guardarNacionalidadConfig').show();
	$('#cancelarNacionalidadConfig').show();
	$('#nacionalidadConfig .formulario').show();
 });

$( '#cancelarNacionalidadConfig').on('click', function() {
	$("#nacionalidadConfig .tabla").show();
	$('#nuevoNacionalidadConfig').show();
	$('#editarNacionalidadConfig').show();
	$('#guardarNacionalidadConfig').hide();
	$('#cancelarNacionalidadConfig').hide();
	$("#nacionalidadConfig .formulario").hide();
 });

$( '#guardarNacionalidadConfig').on('click', function() {
	saveNacionalidadConfigLocalStorage();
	$("#nacionalidadConfig .tabla").show();
	$('#nuevoNacionalidadConfig').show();
	$('#guardarNacionalidadConfig').hide();
	$('#cancelarNacionalidadConfig').hide();
	$("#nacionalidadConfig .formulario").hide();
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
			$('#fecha-consentimiento').datepicker();
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


