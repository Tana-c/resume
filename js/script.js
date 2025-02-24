document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(function(bar) {
        let width = 0;
        const targetWidth = bar.style.width;
        bar.style.width = 0;

        const interval = setInterval(function() {
            if (width >= parseInt(targetWidth)) {
                clearInterval(interval);
            } else {
                width++;
                bar.style.width = width + '%';
            }
        }, 10);
    });
});
