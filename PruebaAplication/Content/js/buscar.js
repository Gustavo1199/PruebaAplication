
$(document).ready(function () {
 
    ConsultarTodos();
    document.getElementById("btn-buscar").addEventListener("click", function (event) {
        event.preventDefault();
        ConsultarMasiva();
    })
});


function Inactivar(Id) {

    
    $.post("../api/afiliado/Inactivar/" + Id, function (data) {
        if (data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El Afiliado se a inactivado Exitosamente',
                showConfirmButton: true,
                timer: 150000
            })
            location.reload();
            //window.open("../../Afiliado/buscar");
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha ocurrido un error',
                
            })
        }
    });
}


function RestarMonto(Id,monto) {


    $.post("../api/afiliado/RestarMonto/" + Id + "/" + monto, function (data) {
        if (data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El Afiliado se a Sumado el monto Exitosamente',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha ocurrido un error',

            })
        }
    });
}

function Editar(Afiliado) {

    console.log(Afiliado);
    $.post("../api/afiliado/Editar", Afiliado, function (data) {
        if (data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El Afiliado se a Actualizado Exitosamente',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha ocurrido un error',
            })
        }
    });
}

function Agregar(Afiliado) {

    $.post("../api/afiliado/Agregar", Afiliado, function (data) {
        if (data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El Afiliado se a agregado Exitosamente',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha ocurrido un error',
            })
        }
    });
}

function ConsultarTodos() {

    $.get("../api/afiliado/buscartodos", function (data) {
        for (var i = 0; data.length; i++) {
            AgregarElemento(data[i]);
        }
    });
}

function AgregarElemento(data) {
    var tabla = document.getElementById("tabla-afiliados");

    var Tr = document.createElement("tr");

    var TdID = document.createElement("td");
    TdID.innerText = data.ID.toString();

    var TdNOMBRE = document.createElement("td");
    TdNOMBRE.innerText = data.NOMBRE.toString();

    var TdAPELLIDO = document.createElement("td");
    TdAPELLIDO.innerText = data.APELLIDO.toString();

    var TdCEDULA = document.createElement("td");
    TdCEDULA.innerText = data.CEDULA.toString();

    var TdSEXO = document.createElement("td");
    TdSEXO.innerText = data.SEXO.toString();

    var TdNUMERO_SEGURIDAD_SOCIAL = document.createElement("td");
    TdNUMERO_SEGURIDAD_SOCIAL.innerText = data.NUMERO_SEGURIDAD_SOCIAL.toString();

    var TdFECHA_NACIMIENTO = document.createElement("td");
    TdFECHA_NACIMIENTO.innerText = data.FECHA_NACIMIENTO.toString();

    var TdFECHA_REGISTRO = document.createElement("td");
    TdFECHA_REGISTRO.innerText = data.FECHA_REGISTRO.toString();

    var TdID_PLAN = document.createElement("td");
    TdID_PLAN.innerText = data.ID_PLAN.toString();

    var TdID_ESTATUS = document.createElement("td");
    TdID_ESTATUS.innerText = data.ID_ESTATUS.toString();

    var TdMONTO_CONSUMIDO = document.createElement("td");
    TdMONTO_CONSUMIDO.innerText = data.MONTO_CONSUMIDO.toString();

    var TdAcciones = document.createElement("td");

    var BtnEditar = document.createElement("button");
    BtnEditar.innerText = "Editar";
    BtnEditar.setAttribute("class", "btn btn-success");
    BtnEditar.addEventListener("click", function () {
        Editarllenar(data);
    });

    var BtnInactivar = document.createElement("button");
    BtnInactivar.innerText = "Inactivar";
    BtnInactivar.setAttribute("class", "btn btn-danger float");
    BtnInactivar.addEventListener("click", function () {
        Inactivar(data.ID);
    });
    tabla.appendChild(Tr);
    Tr.appendChild(TdID);
    Tr.appendChild(TdNOMBRE);
    Tr.appendChild(TdAPELLIDO);
    Tr.appendChild(TdCEDULA);
    Tr.appendChild(TdSEXO);
    Tr.appendChild(TdNUMERO_SEGURIDAD_SOCIAL);
    Tr.appendChild(TdFECHA_NACIMIENTO);
    Tr.appendChild(TdFECHA_REGISTRO);
    Tr.appendChild(TdID_PLAN);
    Tr.appendChild(TdID_ESTATUS);
    Tr.appendChild(TdMONTO_CONSUMIDO);
    Tr.appendChild(TdAcciones);
    TdAcciones.appendChild(BtnEditar);
    TdAcciones.appendChild(BtnInactivar);

}

function Editarllenar(afiliado) {
    //$.get("../Afiliado/Editar", afiliado, function (data) {
        
    //});
    window.open('../Afiliado/Editar/'+ afiliado.ID)
}






function ConsultarMasiva() {
    var nombre = $('#nombre-tbx').val();
    var apellido = $('#apellido-tbx').val();
    var cedula = $('#cedula-tbx').val();
    $.get("../api/afiliado/ConsultaMasiva/" +nombre + "/"+apellido +"/"+ cedula, function (data) {
        for (var i = 0; data.length; i++) {
            AgregarElementoConsultaMasiva(data[i]);
        }
    });
}
function RemoverRegistros() {
    var tabla = document.getElementById("tabla-consulta-masiva");
    
    for (var i = 0; i < tabla.children.length; i++) {
        if (tabla.children[i].getAttribute("id") != "tr-cabecera") {
            tabla.children[i].remove();
        }
    }
}

function AgregarElementoConsultaMasiva(data) {
    var tabla = document.getElementById("tabla-consulta-masiva");

    var Tr = document.createElement("tr");

    var TdID = document.createElement("td");
    TdID.innerText = data.ID.toString();

    var TdNOMBRE = document.createElement("td");
    TdNOMBRE.innerText = data.NOMBRE.toString();

    var TdAPELLIDO = document.createElement("td");
    TdAPELLIDO.innerText = data.APELLIDO.toString();

    var TdCEDULA = document.createElement("td");
    TdCEDULA.innerText = data.CEDULA.toString();

    var TdSEXO = document.createElement("td");
    TdSEXO.innerText = data.SEXO.toString();

    var TdNUMERO_SEGURIDAD_SOCIAL = document.createElement("td");
    TdNUMERO_SEGURIDAD_SOCIAL.innerText = data.NUMERO_SEGURIDAD_SOCIAL.toString();

    var TdFECHA_NACIMIENTO = document.createElement("td");
    TdFECHA_NACIMIENTO.innerText = data.FECHA_NACIMIENTO.toString();

    var TdFECHA_REGISTRO = document.createElement("td");
    TdFECHA_REGISTRO.innerText = data.FECHA_REGISTRO.toString();


    var TdID_ESTATUS = document.createElement("td");
    TdID_ESTATUS.innerText = data.ID_ESTATUS.toString();

    var TdMONTO_CONSUMIDO = document.createElement("td");
    TdMONTO_CONSUMIDO.innerText = data.MONTO_CONSUMIDO.toString();

    var TdMONTO_COBERTURA = document.createElement("td");
    TdMONTO_COBERTURA.innerText = data.MONTO_COBERTURA.toString();

    var TdMONTO_RESTANTE = document.createElement("td");
    TdMONTO_RESTANTE.innerText = data.MONTO_RESTANTE.toString();

    var TdNOMBRE_PLAN = document.createElement("td");
    TdNOMBRE_PLAN.innerText = data.NOMBRE_PLAN.toString();

    
    tabla.appendChild(Tr);
    Tr.appendChild(TdID);
    Tr.appendChild(TdNOMBRE);
    Tr.appendChild(TdAPELLIDO);
    Tr.appendChild(TdCEDULA);
    Tr.appendChild(TdSEXO);
    Tr.appendChild(TdNUMERO_SEGURIDAD_SOCIAL);
    Tr.appendChild(TdFECHA_NACIMIENTO);
    Tr.appendChild(TdFECHA_REGISTRO);
    Tr.appendChild(TdID_ESTATUS);
    Tr.appendChild(TdMONTO_CONSUMIDO);
    Tr.appendChild(TdMONTO_COBERTURA);
    Tr.appendChild(TdMONTO_RESTANTE);
    Tr.appendChild(TdNOMBRE_PLAN);

}


function ShowModal() {
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') 
        var modal = $(this)
        modal.find('.modal-title').text('Reclamar monto ' + recipient)
        modal.find('.modal-body input').val(recipient)
    })
}

