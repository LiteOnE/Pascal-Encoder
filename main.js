$(() => {
    $('#encode-btn').click(() => {
        var sourceText = $('#source-text').val();
        var encodedText = '';

        var sourceLen = sourceText.length;

        for (var c in sourceText) {
            encodedText = c ^ sourceLen;
        }
    })
});