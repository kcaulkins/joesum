var ipsum = [
    "Every 10 years the cells in your body actually completely change. ",
    "Jaimie could you get that article up? ",
    "<i>Looks over at screen</i> ",
    "<i>Brings the mic closer</i> ",
    "Look at that ... Yeah, that chimp must be what? 400 pounds? Jesus those things will tear you to shreds. ",
    "We put a monetary on actual life itself. ",
    "Did see that guy accidentally hit that moose with his car? ",
    "It's just such a strange, strange concept. ",
    "Isn't it weird how your mind works in a totally different way under the influence of psychadelics... seeing patterns change and form and colours drip and merge and you know it's not real yet that is what you are actually seeing. Did you know that the pineal gland naturally produces DMT, your own body produces one of the strongest psychadelics known to man.  How weird is that? ",
    "Jamie pull up that gif of Tortoises fucking! ",
    "Have you ever tasted Elk heart? so good for you, one of the leanest meats. I've got some i'll give you it on the way out. ",
    "Yeah its so relaxing, I do it two or three times a week. ",
    "Well no because... ",
    "You should have your own podcast. ",
    "How dare you? ",
    "Do you know why weed is REALLY illegal? ",
]

function getSentence() {
    return ipsum[Math.floor(Math.random() * ipsum.length)];
}

function getParagraph() {
    var paragraph = "<p>";
    for (var i = 0; i <= Math.random() * (6 - 4) + 4; i++) {
        paragraph += getSentence();
    }
    paragraph += "</p>";
    return paragraph;
}

function getLipsum() {
    var lipsum = "";
    for (var i = 0; i < 5; i++) {
        lipsum += getParagraph();
    }
    return lipsum;
}

function placeLipsum() {
    document.getElementById('lipsum').innerHTML = getLipsum();
}

placeLipsum();

document.getElementById("button").onclick = placeLipsum;