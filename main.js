$(() => {
    $('#encode-btn').click(() => {
        var sourceText = $('#source-text').val();
        var encodedText = '';

        var sourceLen = sourceText.length;

        for (var c of sourceText) {
            encodedText += c ^ sourceLen;
        }

        $('encoded-text').val(encodedText);
    })
});