//revisar https://gist.github.com/benpoole/1041277
//http://programacion.net/articulo/introduccion_a_web_sql_1305
//Agregar en la configuración: mebrete, Tipo de exámen ecográfico, 


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
		}
		else if (this.hash=="#ecoDoppler"){
			this.displayElement("ecoDoppler");
		}
		else if (this.hash=="#ecoObsSegTrim"){
			this.displayElement("ecoObsSegTrim");
		}
		else if (this.hash=="#ecoObsPrimTrim"){
			this.displayElement("ecoObsPrimTrim");
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
