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
						response += '<td>' + value.temptable_rut + '</td><td>' + value.temptable_eg + '</td><td>' + value.temptable_lcn + '</td><td>' + value.temptable_saco + '</td>';
						response += '</tr>';
					});
					$('#tabla\\.uno').append(response);
				}
			});
        });
    });
});
