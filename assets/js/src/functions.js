var clipboard = new Clipboard('.copy');

clipboard.on('success', function() {
    // Materialize.toast(message, displayLength, className, completeCallback);
    Materialize.toast('Copied to clipboard!', 4000); // 4000 is the duration of the toast
});
