var img = new Image();
img.src = '../pictures/room.png';
document.cookie = 'img=room';

function crystalImageReplace(crystals) {
    switch (true) {
        case document.cookie.includes('url=rest.html'):
            crystals.forEach(function(crystal) {
                crystal.setAttribute('src', '../pictures/crystals/green_crystal.png');
            });
            break;
        case document.cookie.includes('url=friends.html'):
            crystals.forEach(function(crystal) {
                crystal.setAttribute('src', '../pictures/crystals/yellow_crystal.png');
            });
            document.getElementById('crystal1').style.top = '83%';
            document.getElementById('crystal2').style.top = '57%';
            document.getElementById('crystal4').style.top = '46%';
            document.getElementById('crystal5').style.top = '69%';
            break;
        case document.cookie.includes('url=school.html'):
            crystals.forEach(function(crystal) {
                crystal.setAttribute('src', '../pictures/crystals/blue_crystal.png');
                document.getElementById('crystal1').style.top = '80%';
                document.getElementById('crystal2').style.top = '53%';
                document.getElementById('crystal4').style.top = '38%';
                document.getElementById('crystal5').style.top = '64%';
                document.getElementById('crystal6').style.top = '80%';
            });
            break;
        case document.cookie.includes('url=spirit_growth.html'):
            crystals.forEach(function(crystal) {
                crystal.setAttribute('src', '../pictures/crystals/violet_crystal.png');
                document.getElementById('crystal1').style.top = '83%';
                document.getElementById('crystal2').style.top = '57%';
                document.getElementById('crystal4').style.top = '46%';
                document.getElementById('crystal5').style.top = '69%';
                document.getElementById('crystal6').style.top = '85%';
            });
            break;
        case document.cookie.includes('url=health.html'):
            crystals.forEach(function(crystal) {
                crystal.setAttribute('src', '../pictures/crystals/red_crystal.png');
                document.getElementById('crystal1').style.top = '85%';
                document.getElementById('crystal2').style.top = '58%';
                document.getElementById('crystal3').style.top = '83%';
                document.getElementById('crystal4').style.top = '48%';
                document.getElementById('crystal5').style.top = '70%';
            });
            break;
        case document.cookie.includes('url=hobbies.html'):
            crystals.forEach(function(crystal) {
                crystal.setAttribute('src', '../pictures/crystals/orange_crystal.png');
                document.getElementById('crystal1').style.top = '85%';
                document.getElementById('crystal2').style.top = '57%';
                document.getElementById('crystal3').style.top = '83%';
                document.getElementById('crystal4').style.top = '45%';
                document.getElementById('crystal5').style.top = '69%';
            });
            break;
        case document.cookie.includes('url=self_improvement.html'):
            crystals.forEach(function(crystal) {
                crystal.setAttribute('src', '../pictures/crystals/gold_crystal.png');
                document.getElementById('crystal1').style.top = '82%';
                document.getElementById('crystal2').style.top = '55%';
                document.getElementById('crystal4').style.top = '42%';
            });
            break;
    }
}

img.onload = function() {
    var crystals = document.querySelectorAll('.crystal-img');
    var envelopes = document.querySelectorAll('.crystal-img');
    var container = document.getElementById('container');
    crystalImageReplace(crystals);
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
        var envelopeSizeRatio = 0.04;
        var envelopeWidth = container.offsetWidth * envelopeSizeRatio;

        envelopes.forEach(function(envelope) {
            envelope.style.width = envelopeWidth + 'px';
        });
    }

    adjustContainerSize();

    window.addEventListener('resize', adjustContainerSize);
};