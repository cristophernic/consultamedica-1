$(document).ready(function(){
    var i;
    
    for (i = 14; i <51; i++) {
        if (i == 20){
            $("#edadmaternaprimtrim").append('<option value="'+ i +'" selected>' + i + ' años</option>');
        }
        else{
            $("#edadmaternaprimtrim").append('<option value="'+ i +'">' + i + ' años</option>');
        }
    }

    for (i = 45; i < 84; i++) {
        $("#loncefalocaudal").append('<option value="'+ i +'">' + i + ' mm</option>');
    }

    for (i = 90; i < 170; i++) {
        if (i == 140){
            $("#fcf").append('<option value="'+ i +'" selected>' + i + '</option>');
        }
        else{
            $("#fcf").append('<option value="'+ i +'">' + i + '</option>');
        }
    }
    
});