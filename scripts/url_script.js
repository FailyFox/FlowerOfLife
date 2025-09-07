switch (document.cookie) {
    case "img=garden; url=rest_petal.html":
        document.getElementById("blue_envelope").setAttribute("href",
            "../garden/rest/blue_envelope.html");
        document.getElementById("green_envelope").setAttribute("href",
            "../garden/rest/green_envelope.html");
        document.getElementById("red_envelope").setAttribute("href",
            "../garden/rest/red_envelope.html");
        document.getElementById("orange_envelope").setAttribute("href",
            "../garden/rest/orange_envelope.html");
        document.getElementById("gold_envelope").setAttribute("href",
            "../garden/rest/gold_envelope.html");
        document.getElementById("pink_envelope").setAttribute("href",
            "../garden/rest/pink_envelope.html");
        break;
    case "img=room; url=rest_petal.html":
        document.getElementById("crystal1").setAttribute("href",
            "../garden/rest/crystal1.html");
        document.getElementById("crystal2").setAttribute("href",
            "../indev.html");
        document.getElementById("crystal3").setAttribute("href",
            "../indev.html");
        document.getElementById("crystal4").setAttribute("href",
            "../indev.html");
        document.getElementById("crystal5").setAttribute("href",
            "../indev.html");
        document.getElementById("crystal6").setAttribute("href",
            "../indev.html");
        break;
}