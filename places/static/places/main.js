$(document).ready(function () {
    $('#estado').change(function () {
        var estadoId = $(this).val();
        $('#municipio').empty();

        if (estadoId) {
            $.ajax({
                url: 'places/cargar-municipios/',
                data: { 'estado_id': estadoId },
                success: function (data) {
                    $('#municipio').append('<option value="">--- Selecciona ---</option>');
                    data.forEach(function (municipio) {
                        $('#municipio').append('<option value="' + municipio.id + '">' + municipio.nombre + '</option>');
                    });
                }
            });
        } else {
            $('#municipio').append('<option value="">--- Selecciona un estado primero ---</option>');
        }
    });
});

