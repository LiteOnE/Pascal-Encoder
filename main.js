$(() => {
    $('#encode-btn').click(() => {
        var sourceText = $('#source-text').val();
        var encodedText = '';

        var sourceLen = sourceText.length;

        let charSum = 0;
        for (var i in sourceText) {
            let curCharCode = sourceText.charCodeAt(i);
            charSum += curCharCode;
            encodedText += String.fromCharCode(curCharCode ^ ((sourceLen + i + sourceText.charCodeAt(Math.max(0, i - 1))) % 255));
        }

        $('#encoded-text').val(encodedText);
    })
});