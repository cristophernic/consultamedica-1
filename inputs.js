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
        let id = $("#boton\\.uno\\.guardar").data("id");
        let args = "";

        if (id == 0){
            args = {
                action: "new",
                temporal_id: $("#id-paciente").val(),
                temptable_eg: $("#semanasEcoGen").val() + "," + $("#diasEcoGen").val(),
                temptable_lcn: $("#lcn").val(),
                temptable_saco: $("#saco").val()
            }
        }
        else{
            args = {
                action: "set",
                temporal_id: $("#id-paciente").val(),
                temptable_id: id,
                temptable_eg: $("#semanasEcoGen").val() + "," + $("#diasEcoGen").val(),
                temptable_lcn: $("#lcn").val(),
                temptable_saco: $("#saco").val()
            }
        }

        $.post("https://pacientes.crecimientofetal.cl/temporal/primer", args).done(function(data){
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
						temptable_id: id
					}

					$.post("https://pacientes.crecimientofetal.cl/temporal/primer", args).done(function(data){
						let eg = data.temptable_eg.split(",");
						$("#semanasEcoGen").val(eg[0]);
						$("#diasEcoGen").val(eg[0]);
						$("#lcn").val(data.temptable_lcn);
                        $("#saco").val(data.temptable_saco);
                        $("#boton\\.uno\\.guardar").data("id",id);
					});
				})
			});
        });
    });

    $("#boton\\.dos\\.guardar").on("click", function(){
        let id = $("#boton\\.uno\\.guardar").data("id");
        let args = "";

        if (id == 0){
            args = {
                action: "new",
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
                tempdostable_morfo: $("#ev-morfo option:selected").val(),
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
        }
        else{
            args = {
                action: "set",
                tempdostable_correlativo: id,
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
                tempdostable_morfo: $("#ev-morfo option:selected").val(),
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
        }

        $.post("https://pacientes.crecimientofetal.cl/temporal/segundo", args).done(function(data){
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
						response += '<td>' + value.tempdostable_id + '</td><td>' + value.tempdostable_eg + '</td><td>' + value.tempdostable_pfe + '</td><td>' + value.tempdostable_bvm + '</td><td>' + value.tempdostable_cerebelo + '</td>';
						response += '</tr>';
					});
                    $('#tabla\\.dos').append(response);
                    
                    $('#tabla\\.uno > tr').on("click", function(){
						let id = $(this).data("id");
						let args = {
							action: "getOne",
							temporal_id: $("#id-paciente").val(),
							tempdostable_id: id
						}

						$.post("https://pacientes.crecimientofetal.cl/temporal/segundo", args).done(function(data){
							let eg = data.tempdostable_eg.split(",");
							$("#semanasEcoGen").val(eg[0]);
							$("#diasEcoGen").val(eg[0]);
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
                }
			});
        });
    });

    $("#boton\\.tres\\.guardar").on("click", function(){

        let args = {
            action: "new",
            temptrestable_id: $("#id-paciente").val(),
            temptrestable_eg: $("#semanasEcoGen").val() + "," + $("#diasEcoGen").val(),
            temptrestable_utd: $("#aud").val(),
            temptrestable_uti: $("#aui").val(), 
            temptrestable_put: $("#auprom").val(), 
            temptrestable_au: $("#ipau").val(), 
            temptrestable_cm: $("#ipacm").val(),
            temptrestable_cp: $("#ccp").val(),
            temptrestable_dv: $("#dv").val(),
            temptrestable_acm: $("#psmACM").val()
        }

        $.post("https://pacientes.crecimientofetal.cl/temporal/tercero", args).done(function(data){
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
                        response += '<td>' + value.temptrestable_id + '</td><td>' + value.temptrestable_eg + '</td><td>' + value.temptrestable_put + '</td><td>' + value.temptrestable_cm + '</td><td>' + value.tempdostable_cp + '</td><td>' + value.tempdostable_dv + '</td>';
                        response += '</tr>';
                    });
                    $('#tabla\\.tres').append(response);
                }
            });
        });
    });
});