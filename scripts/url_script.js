switch (document.cookie) {
    case "url=rest_petal.html; img=garden":
        document.getElementById("blue_envelope").setAttribute("href",
            "rest/blue_envelope.html");
        document.getElementById("green_envelope").setAttribute("href",
            "rest/green_envelope.html");
        document.getElementById("red_envelope").setAttribute("href",
            "rest/red_envelope.html");
        document.getElementById("orange_envelope").setAttribute("href",
            "rest/orange_envelope.html");
        document.getElementById("gold_envelope").setAttribute("href",
            "rest/gold_envelope.html");
        document.getElementById("pink_envelope").setAttribute("href",
            "rest/pink_envelope.html");
        break;
    case "url=rest_petal.html; img=room":
        document.getElementById("crystal1").setAttribute("href",
            "rest/crystal1.html");
        document.getElementById("crystal2").setAttribute("href",
            "rest/green_envelope.html");
        document.getElementById("crystal3").setAttribute("href",
            "indev.html");
        document.getElementById("crystal4").setAttribute("href",
            "indev.html");
        document.getElementById("crystal5").setAttribute("href",
            "indev.html");
        document.getElementById("crystal6").setAttribute("href",
            "indev.html");
        break;
}