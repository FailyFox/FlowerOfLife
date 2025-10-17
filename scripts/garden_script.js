var img = new Image();
img.src = '../pictures/garden.png';
document.cookie = "img=garden";

img.onload = function() {
    var envelopes = document.querySelectorAll('.envelope-img');
    var container = document.getElementById('container');
    container.style.backgroundImage = 'url(' + img.src + ')';
    container.style.width = img.width + 'px';
    container.style.height = img.height + 'px';

    function adjustContainerSize() {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        var aspectRatio = img.width / img.height;

        if (windowWidth / windowHeight > aspectRatio) {
            container.style.width = windowHeight * aspectRatio + 'px';
            container.style.height = windowHeight + 'px';
        } else {
            container.style.width = windowWidth + 'px';
            container.style.height = windowWidth / aspectRatio + 'px';
        }
        
        resizeEnvelopes();
    }

    function resizeEnvelopes() {
        var envelopeSizeRatio = 0.03;
        var envelopeWidth = container.offsetWidth * envelopeSizeRatio;

        envelopes.forEach(function(envelope) {
            envelope.style.width = envelopeWidth + 'px';
        });
    }

    adjustContainerSize();

    window.addEventListener('resize', adjustContainerSize);
};