(function() {

    /** Style upload inputs using FileStyle extension */
    var initFilestyle = function() {
        $(':file').each(function() {
            var upload = $(this);
            upload.filestyle({buttonBefore: true, buttonText: upload.data('buttontext'), input: upload.data('input')});
            if(upload.data('maxfiles')) {
                var maxFiles = upload.data('maxfiles');
                $(document).on('change', upload, function() {
                    if(upload[0].files.length > maxFiles) {
                        // TODO sometimes later maybe
                        //Nette.addError(upload, 'abc');
                    }
                });
            }
        });
    };

    $.nette.ext('refreshFilestyle', {
        complete: function(payload) {
            initFilestyle();
        }
    });

    $(document).ready(function() {

        initFilestyle();

    });

})();