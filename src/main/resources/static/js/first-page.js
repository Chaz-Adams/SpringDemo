$(document).ready(function () {
    $('#crudSelect').change(function () {
        var selectedOperation = $(this).val();
        $('#inputFields').empty();
        if (selectedOperation === 'create' || selectedOperation === 'update') {
            $('#inputFields').append('<input type="text" name="firstName" placeholder="First Name"><br>');
            $('#inputFields').append('<input type="text" name="lastName" placeholder="Last Name"><br>');
            $('#inputFields').append('<input type="text" name="address" placeholder="Address"><br>');
            $('#inputFields').append('<input type="text" name="city" placeholder="City"><br>');
        } else if (selectedOperation === 'delete') {
            $('#inputFields').append('<input type="text" name="id" placeholder="Item ID"><br>');
        }
    });

    $('#crudForm').submit(function (event) {
        event.preventDefault();
        var selectedOperation = $('#crudSelect').val();
        var url = '/api/items/' + selectedOperation;
        var requestType = 'POST'; // Default request type is POST

        // Change request type to GET only for the 'read' operation
        if (selectedOperation === 'read') {
            requestType = 'GET';
            url = '/api/items/read'; // Correct URL for read operation
        }

        // Serialize form data manually
        var formData = {};
        $('#crudForm').find('input').each(function () {
            formData[$(this).attr('name')] = $(this).val();
        });

        $.ajax({
            type: requestType,
            url: url,
            contentType: 'application/json', // Set content type to JSON
            data: JSON.stringify(formData), // Convert form data to JSON string
            success: function (data) {
                $('#results').html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#results').html('<p>Error: ' + xhr.responseText + '</p>');
            }
        });
    });
});
