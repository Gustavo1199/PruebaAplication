$(document).ready(function () {

    document.getElementById("btn-editar").addEventListener("click", function (event) {
        event.preventDefault();
        Editar();
    });

});
function Editar() {
    var id = $('#tbx-id').val();
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
        ID : id,
        NOMBRE: nombre,
        APELLIDO: apellido,
        CEDULA: cedula,
        NUMERO_SEGURIDAD_SOCIAL: NSS,
        SEXO: SEXO,
        FECHA_NACIMIENTO: nacimiento,
        ID_PLAN: plan,
        ID_ESTATUS: estatus,
        MONTO_CONSUMIDO: monto,

    }

    $.post("../../api/afiliado/Editar", Afiliado, function (data) {
        if (data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El Afiliado se a agregado Exitosamente',
                showConfirmButton: false,
                timer: 1500
            })

            window.open("../../Afiliado/buscar")
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha ocurrido un error',
            })
        }
    });
}