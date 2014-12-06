(function() {

    var dropzoneSelector = '.files-dropzone';

    var usingDropzone;

    /** Init dropzone */
    var initDropzone = function() {

        $(dropzoneSelector).unbind('dragenter dragleave dragover drop');

        $(dropzoneSelector).on('dragenter', function(e) {
            e.stopPropagation();
            e.preventDefault();
            $(this).addClass('active');
        });

        $(dropzoneSelector).on('dragleave', function(e) {
            e.stopPropagation();
            e.preventDefault();
            $(this).removeClass('active');
        });

        $(dropzoneSelector).on('dragover', function(e) {
            e.stopPropagation();
            e.preventDefault();
        });

        $(dropzoneSelector).on('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();
            usingDropzone = this;
            var fs = '#frm-' + this.parentNode.id + '-uploadForm';
            $(fs + '-files').prop('files', e.originalEvent.dataTransfer.files);
            var control = $(fs + '-files');
            if(!Nette.validateControl(control)) {
                $(fs + '-files').prop('files', []);
                $(this).text(control.parent().find('.help-block').text())
                $(this).removeClass('active');
            } else {
                $(fs).submit();
            }
        });

    };

    $(document).ready(function() {

        initDropzone();

    });

    /** Upload progress */
    $.nette.ext('uploadProgress', {
        init: function() {

            $.ajaxSettings.xhr = function() {
                var xhr = new window.XMLHttpRequest;
                xhr.upload.addEventListener('progress', function(e) {
                    var done = parseInt(e.loaded / e.total * 100);
                    if(usingDropzone) {
                        usingDropzone.innerHTML ='<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="' + done + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + done + '%;">' + done + '%</div></div>';
                    }
                    console.log(done);
                }, false);
                return xhr;
            };

        },
        complete: function() {

            usingDropzone = null;
            initDropzone();

        }
    });

})();