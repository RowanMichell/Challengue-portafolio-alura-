

listaCampos = document.querySelectorAll('.formcontato__input');

function valida(){
   // Validando el campo nombre  
    if (listaCampos[0].value.length > 50 ){
        alert('Solo se permiten hasta 50 caracteres en el campo nombre')
    }
   //Validando el campo asunto
   if (listaCampos[2].value.length > 50 ){
    alert('Solo se permiten hasta 50 caracteres en el campo nombre')
    }

    // validando mensaje
    if(document.querySelector('formcontato__textarea').value.length > 300){
        alert('hasta 300 caracteres en el campo mensaje')
    }
}


document.querySelector('.formcontato__botao').onclick = valida;