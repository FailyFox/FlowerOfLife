switch (true) {
    case document.cookie.includes("url=rest.html"):
        document.getElementById("body").style.backgroundColor = "#E3F6CB";
        document.getElementById("img").style.filter = "drop-shadow(0 0 100px #A3D771)";
        if (document.getElementById("petal") && document.getElementById("question")) {
            document.getElementById("petal").innerText = "What is rest?";
            document.getElementById("question").innerText = "What could it be?" +
            "Share all your ideas about that. And then have a look at the definition in your book - page 35";
        }
        if (document.getElementById("diary")) {
            document.getElementById("diary").innerText = "page 39";
        }
        if (document.cookie.includes("img=garden") && document.getElementById("text")) {
            document.getElementById("text").innerHTML = "page 40";
        }
        break;
    case document.cookie.includes("url=friends.html"):
        document.getElementById("body").style.backgroundColor = "#DBEEFB";
        document.getElementById("img").style.filter = "drop-shadow(0 0 100px #EBC732)";
        if (document.getElementById("petal") && document.getElementById("question")) {
            document.getElementById("petal").innerText = "Who is a Friend?";
            document.getElementById("question").innerText = "What is a friendship?" +
            "Share all your ideas about that. And then have a look at the definition in your book - page 21";
        }
        if (document.getElementById("diary")) {
            document.getElementById("diary").innerText = "page";
        }
        if (document.cookie.includes("img=garden") && document.getElementById("text")) {
            document.getElementById("sun").innerHTML = "page";
        }
        break;
}