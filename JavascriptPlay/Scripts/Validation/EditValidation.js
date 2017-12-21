$(function () {
    $("#editForm").validate({
        rules: {
            name: { required: true }
        },
        messages: {
            name: { required: "Name is required" }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });    
});


//$.validator.setDefaults({
//    highlight: function (element) {
//        $(element).closest('.form-group').addClass('has-error');
//    },
//    unhighlight: function (element) {
//        $(element).closest('.form-group').removeClass('has-error');
//    },
//    errorElement: 'span',
//    errorClass: 'help-block',
//    errorPlacement: function (error, element) {
//        if (element.parent('.input-group').length) {
//            error.insertAfter(element.parent());
//        } else {
//            error.insertAfter(element);
//        }
//    }
//});