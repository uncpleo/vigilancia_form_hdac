
var a_padres = document.getElementById('apoPadres');
var a_hermanos = document.getElementById('apoHermanos');
var a_pareja = document.getElementById('apoPareja');
var a_abandono = document.getElementById('apoAbandono');
var a_otros = document.getElementById('apoOtros');
var a_otros_text = document.getElementById('apoOtrosEs');

a_otros_text.disabled = false;

function updateStatus() {
    if (a_padres.cheked=true){
        a_otros_text.disabled = true;
    } 
    else if (a_hermanos.cheked=true){
        a_otros_text.disabled = true;
    } 
    else if (a_pareja.cheked=true){
        a_otros_text.disabled = true;
    } 
    else if (a_abandono.cheked=true){
        a_otros_text.disabled = true;
    } 
    else if (a_otros.cheked=true){
        a_otros_text.disabled = false;
    };
}

a_padres.addEventListener('change', updateStatus)
a_hermanos.addEventListener('change', updateStatus)
a_pareja.addEventListener('change', updateStatus)
a_abandono.addEventListener('change', updateStatus)
a_padres.addEventListener('change', updateStatus)
a_otros.addEventListener('change', updateStatus)
a_otros_text.addEventListener('change', updateStatus)

