(function () {
    $().ready(function() {
        $('#submit').prop('disabled', true);
        
        $('#addressSearchForm').validate({
            rules: {
                data: {
                    required: true
                },
                accountNo: {
                    required: true,
                    minlength: 8,
                    maxlength: 8
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                data: 'Please enter an address.',
                accountNo: {
                    required: 'Please enter your Council Tax account number.',
                    minlength: 'Your account number must be at least 8 characters in length.'
                },
                email: {
                    required: 'Please enter the email address you would like to use.'
                }
            }
        });
    });
})();