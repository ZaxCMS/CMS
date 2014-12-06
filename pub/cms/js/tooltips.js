(function() {

    var initTooltips = function() {
        //$('[title]').data('placement', 'auto top');
        $('[title]').data('trigger', 'hover');
        $('[title]').data('container', 'body');
        $('[title]').tooltip();
    };

    var destroyTooltips = function() {
        $('.tooltip.fade').remove();
    };

    $(document).ready(function() {

        initTooltips();

        /** Destroy popovers and tooltips on every ajax request */
        $.nette.ext('tooltipDestroyer',{
            start: function() {
                $('.popover').remove();
            },
            success: function(payload) {
                destroyTooltips();
                initTooltips();
            }
        });

        /** Destroy tooltips when clicking "close" button on alert (flash message) */
        $(document).on('close.bs.alert', '.alert', function() {
            destroyTooltips();
        });

    });

})();