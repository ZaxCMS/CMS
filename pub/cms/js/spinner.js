(function() {

    /** Spinner follows cursor */
    var mouseMove = function(x, y) {
        $('#ajax-loading-cursor').css({top:y+20+'px', left:x+20+'px'});
    };

    /** Init and configure spinner */
    $.nette.ext('spinner', {
        init: function() {
            var spinner = document.createElement('div');
            spinner.id = 'ajax-loading-cursor';
            spinner.style.position = 'absolute';
            spinner.style.fontSize = '200%';
            var spinnerChar = document.createElement('span');
            spinnerChar.className = 'fa fa-spinner fa-spin';
            spinner.appendChild(spinnerChar);
            $(spinner).hide();
            document.body.appendChild(spinner);
        },
        start: function(jqXHR, settings) {
            $('#ajax-loading-cursor').show();
            $(document).on('mousemove', function(e) {
                mouseMove(e.pageX, e.pageY);
            });
        },
        complete: function() {
            $('#ajax-loading-cursor').hide();
            $(document).unbind('mousemove');
        }
    });


})();