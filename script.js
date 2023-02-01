let quotes = ["Du må selv være den forandring, som du ønsker at se i verden - Mahatma Gandhi",
"Livet må leves forfra, men kan kun forstås bagfra - Søren Kierkegaard",
"Det er tungt, forbandet tungt, at dø mens hjertet stadig er ungt - H. C. Andersen",
"Vi er alle i rendestenen, men nogle af os kigger mod stjernerne - Oscar Wilde",
"Når en blind leder en blind, falder de begge i graven - Bibelen",
"Det, der ikke dræber os gør os stærkere - Friedrich Nietzsche",
"Folk er ligeså lykkelige, som de beslutter sig for at være - Abraham Lincoln",
"Du skal ikke græde over noget er forbi, men glæde dig over det er sket - Dr. Seuss",
"Det store er ikke at være enten det ene eller det andet, men at være sig selv - og det formår hvert eneste menneske, hvis det vil — Søren Kierkegaard",
"Latter er den korteste afstand mellem to mennesker - Victor Borge"
]

function newQuote() {

    let randomNumber = Math.floor(Math.random() * (quotes.length));
    
    document.getElementById("quote-display").innerHTML = quotes[randomNumber];
}


