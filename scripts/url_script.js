switch (true) {
    case document.cookie.includes("url=rest.html"):
        if(document.cookie.includes("img=garden")) {
            document.getElementById("blue_envelope").setAttribute("href",
                "petal_question.html");
            document.getElementById("green_envelope").setAttribute("href",
                "rest/videos.html");
            document.getElementById("red_envelope").setAttribute("href",
                "rest/red_envelope.html");
            document.getElementById("orange_envelope").setAttribute("href",
                "boomerang_of_love.html");
            document.getElementById("gold_envelope").setAttribute("href",
                "sun_of_gratitude.html");
            document.getElementById("pink_envelope").setAttribute("href",
                "rest/songs.html");
        } else if(document.cookie.includes("img=room")) {
            document.getElementById("crystal1").setAttribute("href",
                "boomerang_question.html");
            document.getElementById("crystal2").setAttribute("href",
                "rest/videos.html");
            document.getElementById("crystal3").setAttribute("href",
                "rest/crystal3.html");
            document.getElementById("crystal4").setAttribute("href",
                "sun_of_gratitude.html");
            document.getElementById("crystal5").setAttribute("href",
                "diary_page.html");
            document.getElementById("crystal6").setAttribute("href",
                "rest/songs.html");
        }
        break;
    case document.cookie.includes("url=friends.html"):
        if(document.cookie.includes("img=garden")) {
            document.getElementById("blue_envelope").setAttribute("href",
                "petal_question.html");
            document.getElementById("green_envelope").setAttribute("href",
                "friends/videos.html");
            document.getElementById("red_envelope").setAttribute("href",
                "friends/red_envelope.html");
            document.getElementById("orange_envelope").setAttribute("href",
                "boomerang_of_love.html");
            document.getElementById("gold_envelope").setAttribute("href",
                "sun_of_gratitude.html");
            document.getElementById("pink_envelope").setAttribute("href",
                "friends/songs.html");
        } else if(document.cookie.includes("img=room")) {
            document.getElementById("crystal1").setAttribute("href",
                "boomerang_question.html");
            document.getElementById("crystal2").setAttribute("href",
                "friends/videos.html");
            document.getElementById("crystal3").setAttribute("href",
                "friends/crystal3.html");
            document.getElementById("crystal4").setAttribute("href",
                "sun_of_gratitude.html");
            document.getElementById("crystal5").setAttribute("href",
                "diary_page.html");
            document.getElementById("crystal6").setAttribute("href",
                "friends/songs.html");
        }
        break;
}