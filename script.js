var quotes = [
 "Believe in yourself",
 "Stay positive",
 "Success takes time",
 "Never give up",
 "Dream big"
];

function generateQuote()
{
    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[random];
}
