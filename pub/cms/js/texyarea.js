(function() {

    var initTexyArea = function() {

        /** Tab support */
        $('.texyarea').unbind('keydown');
        $('.texyarea').on('keydown', function(e) {
            if(e.keyCode === 9) {
                var start = this.selectionStart;
                var end = this.selectionEnd;
                $(this).val($(this).val().substring(0, start) + "\t" + $(this).val().substring(end));
                this.selectionStart = this.selectionEnd = start + 1;
                e.preventDefault();
            }
        });

        /** Toolbar buttons with popovers */
        var popovers = $('.texyarea-toolbar a[data-toggle="popover"]');
        popovers.unbind('click');
        popovers.on('click', function() {
            var btn = $(this);
            var snippet = 'snippet-' + btn.data('widget');
            if($('#' + snippet).length === 0) {

                /** Load popover content via ajax */
                $.get(btn.data('url'), function(resp) {
                    btn.popover({
                        content: '<div id="' + snippet + '">' + resp.snippets[snippet] + '</div>',
                        container: 'body',
                        html: true,
                        placement: 'bottom',
                        trigger: 'manual'
                    });
                    btn.popover('show');
                    btn.addClass('active');
                });
            } else {
                btn.popover('toggle');
                if(btn.hasClass('active')) {
                    btn.removeClass('active');
                } else {
                    btn.addClass('active')
                }
            }

            popovers.not(this).popover('destroy');
            popovers.not(this).removeClass('active');
        });

        /** Buttons for Texy syntax */
        $('.texyarea-toolbar a[data-texyarea]').each(function() {
            var texyarea = $('#' + $(this).data('texyarea'));
            $(this).unbind('click');
            $(this).on('click', function() {
                var texy = new Texy(texyarea.get(0));
                var func = $(this).data('function');
                if($(this).data('params')) {
                    texy[func]($(this).data('params'));
                } else {
                    texy[func]();
                }
            });
        });
    };

    $(document).ready(function() {
        initTexyArea();
    });

})();