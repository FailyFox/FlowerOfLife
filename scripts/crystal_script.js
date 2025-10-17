let question = "What could it be? Share all your ideas about that. And then have a look at the definition in your book - ";
switch (true) {
    case document.cookie.includes("url=rest.html"):
        document.getElementById("body").style.backgroundColor = "#E3F6CB";
        document.getElementById("img").style.filter = "drop-shadow(0 0 100px #A3D771)";
        if (document.getElementById("petal") && document.getElementById("question")) {
            document.getElementById("petal").innerText = "What is rest?";
            document.getElementById("question").innerText = question + "page 35";
        }
        if (document.getElementById("diary")) {
            document.getElementById("diary").innerText = "page 39";
        }
        if (document.cookie.includes("img=garden") && document.getElementById("sun")) {
            document.getElementById("sun").innerHTML = "page 40";
        }
        break;
    case document.cookie.includes("url=friends.html"):
        document.getElementById("body").style.backgroundColor = "#DBEEFB";
        document.getElementById("img").style.filter = "drop-shadow(0 0 100px #EBC732)";
        if (document.getElementById("petal") && document.getElementById("question")) {
            document.getElementById("petal").innerText = "Who is a friend?";
            document.getElementById("question").innerText = "What is a friendship?" +
            "Share all your ideas about that. And then have a look at the definition in your book - page 19";
        }
        break;
    case document.cookie.includes("url=school.html"):
        document.getElementById("body").style.backgroundColor = "#C1D6F9";
        document.getElementById("img").style.filter = "drop-shadow(0 0 100px #7BA4EB)";
        if (document.getElementById("petal") && document.getElementById("question")) {
            document.getElementById("petal").innerText = "What is school?";
            document.getElementById("question").innerText = question + "page 45";
        }
        break;
    case document.cookie.includes("url=spirit_growth.html"):
        document.getElementById("body").style.backgroundColor = "#F4D7FF";
        document.getElementById("img").style.filter = "drop-shadow(0 0 100px #B358BA)";
        if (document.getElementById("petal") && document.getElementById("question")) {
            document.getElementById("petal").innerText = "What is spirit growth?";
            document.getElementById("question").innerText = "page 49-50";
            document.getElementById("petal").style.fontSize = "35px";
            document.getElementById("question").style.fontSize = "25px";
        }
        break;
    case document.cookie.includes("url=health.html"):
        document.getElementById("body").style.backgroundColor = "#CCDFBE";
        document.getElementById("img").style.filter = "drop-shadow(0 0 100px #FB5634)";
        if (document.getElementById("petal") && document.getElementById("question")) {
            document.getElementById("petal").innerText = "What is health?";
            document.getElementById("question").innerText = question + "page 31";
        }
        break;
    case document.cookie.includes("url=hobbies.html"):
        document.getElementById("body").style.backgroundColor = "#FFF2DD";
        document.getElementById("img").style.filter = "drop-shadow(0 0 100px #FFAB2F)";
        if (document.getElementById("petal") && document.getElementById("question")) {
            document.getElementById("petal").innerText = "What is hobbie?";
            document.getElementById("question").innerText = question + "page";
        }
        break;
    case document.cookie.includes("url=self_improvement.html"):
        document.getElementById("body").style.backgroundColor = "#FFFBDF";
        document.getElementById("img").style.filter = "drop-shadow(0 0 100px #FFC95F)";
        if (document.getElementById("petal") && document.getElementById("question")) {
            document.getElementById("petal").innerText = "What is self improvement?";
            document.getElementById("question").innerText = question + "page";
            document.getElementById("petal").style.fontSize = "40px";
            document.getElementById("question").style.fontSize = "25px";
        }
        break;
    case document.cookie.includes("url=family.html"):
        document.getElementById("body").style.backgroundColor = "#BCDAF6";
        document.getElementById("img").style.filter = "drop-shadow(0 0 100px #FE6CCE)";
        if (document.getElementById("petal") && document.getElementById("question")) {
            document.getElementById("petal").innerText = "What is family?";
            document.getElementById("question").innerText = question + "page 13";
        }
        break;
}