$(() => {
    $('#encode-btn').click(() => {
        var sourceText = $('#source-text').val();
        var encodedText = '';

        var sourceLen = sourceText.length;

        for (var i in sourceText) {
            encodedText += String.fromCharCode(sourceText.charCodeAt(i) ^ ((sourceLen + i + sourceText.charCodeAt(Math.max(0, i - 1))) % 255));
        }

        $('#encoded-text').val(encodedText);
    })
});