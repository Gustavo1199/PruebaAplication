$(document).ready(function () {

    document.getElementById("btn-crear").addEventListener("click", function (event) {
        event.preventDefault();
        Agregar();
    });

});
function Agregar() {
    var nombre = $('#tbx-nombre').val();
    var apellido = $('#tbx-apellido').val();
    var cedula = $('#tbx-cedula').val();
    var NSS = $('#tbx-NSS').val();
    var SEXO = $('#tbx-SEXO').val();
    var nacimiento = $('#tbx-nacimiento').val();
    var plan = $('#tbx-plan').val();
    var estatus = $('#tbx-estatus').val();
    var monto = $('#tbx-monto').val();

    var Afiliado = {
        NOMBRE : nombre,
        APELLIDO: apellido,
        CEDULA: cedula,
        NUMERO_SEGURIDAD_SOCIAL: NSS,
        SEXO: SEXO,
        FECHA_NACIMIENTO: nacimiento,
        ID_PLAN: plan,
        ID_ESTATUS: estatus,
        MONTO_CONSUMIDO: monto,
        
    }

    $.post("../api/afiliado/Agregar", Afiliado, function (data) {
        if (data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El Afiliado se a agregado Exitosamente',
                showConfirmButton: false,
                timer: 1500
            })

            window.open("../Afiliado/buscar")
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha ocurrido un error',
            })
        }
    });
}