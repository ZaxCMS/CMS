(function() {

    var initJqueryUI = function() {

        $('.jqueryui_autocomplete').each(function() {
            var element = $(this);
            var hints = element.data('autocomplete');
            $(this).bind('keydown', function(e) {
                if(e.keyCode === $.ui.keyCode.TAB && element.autocomplete('instance').menu.active) {
                    e.preventDefault();
                }
            })
                .autocomplete({
                    minLength: 0,
                    source: function( request, response ) {
                        // delegate back to autocomplete, but extract the last term

                        response(hints);
                    }
                }
            )});

        $('.jqueryui_multiautocomplete').each(function() {
            var element = $(this);
            var hints = element.data('autocomplete');
            $(this).bind('keydown', function(e) {
                if(e.keyCode === $.ui.keyCode.TAB && element.autocomplete('instance').menu.active) {
                    e.preventDefault();
                }
            })
                .autocomplete({
                    minLength: 0,
                    source: function( request, response ) {
                        // delegate back to autocomplete, but extract the last term

                        response($.ui.autocomplete.filter(
                            hints, request.term.split( /,\s*/ ).pop() ) );
                    },
                    focus: function() {
                        // prevent value inserted on focus
                        return false;
                    },
                    select: function( event, ui ) {
                        var terms = this.value.split( /,\s*/ );
                        // remove the current input
                        terms.pop();
                        // add the selected item
                        terms.push( ui.item.value );
                        // add placeholder to get the comma-and-space at the end
                        terms.push( "" );
                        this.value = terms.join( ", " );
                        return false;
                    }
                }
            )});
    };

    $.nette.ext('refreshJqueryUI', {
        complete: function(payload) {
            initJqueryUI();
        }
    });

    $(document).ready(function() {

        initJqueryUI();

    });

})();