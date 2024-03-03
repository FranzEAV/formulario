function validarFormulario() {
	var verificar = true;
	var expRegNombres = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
    var expRegApellidos = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
	var expRegCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var expRegContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
	var expRegTelefono = /^\d{9}$/;
	var formulario = document.getElementById("formulario");
	var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos")
	var direccion = document.getElementById("direccion");
	var correo = document.getElementById("correo");
	var contra = document.getElementById("contra");
	var telefono = document.getElementById("telefono");
    var sexoMasculino = document.getElementById("btn-masculino");
    var sexoFemenino = document.getElementById("btn-femenino");
    var sexoOtros = document.getElementById("btn-otros");
    var sexoSeleccionado = sexoMasculino.checked || sexoFemenino.checked || sexoOtros.checked;
    var fechaNacimiento = document.getElementById("edad").value;
	var comentario = document.getElementById("comentario");
	
	
	if (!nombres.value || nombres.value.split(" ").length < 2 || !expRegNombres.exec(nombres.value)) {
        alert("Por favor, escriba sus nombres completos.");
        nombres.focus();
        verificar = false;
        return false;
    }
    else if (!apellidos.value || apellidos.value.split(" ").length < 2|| !expRegApellidos.exec(apellidos.value)) {
        alert("Por favor, escriba sus apellidos completos.");
        apellidos.focus();
        verificar = false;
        return false;
    }
	else if (!direccion.value) {
		alert("Por favor, escriba su direccion.");
		direccion.focus();
		verificar = false;
		return false;
	}
	else if (!correo.value || !expRegCorreo.exec(correo.value)) {
        alert("Por favor, escriba un correo valido.");
        correo.focus();
        verificar = false;
        return false;
    }
    else if (!contra.value || contra.value.length < 8 || contra.value.length > 16 || !expRegContra.exec(contra.value)) {
        alert("Por favor, escriba una contraseña entre 8 y 16 caracteres que contenga al menos una minuscula, una mayuscula y un numero.");
        contra.focus();
        verificar = false;
        return false;
    }
	else if (!telefono.value || !expRegTelefono.exec(telefono.value)) {
        alert("Por favor, escriba un numero de telefono valido con exactamente 9 digitos.");
        telefono.focus();
        verificar = false;
        return false;
    }
    else if (!sexoSeleccionado) {
        alert("Por favor, seleccione su sexo.");
        verificar = false;
        return false;
    }
    else if (!fechaNacimiento) {
        alert("Por favor, seleccione su fecha de nacimiento.");
        verificar = false;
        return false;
    }
    else if (!comentario.value) {
		alert("El campo comentarios es requerido");
		comentario.focus();
		verificar = false;
		return false;
	}
	else if (comentario.value.length > 1000) {
		alert("El campo comentarios no puede tener mas de 1000 caracteres.");
		comentario.focus();
		verificar = false;
		return false;
	}

	if (verificar == true) {
		document.formulario.submit();
	}
}
function limpiarFormulario() {
	document.getElementById("formulario").reset();
}
function calcular() {
	var contadorChar = document.getElementById("contador-char").innerHTML = 1000 - document.formulario.comentario.value.length;
}
window.onload = function () {
	var botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.onclick = limpiarFormulario;
	var botonEnviar = document.getElementById("enviar");
	botonEnviar.onclick = validarFormulario;
}