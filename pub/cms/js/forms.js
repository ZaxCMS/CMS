(function() {

    /** Bootstrap form errors */
    Nette.addError = function(elem, message) {
        if (elem.focus) {
            elem.focus();
        }
        if (message) {
            $(elem).closest('.form-group').addClass('has-error');
            $(elem).parent().append('<span class="help-block">' + message + '</span>');
            $(elem).on('change, keydown', function() {
                $(elem).closest('.form-group').removeClass('has-error');
                $(elem).parent().find('.help-block').remove();
            });
        }
    };

    /** Autofocus support */
    $.nette.ext('formsAutofocus', {
        success: function(payload) {
            if(payload.focus) {
                $('#' + payload.focus).focus();
            }
        }
    });

})();