$( document ).ready(function() {

    //cargar input de semanas que empiezan con 4
    for (i = 4; i < 43; i++) {
        $("#semanasEcoGen").append('<option value="' + i +'">' + i + '</option>');
        $("#semanasEcoPrimTriso").append('<option value="' + i +'">' + i + '</option>');
    }
    $('#semanasEcoGen option[value="4"]').prop('selected', true);
    $('#semanasEcoPrimTriso option[value="4"]').prop('selected', true);
    //cargar inputs de dias
    for (i = 0; i < 7; i++) {
        $("#diasEcoGen").append('<option value="' + i +'">' + i + '</option>');
        $("#diasEcoPrimTriso").append('<option value="' + i +'">' + i + '</option>');
    }
    //cargar inputs de edad materna
    for (i = 10; i < 51; i++) {
        $("select[name='edad_materna']").append('<option value="' + i +'">' + i + ' años</option>');
    }

    for (i = 90; i < 171; i++) {
        $("#fcf-prim").append('<option value="' + i +'">' + i + '</option>');
    }
    $("#fcf-prim").append('<option value=" > 170">&gt; 170</option>');
    $('#fcf-prim option[value="140"]').prop('selected', true);

    $("#id-paciente").on("keyup", function(event){
        let args = {
            action: "read",
            temporal_id: $("#id-paciente").val()
        }

        $.post("https://pacientes.crecimientofetal.cl/temporal/api", args).done(function(data){
            if (Object.keys(data).length > 0) {
                $("#id-paciente").val(data.temporal_id);
                $("#nombre-paciente").val(data.temporal_name);
                $("#motivo-examen").val(data.temporal_motivo);
                $("#patologiaObstetricaUno").val(data.temporal_patologia);
                $("#ecografista").val(data.temporal_profesional);
                $("input[name='edad_materna']").val(data.temporal_edad);
                $("#fum-dos").val(data.temporal_fur);
				$("#semanasEcoGen").val(data.temporal_semanas);
				$("#diasEcoGen").val(data.temporal_dias);
				$("input[name='fpp']").val(data.temporal_fpp);
            }
            else{
                $("#nombre-paciente").val("");
                $("#motivo-examen").val("");
                $("#patologiaObstetricaUno").val("");
                $("#ecografista").val("");
                $("input[name='edad_materna']").val("");
                var B = new Date();;
                $("#fum-dos").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear()).trigger("change");
            }
        });
    });

    $("#boton\\.uno\\.guardar").on("click",function(){
        let args = {
            action: "new",
            temporal_id: $("#id-paciente").val(),
            temptable_eg: $("#semanasEcoGen").val() + "," + $("#diasEcoGen").val(),
            temptable_lcn: $("#lcn").val(),
            temptable_saco: $("#saco").val()
        }

        $.post("https://pacientes.crecimientofetal.cl/temporal/primer", args).done(function(data){
            let args = {
				action: "get",
				temporal_id: $("#id-paciente").val()
			}
	
			$.post("https://pacientes.crecimientofetal.cl/temporal/primer", args).done(function(data){
				$('#tabla\\.uno').empty();
				if (Object.keys(data).length > 0) {
					let response = '';
					$.each(data, function(i,value){
						response += '<tr>';
						response += '<td>' + value.temptable_rut + '</td><td>' + value.temptable_saco + '</td><td>' + value.temptable_lcn + '</td><td>' + value.temptable_eg + '</td>';
						response += '</tr>';
					});
					$('#tabla\\.uno').append(response);
				}
			});
        });
    });

    $("#boton\\.dos\\.guardar").on("click", function(){

        let args = {
            tempdostable_id: $("#id-paciente").val(),
            tempdostable_eg: $("#semanasEcoGen").val() + "," + $("#diasEcoGen").val(),
            tempdostable_dbp: $("#dbp").val(),
            tempdostable_dof: $("#dof").val(), 
            tempdostable_cc: $("#cc").val(), 
            tempdostable_ca: $("#ca").val(), 
            tempdostable_lf: $("#lf").val(),
            tempdostable_bvm: $("#bvm").val(),
            tempdostable_lh: $("#lh").val(),
            tempdostable_cerebelo: $("#cerebelo").val(),
            tempdostable_pfe: $("#pfe").val(),
            tempdostable_egP50: $("#egP50").val(),
            tempdostable_presentacion: $("#presentacion").val(),
            tempdostable_dorso: $("#dorso").val(),
            tempdostable_fcf: $("#fcf").val(),
            tempdostable_sexo: $("#ecografia\\.segtrim\\.sexo").val(),
            tempdostable_morfo: $("#ev-morfo").val(),
            tempdostable_anatomia: $("#comentarios-anatomia-informe-eg-texto").val(),
            tempdostable_ubicacion: $("#ubicacion").val(),
            tempdostable_incersion: $("#incersion").val(),
            tempdostable_grado: $("#grado-placenta").val(),
            tempdostable_liq: $("#liq-cualitativo-eco").val(),
            tempdostable_bvmEcoDos: $("#bvmEcoDos").val(),
            tempdostable_cordon: $("#cordon").val(),
            tempdostable_vasos: $("#vasos").val(),
            tempdostable_comentario: $("#eco\\.seg\\.trim\\.select\\.comentario").val(),
            tempdostable_comentarios: $("#comentarios-eco-dos-inf-dos").val()
        }

        $.post("https://pacientes.crecimientofetal.cl/temporal/segundo", args).done(function(data){
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
						response += '<td>' + value.tempdostable_id + '</td><td>' + value.tempdostable_eg + '</td><td>' + value.tempdostable_pfe + '</td><td>' + value.tempdostable_bvm + '</td><td>' + value.tempdostable_cerebelo + '</td>';
						response += '</tr>';
					});
					$('#tabla\\.dos').append(response);
				}
			});
        });
    });
});