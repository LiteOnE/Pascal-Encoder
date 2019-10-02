$(() => {
    $('#encode-btn').click(() => {
        var sourceText = $('#source-text').val();
        var encodedText = '';

        var paramOffset = 1;

        for (var c in $('[type=checkbox]')) {
            if ($('[type=checkbox]')[c].checked)
                paramOffset += c;
        }

        var sourceLen = sourceText.length;

        let charSum = 0;
        for (var i in sourceText) {
            let curCharCode = sourceText.charCodeAt(i);
            charSum += curCharCode;
            encodedText += String.fromCharCode(curCharCode ^ ((sourceLen + charSum + i + sourceText.charCodeAt(Math.max(0, i - 1)) + paramOffset) % (1 << 12)));
        }

        $('#encoded-text').val(encodedText);
    })
});