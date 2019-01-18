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
            }
        });
    })
});
