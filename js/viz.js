// COP THEMES
$( document ).ready(function() {
    $('#graph02 .st3').css('opacity','0');
    $('#e-adaptation .st3').css('opacity','1');
    $('#e-mitigation .st3').css('opacity','1');
    $('#graph02 .st4').css('opacity','0.1');
    $('#graph02 .st6').css('opacity','1');
    $('#graph02 .st7').css('opacity','0.3');
    $('#a-mitigation').css('opacity','0.8');
});

$("#a-negotiation").click(function() {
	$('#graph02 .st3').css('opacity','0');
    $('#graph02 .st4').css('opacity','0.1');
    $('#graph02 .st6').css('opacity','0.1');
    $('#a-negotiation').css('opacity','0.8');
    $('#e-negotiation .st3').css('opacity','1');
});

$("#a-emissions").click(function() {
	$('#graph02 .st3').css('opacity','0');
    $('#graph02 .st4').css('opacity','0.1');
    $('#graph02 .st6').css('opacity','0.1');
    $('#a-emissions').css('opacity','0.8');
    $('#e-emissions .st3').css('opacity','1');
});

$("#a-reductions").click(function() {
	$('#graph02 .st3').css('opacity','0');
    $('#graph02 .st4').css('opacity','0.1');
    $('#graph02 .st6').css('opacity','0.1');
    $('#a-reductions').css('opacity','0.8');
    $('#e-reductions .st3').css('opacity','1');
});

$("#a-ghg").click(function() {
	$('#graph02 .st3').css('opacity','0');
    $('#graph02 .st4').css('opacity','0.1');
    $('#graph02 .st6').css('opacity','0.1');
    $('#a-ghg').css('opacity','0.8');
    $('#e-ghg .st3').css('opacity','1');
});

$("#a-mitigation").click(function() {
	$('#graph02 .st3').css('opacity','0');
    $('#graph02 .st4').css('opacity','0.1');
    $('#graph02 .st6').css('opacity','0.1');
    $('#a-mitigation').css('opacity','0.8');
    $('#e-mitigation .st3').css('opacity','1');
});

$("#a-kyoto").click(function() {
	$('#graph02 .st3').css('opacity','0');
    $('#graph02 .st4').css('opacity','0.1');
    $('#graph02 .st6').css('opacity','0.1');
    $('#a-kyoto').css('opacity','0.8');
    $('#e-kyoto .st3').css('opacity','1');
});

$("#a-unfcc").click(function() {
	$('#graph02 .st3').css('opacity','0');
    $('#graph02 .st4').css('opacity','0.1');
    $('#graph02 .st6').css('opacity','0.1');
    $('#a-unfcc').css('opacity','0.8');
    $('#e-unfcc .st3').css('opacity','1');
});

$( "#a-adaptation").click(function() {
	$('#graph02 .st3').css('opacity','0');
	$('#graph02 .st4').css('opacity','0.1');
	$('#a-adaptation').css('opacity','1');
    $('#e-adaptation .st3').css('opacity','1');
});

// Adaptation timeline
$( document ).ready(function() {
	$('#adaptation-timeline .st-r').css('fill','#ff4a60');
	$('#adaptation-timeline .st-r').css('stroke','white');
	$('#adaptation-timeline .st-r').css('stroke-width','3');
	$('#adaptation-timeline #2002 .st-r').css('fill','white');
	$('#adaptation-timeline #2008_PPCR').css('display','none');
	$('#adaptation-timeline #2009_AF').css('display','none');
	$('#adaptation-timeline #2012_ASAP').css('display','none');
});

$("#adaptation-timeline #2002 .st-r").click(function() {
	$('#adaptation-timeline .st-r').css('fill','#ff4a60');
	$('#adaptation-timeline .st-r').css('stroke','white');
	$('#adaptation-timeline #2002 .st-r').css('fill','white');
	$('#adaptation-timeline #2008_PPCR').css('display','none');
	$('#adaptation-timeline #2009_AF').css('display','none');
	$('#adaptation-timeline #2012_ASAP').css('display','none');
	$('#adaptation-timeline #2002_LDCF_SCCF').css('display','block');
});

$("#adaptation-timeline #2008 .st-r").click(function() {
	$('#adaptation-timeline .st-r').css('fill','#ff4a60');
	$('#adaptation-timeline .st-r').css('stroke','white');
	$('#adaptation-timeline #2008 .st-r').css('fill','white');
	$('#adaptation-timeline #2008_PPCR').css('display','block');
	$('#adaptation-timeline #2009_AF').css('display','none');
	$('#adaptation-timeline #2012_ASAP').css('display','none');
	$('#adaptation-timeline #2002_LDCF_SCCF').css('display','none');
});

$("#adaptation-timeline #2009 .st-r").click(function() {
	$('#adaptation-timeline .st-r').css('fill','#ff4a60');
	$('#adaptation-timeline .st-r').css('stroke','white');
	$('#adaptation-timeline #2009 .st-r').css('fill','white');
	$('#adaptation-timeline #2008_PPCR').css('display','none');
	$('#adaptation-timeline #2009_AF').css('display','block');
	$('#adaptation-timeline #2012_ASAP').css('display','none');
	$('#adaptation-timeline #2002_LDCF_SCCF').css('display','none');
});

$("#adaptation-timeline #2012 .st-r").click(function() {
	$('#adaptation-timeline .st-r').css('fill','#ff4a60');
	$('#adaptation-timeline .st-r').css('stroke','white');
	$('#adaptation-timeline #2012 .st-r').css('fill','white');
	$('#adaptation-timeline #2008_PPCR').css('display','none');
	$('#adaptation-timeline #2009_AF').css('display','none');
	$('#adaptation-timeline #2012_ASAP').css('display','block');
	$('#adaptation-timeline #2002_LDCF_SCCF').css('display','none');
});

//Barre adaptation & mitigation
$( document ).ready(function() {
    $('#sscf-box').css('opacity','0');
    $('#asap-box').css('opacity','0');
    $('#af-box').css('opacity','0');
    $('#ppcr-box').css('opacity','0');
    $('#ldcf-box').css('opacity','0');
    $('#scheletro').css('opacity','1');
});

$("#fundcomp #SSCF").mouseover(function() {
	 $('#sscf-box').css('opacity','1');
	 $('#sscf-box').addClass('width','200px');
});

$("#fundcomp #SSCF").mouseout(function() {
	 $('#sscf-box').css('opacity','0');
});

$("#fundcomp #PPCR").mouseover(function() {
	 $('#ppcr-box').css('opacity','1');
});

$("#fundcomp #PPCR").mouseout(function() {
	 $('#ppcr-box').css('opacity','0');
});

$("#fundcomp #AF").mouseover(function() {
	 $('#af-box').css('opacity','1');
});

$("#fundcomp #AF").mouseout(function() {
	 $('#af-box').css('opacity','0');
});

$("#fundcomp #LDCF").mouseover(function() {
	 $('#ldcf-box').css('opacity','1');
});

$("#fundcomp #LDCF").mouseout(function() {
	 $('#ldcf-box').css('opacity','0');
});

$("#fundcomp #ASAP").mouseover(function() {
	 $('#asap-box').css('opacity','1');
});

$("#fundcomp #ASAP").mouseout(function() {
	 $('#asap-box').css('opacity','0');
});

// Heatmap vulnerabilità + fondi
/*$(document).ready(function() {
	$('.etichetta').css('display','none');
});

$("#bangladesh").mouseover(function() {
	$('#e-bangladesh').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#bangladesh").mouseout(function() {
	$('#e-bangladesh').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#mozambico").mouseover(function() {
	$('#e-mozambico').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#mozambico").mouseout(function() {
	$('#e-mozambico').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#bolivia").mouseover(function() {
	$('#e-bolivia').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#bolivia").mouseout(function() {
	$('#e-bolivia').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#mali").mouseover(function() {
	$('#e-mali').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#mali").mouseout(function() {
	$('#e-mali').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#malawi").mouseover(function() {
	$('#e-malawi').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#malawi").mouseout(function() {
	$('#e-malawi').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#kenya").mouseover(function() {
	$('#e-kenya').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#kenya").mouseout(function() {
	$('#e-kenya').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#congo").mouseover(function() {
	$('#e-congo').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#congo").mouseout(function() {
	$('#e-congo').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#burundi").mouseover(function() {
	$('#e-burundi').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#burundi").mouseout(function() {
	$('#e-burundi').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#gambia").mouseover(function() {
	$('#e-gambia').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#gambia").mouseout(function() {
	$('#e-gambia').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#benin").mouseover(function() {
	$('#e-benin').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#benin").mouseout(function() {
	$('#e-benin').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#jamaica").mouseover(function() {
	$('#e-jamaica').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#jamaica").mouseout(function() {
	$('#e-jamaica').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#gibuti").mouseover(function() {
	$('#e-gibuti').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#gibuti").mouseout(function() {
	$('#e-gibuti').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#samoa").mouseover(function() {
	$('#e-samoa').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#samoa").mouseout(function() {
	$('#e-samoa').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#sudan").mouseover(function() {
	$('#e-sudan').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#sudan").mouseout(function() {
	$('#e-sudan').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#tajikistan").mouseover(function() {
	$('#e-tajikistan').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#tajikistan").mouseout(function() {
	$('#e-tajikistan').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#yemen").mouseover(function() {
	$('#e-yemen').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#yemen").mouseout(function() {
	$('#e-yemen').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#zambia").mouseover(function() {
	$('#e-zambia').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#zambia").mouseout(function() {
	$('#e-zambia').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#afghanistan").mouseover(function() {
	$('#e-afghanistan').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#afghanistan").mouseout(function() {
	$('#e-afghanistan').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#rwanda").mouseover(function() {
	$('#e-rwanda').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#rwanda").mouseout(function() {
	$('#e-rwanda').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#madagascar").mouseover(function() {
	$('#e-madagascar').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#madagascar").mouseout(function() {
	$('#e-madagascar').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#eritrea").mouseover(function() {
	$('#e-eritrea').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#eritrea").mouseout(function() {
	$('#e-eritrea').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#centrafrica").mouseover(function() {
	$('#e-centrafrica').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#centrafrica").mouseout(function() {
	$('#e-centrafrica').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#chad").mouseover(function() {
	$('#e-chad').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#chad").mouseout(function() {
	$('#e-chad').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#guinea").mouseover(function() {
	$('#e-guinea').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#guinea").mouseout(function() {
	$('#e-guinea').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#liberia").mouseover(function() {
	$('#e-liberia').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#liberia").mouseout(function() {
	$('#e-liberia').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#sierra").mouseover(function() {
	$('#e-sierra').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#sierra").mouseout(function() {
	$('#e-sierra').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#solomon").mouseover(function() {
	$('#e-solomon').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#solomon").mouseout(function() {
	$('#e-solomon').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#papua").mouseover(function() {
	$('#e-papua').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#papua").mouseout(function() {
	$('#e-papua').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#mauritania").mouseover(function() {
	$('#e-mauritania').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#mauritania").mouseout(function() {
	$('#e-mauritania').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#nepal").mouseover(function() {
	$('#e-nepal').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#nepal").mouseout(function() {
	$('#e-nepal').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#niger").mouseover(function() {
	$('#e-niger').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#niger").mouseout(function() {
	$('#e-niger').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#cambogia").mouseover(function() {
	$('#e-cambogia').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#cambogia").mouseout(function() {
	$('#e-cambogia').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});

$("#timor").mouseover(function() {
	$('#e-timor').css('display','block');
	$(this).css('fill','rgba(0,0,0,0.5)');
});

$("#timor").mouseout(function() {
	$('#e-timor').css('display','none');
	$(this).css('fill','rgba(0,0,0,0)');
});*/

// Flussi di denaro
$(document).ready(function() {
	$('#ppcr .st9').css('fill','#ff4a60');
	$('#ppcr .st9').css('opacity','0.4');
	$('#ppcr .st8').css('fill','#ff4a60');
	$('#ppcr .st8').css('opacity','1');
});

//SOPRA flussi

$('#e-svezia').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #svezia .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#e-uk').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #uk .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#e-can').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #can .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#e-ger').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #ger .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#e-usa').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #usa .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#e-belgio').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #can .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#e-belgio').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #belgio .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#e-jap').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #jap .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#e-nether').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #nether .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#e-norvegia').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #norvegia .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#e-spagna').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #spagna .st8').css({'fill':'#ff4a60','opacity':'1'});
});

// SOTTO flussi

$('#flussi #e-bangla').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #bangla .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-niger').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #niger .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-cambogia').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #cambogia .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-nepal').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #nepal .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-mozam').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #mozam .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-bolivia').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #bolivia .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-zambia').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #zambia .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-tajiki').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #tajiki .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-samoa').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #samoa .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-yemen').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#yemen .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-jamaica').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #jamaica .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-rwanda').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #rwanda .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-sudan').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #sudan .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-mali').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #mali .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-benin').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #benin .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-tanzania').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #tanzania .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-papua').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #papua .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-djibu').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #djibu .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-malawi').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #malawi .st8').css({'fill':'#ff4a60','opacity':'1'});
});

$('#flussi #e-gambia').click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#flussi #gambia .st8').css({'fill':'#ff4a60','opacity':'1'});
});

// ASSOCIAZIONI

$("#ppcr-imbuto, #ppcr-e").click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#ppcr .st9').css('fill','#ff4a60');
	$('#ppcr .st9').css('opacity','0.4');
	$('#ppcr .st8').css('fill','#ff4a60');
	$('#ppcr .st8').css('opacity','1');
});

$("#ldcf-imbuto, #ldcf-e").click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#ldcf .st9').css('fill','#ff4a60');
	$('#ldcf .st9').css('opacity','0.4');
	$('#ldcf .st8').css('fill','#ff4a60');
	$('#ldcf .st8').css('opacity','1');
});

$("#asap-imbuto, #asap-e").click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#asap .st9').css('fill','#ff4a60');
	$('#asap .st9').css('opacity','0.4');
	$('#asap .st8').css('fill','#ff4a60');
	$('#asap .st8').css('opacity','1');
});

$("#af-imbuto, #af-e").click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#af .st9').css('fill','#ff4a60');
	$('#af .st9').css('opacity','0.4');
	$('#af .st8').css('fill','#ff4a60');
	$('#af .st8').css('opacity','1');
});

$("#sccf-imbuto, #sccf-e").click(function() {
	$('#flussi .st9').css('fill','#4C1925');
	$('#flussi .st9').css('opacity','0.15');
	$('#flussi .st8').css('fill','#4C1925');
	$('#flussi .st8').css('opacity','0.15');
	$('#sccf .st9').css('fill','#ff4a60');
	$('#sccf .st9').css('opacity','0.4');
	$('#sccf .st8').css('fill','#ff4a60');
	$('#sccf .st8').css('opacity','1');
});

// Heatmap 2
/*$(document).ready(function() {
	$('#heatmap .st113').css('display','none');
	$('#heatmap .st115').css('display','none');
});

$('#c-jamaica').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-jamaica').css('display','block');
	$('#c-jamaica .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-jamaica').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-jamaica').css('display','none');
	$('#c-jamaica .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-niger').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-niger').css('display','block');
	$('#c-niger .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-niger').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-niger').css('display','none');
	$('#c-niger .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-mauritania').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-mauritania').css('display','block');
	$('#c-mauritania .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-mauritania').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-mauritania').css('display','none');
	$('#c-mauritania .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-chad').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-chad').css('display','block');
	$('#c-chad .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-chad').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-chad').css('display','none');
	$('#c-chad .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-sudan').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-sudan').css('display','block');
	$('#c-sudan .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-sudan').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-sudan').css('display','none');
	$('#c-sudan .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-congo').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-congo').css('display','block');
	$('#c-congo .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-congo').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-congo').css('display','none');
	$('#c-congo .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-malawi').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-malawi').css('display','block');
	$('#c-malawi .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-malawi').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-malawi').css('display','none');
	$('#c-malawi .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-zambia').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-zambia').css('display','block');
	$('#c-zambia .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-zambia').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-zambia').css('display','none');
	$('#c-zambia .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-mozambico').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-mozambico').css('display','block');
	$('#c-mozambico .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-mozambico').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-mozambico').css('display','none');
	$('#c-mozambico .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-eritrea').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-eritrea').css('display','block');
	$('#c-eritrea .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-eritrea').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-eritrea').css('display','none');
	$('#c-eritrea .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-mali').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-mali').css('display','block');
	$('#c-mali .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-mali').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-mali').css('display','none');
	$('#c-mali .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-guineabissau').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-guinea').css('display','block');
	$('#c-guineabissau .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-guineabissau').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-guinea').css('display','none');
	$('#c-guineabissau .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-gambia').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-gambia').css('display','block');
	$('#c-gambia .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-gambia').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-gambia').css('display','none');
	$('#c-gambia .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-guineabissau').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-guineabissau').css('display','block');
	$('#c-guineabissau .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-guineabissau').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-guineabissau').css('display','none');
	$('#c-guineabissau .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-sierraleone').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-sierraleone').css('display','block');
	$('#c-sierraleone .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-sierraleone').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-sierraleone').css('display','none');
	$('#c-sierraleone .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-liberia').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-liberia').css('display','block');
	$('#c-liberia .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-liberia').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-liberia').css('display','none');
	$('#c-liberia .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-madagascar').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-madagascar').css('display','block');
	$('#c-madagascar .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-madagascar').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-madagascar').css('display','none');
	$('#c-madagascar .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-timor').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-timor').css('display','block');
	$('#c-timor .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-timor').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-timor').css('display','none');
	$('#c-timor .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-benin').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-benin').css('display','block');
	$('#c-benin .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-benin').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-benin').css('display','none');
	$('#c-benin .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-yemen').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-yemen').css('display','block');
	$('#c-yemen .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-yemen').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-yemen').css('display','none');
	$('#c-yemen .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-afghanistan').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-afghanistan').css('display','block');
	$('#c-afghanistan .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-afghanistan').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-afghanistan').css('display','none');
	$('#c-afghanistan .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-tajikistan').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-tajikistan').css('display','block');
	$('#c-tajikistan .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-tajikistan').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-tajikistan').css('display','none');
	$('#c-tajikistan .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-nepal').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-nepal').css('display','block');
	$('#c-nepal .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-nepal').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-nepal').css('display','none');
	$('#c-nepal .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-bangladesh').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-bangladesh').css('display','block');
	$('#c-bangladesh .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-bangladesh').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-bangladesh').css('display','none');
	$('#c-bangladesh .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-cambogia').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-cambodia').css('display','block');
	$('#c-cambogia .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-cambogia').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-cambodia').css('display','none');
	$('#c-cambogia .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-gibuti').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-gibuti').css('display','block');
	$('#c-gibuti .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-gibuti').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-gibuti').css('display','none');
	$('#c-gibuti .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-burundi').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-burundi').css('display','block');
	$('#c-burundi .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-burundi').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-burundi').css('display','none');
	$('#c-burundi .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-rwanda').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-rwanda').css('display','block');
	$('#c-rwanda .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-rwanda').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-rwanda').css('display','none');
	$('#c-rwanda .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-bolivia').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-bolivia').css('display','block');
	$('#c-bolivia .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-bolivia').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-bolivia').css('display','none');
	$('#c-bolivia .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-jamaica').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-jamaica').css('display','block');
	$('#c-jamaica .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-jamaica').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-jamaica').css('display','none');
	$('#c-jamaica .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-samoa').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-samoa').css('display','block');
	$('#c-samoa .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-samoa').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-samoa').css('display','none');
	$('#c-samoa .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-papua').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-papua').css('display','block');
	$('#c-papua .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-papua').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-papua').css('display','none');
	$('#c-papua .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-solomon').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-solomon').css('display','block');
	$('#c-solomon .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-solomon').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-solomon').css('display','none');
	$('#c-solomon .st109').css('fill','rgba(0,0,0,0)');
});

//

$('#c-tanzania').mouseover(function() {
	$('#heatmap .st113').css('display','block');
	$('#mln-tanzania').css('display','block');
	$('#c-tanzania .st109').css('fill','rgba(0,0,0,0.4)');
});

$('#c-tanzania').mouseout(function() {
	$('#heatmap .st113').css('display','none');
	$('#mln-tanzania').css('display','none');
	$('#c-tanzania .st109').css('fill','rgba(0,0,0,0)');
});*/

// HEATMAP ROMBI MAPPA VERSIONE 3
$(document).ready(function() {
	$('#heatmap .st19').css('display','none');
	$('#heatmap .st20').css('display','none');
	$('#all').css('border-color','#ff4a60');
});

$('#r-bangladesh').mouseover(function() {
	$('#mln-bangladesh').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-bangladesh').mouseout(function() {
	$('#mln-bangladesh').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-mozambico').mouseover(function() {
	$('#mln-mozambico').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-mozambico').mouseout(function() {
	$('#mln-mozambico').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-zambia').mouseover(function() {
	$('#mln-zambia').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-zambia').mouseout(function() {
	$('#mln-zambia').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-ric #r-niger').mouseover(function() {
	$('#mln-niger').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-ric #r-niger').mouseout(function() {
	$('#mln-niger').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-vuln #r-niger').mouseover(function() {
	$('#mln-niger').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-vuln #r-niger').mouseout(function() {
	$('#mln-niger').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-malawi').mouseover(function() {
	$('#mln-malawi').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-malawi').mouseout(function() {
	$('#mln-malawi').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-tajikistan').mouseover(function() {
	$('#mln-tajikistan').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-tajikistan').mouseout(function() {
	$('#mln-tajikistan').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-nepal').mouseover(function() {
	$('#mln-nepal').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-nepal').mouseout(function() {
	$('#mln-nepal').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-cambogia').mouseover(function() {
	$('#mln-cambodia').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-cambogia').mouseout(function() {
	$('#mln-cambodia').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-madagascar').mouseover(function() {
	$('#mln-madagascar').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-madagascar').mouseout(function() {
	$('#mln-madagascar').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-bolivia').mouseover(function() {
	$('#mln-bolivia').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-bolivia').mouseout(function() {
	$('#mln-bolivia').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-jamaica').mouseover(function() {
	$('#mln-jamaica').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-jamaica').mouseout(function() {
	$('#mln-jamaica').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-samoa').mouseover(function() {
	$('#mln-samoa').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-samoa').mouseout(function() {
	$('#mln-samoa').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-zambia').mouseover(function() {
	$('#mln-zambia').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-zambia').mouseout(function() {
	$('#mln-zambia').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-tanzania').mouseover(function() {
	$('#mln-tanzania').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-tanzania').mouseout(function() {
	$('#mln-tanzania').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-mozambico').mouseover(function() {
	$('#mln-mozambico').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-mozambico').mouseout(function() {
	$('#mln-mozambico').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-gibuti').mouseover(function() {
	$('#mln-gibuti').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-gibuti').mouseout(function() {
	$('#mln-gibuti').css('display','none');
	$('#heatmap .st20').css('display','none');
});

// TOP 20 VULNERABILI

$('#top-vuln #r-sudan').mouseover(function() {
	$('#mln-sudan').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-vuln #r-sudan').mouseout(function() {
	$('#mln-sudan').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-ric #r-sudan').mouseover(function() {
	$('#mln-sudan').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-ric #r-sudan').mouseout(function() {
	$('#mln-sudan').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-timor').mouseover(function() {
	$('#mln-timor').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-timor').mouseout(function() {
	$('#mln-timor').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-solomon').mouseover(function() {
	$('#mln-solomon').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-solomon').mouseout(function() {
	$('#mln-solomon').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-sierra').mouseover(function() {
	$('#mln-sierra').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-sierra').mouseout(function() {
	$('#mln-sierra').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-vuln #r-papua').mouseover(function() {
	$('#mln-papua').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-vuln #r-papua').mouseout(function() {
	$('#mln-papua').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-ric #r-papua').mouseover(function() {
	$('#mln-papua').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-ric #r-papua').mouseout(function() {
	$('#mln-papua').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-ric #r-mali').mouseover(function() {
	$('#mln-mali').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-ric #r-mali').mouseout(function() {
	$('#mln-mali').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-vuln #r-mali').mouseover(function() {
	$('#mln-mali').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-vuln #r-mali').mouseout(function() {
	$('#mln-mali').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-mauritania').mouseover(function() {
	$('#mln-mauritania').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-mauritania').mouseout(function() {
	$('#mln-mauritania').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#madagascar').mouseover(function() {
	$('#mln-madagascar').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#madagascar').mouseout(function() {
	$('#mln-madagascar').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-liberia').mouseover(function() {
	$('#mln-liberia').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-liberia').mouseout(function() {
	$('#mln-liberia').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-vuln #r-guinea').mouseover(function() {
	$('#mln-guinea').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-vuln #r-guinea').mouseout(function() {
	$('#mln-guinea').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-ric #r-guinea').mouseover(function() {
	$('#mln-guinea').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-ric #r-guinea').mouseout(function() {
	$('#mln-guinea').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-vuln #r-gambia').mouseover(function() {
	$('#mln-gambia').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-vuln #r-gambia').mouseout(function() {
	$('#mln-gambia').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-ric #r-gambia').mouseover(function() {
	$('#mln-gambia').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-ric #r-gambia').mouseout(function() {
	$('#mln-gambia').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-eritrea').mouseover(function() {
	$('#mln-eritrea').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-eritrea').mouseout(function() {
	$('#mln-eritrea').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-congo').mouseover(function() {
	$('#mln-congo').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-congo').mouseout(function() {
	$('#mln-congo').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-chad').mouseover(function() {
	$('#mln-chad').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-chad').mouseout(function() {
	$('#mln-chad').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-vuln #r-benin').mouseover(function() {
	$('#mln-benin').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-vuln #r-benin').mouseout(function() {
	$('#mln-benin').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-ric #r-benin').mouseover(function() {
	$('#mln-benin').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-ric #r-benin').mouseout(function() {
	$('#mln-benin').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-burundi').mouseover(function() {
	$('#mln-burundi').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-burundi').mouseout(function() {
	$('#mln-burundi').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#r-afghanistan').mouseover(function() {
	$('#mln-afghanistan').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#r-afghanistan').mouseout(function() {
	$('#mln-afghanistan').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-ric #r-yemen').mouseover(function() {
	$('#mln-yemen').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-ric #r-yemen').mouseout(function() {
	$('#mln-yemen').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-vuln #r-yemen').mouseover(function() {
	$('#mln-yemen').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-vuln #r-yemen').mouseout(function() {
	$('#mln-yemen').css('display','none');
	$('#heatmap .st20').css('display','none');
});


$('#top-vuln #r-rwanda').mouseover(function() {
	$('#mln-ruanda').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-vuln #r-rwanda').mouseout(function() {
	$('#mln-ruanda').css('display','none');
	$('#heatmap .st20').css('display','none');
});

$('#top-ric #r-rwanda').mouseover(function() {
	$('#mln-ruanda').css('display','block');
	$('#heatmap .st20').css('display','block');
});

$('#top-ric #r-rwanda').mouseout(function() {
	$('#mln-ruanda').css('display','none');
	$('#heatmap .st20').css('display','none');
});

// Bottoni
$('#all').click(function() {
	$('#top-vuln').css('opacity','1');
	$('#top-ric').css('opacity','1');
	$('#most-vuln').css('border-color','rgba(0,0,0,.2)');
	$('#20-rec').css('border-color','rgba(0,0,0,.2)');
	$(this).css('border-color','#ff4a60');
});

$('#most-vuln').click(function() {
	$('#top-vuln').css('opacity','1');
	$('#top-ric').css('opacity','0.1');
	$('#all').css('border-color','rgba(0,0,0,.2)');
	$('#20-rec').css('border-color','rgba(0,0,0,.2)');
	$(this).css('border-color','#ff4a60');
});

$('#20-rec').click(function() {
	$('#top-ric').css('opacity','1');
	$('#top-vuln').css('opacity','0.1');
	$('#all').css('border-color','rgba(0,0,0,.2)');
	$('#most-vuln').css('border-color','rgba(0,0,0,.2)');
	$(this).css('border-color','#ff4a60');
});

// PIECHARTS
$(document).ready(function() {
	$('#piecharts #all_piecharts').css('display','block');
	$('#piecharts #multisector').css('display','none');
	$('#piecharts #water').css('display','none');
	$('#piecharts #humanitarian_aid').css('display','none');
	$('#piecharts #agricolture').css('display','none');
	$('#piecharts #civil_society').css('display','none');
	$('#b-all-sector').css('border-color','#272727');
});

$('#b-all-sector').click(function() {
	$('#piecharts #all_piecharts').css('display','block');
	$('#piecharts #multisector').css('display','none');
	$('#piecharts #water').css('display','none');
	$('#piecharts #humanitarian_aid').css('display','none');
	$('#piecharts #agricolture').css('display','none');
	$('#piecharts #civil_society').css('display','none');
	$('#piecharts .btn').css('border-color','rgba(0,0,0,.2)');
	$(this).css('border-color','#272727');
});

$('#b-agricolture').click(function() {
	$('#piecharts #all_piecharts').css('display','none');
	$('#piecharts #multisector').css('display','none');
	$('#piecharts #water').css('display','none');
	$('#piecharts #humanitarian_aid').css('display','none');
	$('#piecharts #agricolture').css('display','block');
	$('#piecharts #civil_society').css('display','none');
	$('#piecharts .btn').css('border-color','rgba(0,0,0,.2)');
	$(this).css('border-color','#e94c62');
});

$('#b-multisector').click(function() {
	$('#piecharts #all_piecharts').css('display','none');
	$('#piecharts #multisector').css('display','block');
	$('#piecharts #water').css('display','none');
	$('#piecharts #humanitarian_aid').css('display','none');
	$('#piecharts #agricolture').css('display','none');
	$('#piecharts #civil_society').css('display','none');
	$('#piecharts .btn').css('border-color','rgba(0,0,0,.2)');
	$(this).css('border-color','#272727');
});

$('#b-water').click(function() {
	$('#piecharts #all_piecharts').css('display','none');
	$('#piecharts #multisector').css('display','none');
	$('#piecharts #water').css('display','block');
	$('#piecharts #humanitarian_aid').css('display','none');
	$('#piecharts #agricolture').css('display','none');
	$('#piecharts #civil_society').css('display','none');
	$('#piecharts .btn').css('border-color','rgba(0,0,0,.2)');
	$(this).css('border-color','#ef8399');
});

$('#b-human').click(function() {
	$('#piecharts #all_piecharts').css('display','none');
	$('#piecharts #multisector').css('display','none');
	$('#piecharts #water').css('display','none');
	$('#piecharts #humanitarian_aid').css('display','block');
	$('#piecharts #agricolture').css('display','none');
	$('#piecharts #civil_society').css('display','none');
	$('#piecharts .btn').css('border-color','rgba(0,0,0,.2)');
	$(this).css('border-color','#771427');
});

$('#b-civil').click(function() {
	$('#piecharts #all_piecharts').css('display','none');
	$('#piecharts #multisector').css('display','none');
	$('#piecharts #water').css('display','none');
	$('#piecharts #humanitarian_aid').css('display','none');
	$('#piecharts #agricolture').css('display','none');
	$('#piecharts #civil_society').css('display','block');
	$('#piecharts .btn').css('border-color','rgba(0,0,0,.2)');
	$(this).css('border-color','#f5b5c3');
});

// MATRICE
/*$(document).ready(function() {
	$('#matrix > g').css('opacity','1');
});*/

$('#aa').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','1');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#ab').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','1');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#ba').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','1');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#bb').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','1');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#ca').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','1');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#cb').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','1');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#cc').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','1');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#da').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','1');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#db').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','1');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#dc').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','1');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#ea').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','1');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#eb').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','1');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#ec').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','1');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#ed').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','1');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#fa').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','1');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#fb').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','1');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#fc').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','1');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#fd').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','1');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#fd').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','1');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#ga').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','1');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#gb').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','1');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#gc').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','1');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#ha').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','1');
	$('#matrix #p-hb').css('opacity','0.2');
});

$('#hb').click(function() {
	$('#matrix #mondointero').css('opacity','0.2');
	$('#matrix #p-aa').css('opacity','0.2');
	$('#matrix #p-ab').css('opacity','0.2');
	$('#matrix #p-ba').css('opacity','0.2');
	$('#matrix #p-bb').css('opacity','0.2');
	$('#matrix #p-ca').css('opacity','0.2');
	$('#matrix #p-cb').css('opacity','0.2');
	$('#matrix #p-cc').css('opacity','0.2');
	$('#matrix #p-da').css('opacity','0.2');
	$('#matrix #p-db').css('opacity','0.2');
	$('#matrix #p-dc').css('opacity','0.2');
	$('#matrix #p-ea').css('opacity','0.2');
	$('#matrix #p-eb').css('opacity','0.2');
	$('#matrix #p-ec').css('opacity','0.2');
	$('#matrix #p-ed').css('opacity','0.2');
	$('#matrix #p-fa').css('opacity','0.2');
	$('#matrix #p-fb').css('opacity','0.2');
	$('#matrix #p-fc').css('opacity','0.2');
	$('#matrix #p-fd').css('opacity','0.2');
	$('#matrix #p-ga').css('opacity','0.2');
	$('#matrix #p-gb').css('opacity','0.2');
	$('#matrix #p-gc').css('opacity','0.2');
	$('#matrix #p-ha').css('opacity','0.2');
	$('#matrix #p-hb').css('opacity','1');
});

$('#dida').click(function() {
	$('#matrix #mondointero').css('opacity','1');
	$('#matrix #p-aa').css('opacity','1');
	$('#matrix #p-ab').css('opacity','1');
	$('#matrix #p-ba').css('opacity','1');
	$('#matrix #p-bb').css('opacity','1');
	$('#matrix #p-ca').css('opacity','1');
	$('#matrix #p-cb').css('opacity','1');
	$('#matrix #p-cc').css('opacity','1');
	$('#matrix #p-da').css('opacity','1');
	$('#matrix #p-db').css('opacity','1');
	$('#matrix #p-dc').css('opacity','1');
	$('#matrix #p-ea').css('opacity','1');
	$('#matrix #p-eb').css('opacity','1');
	$('#matrix #p-ec').css('opacity','1');
	$('#matrix #p-ed').css('opacity','1');
	$('#matrix #p-fa').css('opacity','1');
	$('#matrix #p-fb').css('opacity','1');
	$('#matrix #p-fc').css('opacity','1');
	$('#matrix #p-fd').css('opacity','1');
	$('#matrix #p-ga').css('opacity','1');
	$('#matrix #p-gb').css('opacity','1');
	$('#matrix #p-gc').css('opacity','1');
	$('#matrix #p-ha').css('opacity','1');
	$('#matrix #p-hb').css('opacity','1');
});	