(function() {

    var toggleElementsByJS = function() {
        $('.if-js-hide').hide();
        $('.if-not-js-hide').show();
    };

    $.nette.ext('reloadUtils', {
        complete: function() {
            toggleElementsByJS();
        }
    });

    $(document).ready(function() {
        toggleElementsByJS();
    });

})();