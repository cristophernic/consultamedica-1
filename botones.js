function activarBotones() {
  
 $( '#dbp' ).change( deDBP);
 $( '#cc' ).change( pctcc);
 $( '#ca' ).change( pctca);
 $( '#lf' ).change( pctlf);
 $( '#cerebelo' ).change( pctcb);
 $( '#saco' ).change( egsaco); 
 $( '#lcn' ).change( eglcn);
 $( '#lh').change( pctlh);
  $( '#dof').change( calcdof);
  
 //doppler
 $( '#aud').change( pctut);
 $( '#aui').change( pctut);
 $( '#dv' ).change( pctdv);
 $( '#ipau' ).change( pctau);
 $( '#ipacm' ).change( pctacm);
  
 $("input[name='fum']").on('change', function() {
   localStorage.fum = $(this).val();
   localStorage.fee = $("input[name='fee']").val();
   localStorage.eg = calcularEG();
   $("input[name='fum']").val(localStorage.fum);
   
   $("input[name='eg']").val(localStorage.eg);
   
   if (this.id != "fum-dos"){
	   $('#fum-dos').datepicker('setValue', localStorage.fum);
   }

	 var semanas = Math.trunc(localStorage.eg)
	 var dias =  Math.trunc((localStorage.eg - Math.trunc(localStorage.eg)) * 10)

	 $('#semanasEcoGen').val(semanas);
	$('#diasEcoGen').val(dias);
	 $("input[name='eg']").val(localStorage.eg);
 });
  
  $("input[name='fee']").on('change', function() {
   localStorage.fum = $("input[name='fum']").val();
   localStorage.fee = $(this).val();
   localStorage.eg = calcularEG();
   $("input[name='fee']").val(localStorage.fee);
   $("input[name='eg']").val(localStorage.eg);
	  
   if (this.id != "fee-dos"){
	   $('#fee-dos').datepicker('setValue', localStorage.fee);
   }
   if (this.id != "fee-seis"){
	   $('#fee-seis').datepicker('setValue', localStorage.fee);
   }
	  
	  var semanas = Math.trunc(localStorage.eg)
	 var dias =  Math.trunc((localStorage.eg - Math.trunc(localStorage.eg)) * 10)

	 $('#semanasEcoGen').val(semanas);
	$('#diasEcoGen').val(dias);
	 $("input[name='eg']").val(localStorage.eg);
 });
}
