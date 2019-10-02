$(() => {
    $('#encode-btn').click(() => {
        var sourceText = $('#source-text').val();
        var encodedText = '';

        var sourceLen = sourceText.length;

        for (var i in sourceText) {
            encodedText += String.charCodeAt(sourceText.charCodeAt(i) ^ (sourceLen + i % 255));
        }

        $('#encoded-text').val(encodedText);
    })
});