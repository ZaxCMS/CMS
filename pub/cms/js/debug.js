(function() {

    /** Log payload in console */
    $.nette.ext('consoleLog', {
        success: function(payload) {
            console.log('Incoming payload!');
            console.log(payload);
        },
        error: function(jqXHR, status, error) {
            console.log('Ajax failed!');
            console.log(error);
            console.log(jqXHR);
        }
    });

})();